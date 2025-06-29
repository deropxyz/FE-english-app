import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Play, BookOpen, User, Trophy, Star, Lock } from "lucide-react";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [quizScores, setQuizScores] = useState([]);

  const continueLearning = [
    {
      title: "Chapter 1",
      subtitle: "Famous Athlete",
      color: "bg-teal-500",
      link: "/chapter1",
      chapter: 1,
      order: 1,
      prerequisite: null,
      minScore: 60,
    },
    {
      title: "Chapter 2",
      subtitle: "Watching Sports Events",
      color: "bg-teal-500",
      link: "/chapter2",
      chapter: 2,
      order: 2,
      prerequisite: 1,
      minScore: 60,
    },
    {
      title: "Midterm Exam",
      subtitle: "",
      color: "bg-teal-500",
      link: "/midExam",
      chapter: 3,
      order: 3,
      prerequisite: 2,
      minScore: 60,
    },
    {
      title: "Chapter 3",
      subtitle: "Sports & Health",
      color: "bg-blue-500",
      link: "/chapter3",
      chapter: 4,
      order: 4,
      prerequisite: 3,
      minScore: 60,
    },
    {
      title: "Chapter 4",
      subtitle: "Healthy Food",
      color: "bg-purple-500",
      link: "/chapter4",
      chapter: 5,
      order: 5,
      prerequisite: 4,
      minScore: 60,
    },
    {
      title: "Final Exam",
      subtitle: "",
      color: "bg-red-500",
      link: "/finalExam",
      chapter: 6,
      order: 6,
      prerequisite: 5,
      minScore: 70,
    },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetchUserAndResults();
    }
  }, [navigate]);

  const fetchUserAndResults = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const [profileRes, resultsRes] = await Promise.all([
        axios.get(
          "https://english-app-production-174b.up.railway.app/api/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        ),
        axios.get(
          "https://english-app-production-174b.up.railway.app/api/quiz/results",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        ),
      ]);

      setUser(profileRes.data);
      setQuizScores(resultsRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        localStorage.removeItem("token");
        navigate("/login", {
          state: { message: "Session expired. Please log in again." },
        });
      }
    }
  };

  const getInitials = (name) =>
    name
      ? name
          .split(" ")
          .map((word) => word[0])
          .join("")
          .slice(0, 2)
          .toUpperCase()
      : "U";

  const getScoreByChapter = (chapter) => {
    const found = quizScores.find((r) => Number(r.chapter) === Number(chapter));
    return found ? parseFloat(found.totalScore).toFixed(2) : null;
  };

  const getAutoManualScore = (chapter) => {
    const found = quizScores.find((r) => Number(r.chapter) === Number(chapter));
    if (found) {
      return {
        autoScore: found.autoScore ? found.autoScore.toFixed(2) : "0",
        manualScore: found.manualScore ? found.manualScore.toFixed(2) : "0",
      };
    }
    return { autoScore: "0", manualScore: "0" };
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreIcon = (score) => {
    if (score >= 80) return <Trophy className="w-4 h-4 text-green-600" />;
    if (score >= 60) return <Star className="w-4 h-4 text-yellow-600" />;
    return <Star className="w-4 h-4 text-red-600" />;
  };

  const isChapterUnlocked = (course) => {
    if (!course.prerequisite) return true;
    const prerequisiteScore = getScoreByChapter(course.prerequisite);
    if (!prerequisiteScore) return false;
    return prerequisiteScore >= course.minScore;
  };

  const getLockReason = (course) => {
    if (!course.prerequisite) return null;
    const prerequisiteItem = continueLearning.find(
      (item) => item.chapter === course.prerequisite
    );
    const prerequisiteName = prerequisiteItem
      ? prerequisiteItem.title
      : `Chapter ${course.prerequisite}`;
    const prerequisiteScore = getScoreByChapter(course.prerequisite);

    if (!prerequisiteScore) {
      return `Complete ${prerequisiteName} first`;
    }

    if (prerequisiteScore < course.minScore) {
      return `Score ${course.minScore}+ in ${prerequisiteName} required (current: ${prerequisiteScore})`;
    }

    return null;
  };

  if (user === null && localStorage.getItem("token")) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        Loading...
      </div>
    );
  }

  if (user === null) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              {getInitials(user?.name)}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, {user?.name || "Guest"}
              </h1>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Let's continue learning
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {continueLearning.map((course, index) => {
              const score = getScoreByChapter(course.chapter);
              const isUnlocked = isChapterUnlocked(course);
              const lockReason = getLockReason(course);
              const { autoScore, manualScore } = getAutoManualScore(
                course.chapter
              );

              const CardContent = (
                <div className={`p-6 ${!isUnlocked ? "opacity-60" : ""}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 ${
                        isUnlocked ? course.color : "bg-gray-400"
                      } rounded-lg flex items-center justify-center text-white relative`}
                    >
                      {!isUnlocked && <Lock className="w-6 h-6" />}
                    </div>
                    {score && isUnlocked && (
                      <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-full">
                        {getScoreIcon(score)}
                        <span
                          className={`text-xs font-medium ${getScoreColor(
                            score
                          )}`}
                        >
                          {score}
                        </span>
                      </div>
                    )}
                    {!isUnlocked && (
                      <div className="flex items-center space-x-1 bg-red-100 px-2 py-1 rounded-full">
                        <Lock className="w-3 h-3 text-red-600" />
                        <span className="text-xs font-medium text-red-600">
                          Locked
                        </span>
                      </div>
                    )}
                  </div>

                  <h3
                    className={`font-semibold mb-1 ${
                      isUnlocked ? "text-gray-900" : "text-gray-500"
                    }`}
                  >
                    {course.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      isUnlocked ? "text-gray-600" : "text-gray-400"
                    }`}
                  >
                    {isUnlocked ? course.subtitle : lockReason}
                  </p>

                  {isUnlocked && score ? (
                    <>
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-600">Quiz Score</span>
                          <span
                            className={`font-medium ${getScoreColor(score)}`}
                          >
                            {score} / 100
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${
                              score >= 80
                                ? "bg-green-500"
                                : score >= 60
                                ? "bg-yellow-500"
                                : "bg-red-500"
                            }`}
                            style={{ width: `${score}%` }}
                          />
                        </div>
                      </div>
                      {(course.chapter === 3 || course.chapter === 6) && (
                        <div className="text-xs text-gray-600 space-y-1">
                          <div>
                            Auto Score:{" "}
                            <span className="font-semibold">{autoScore}</span>
                          </div>
                          <div>
                            Manual Score:{" "}
                            <span className="font-semibold">{manualScore}</span>
                          </div>
                        </div>
                      )}
                    </>
                  ) : isUnlocked ? (
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">Quiz Score</span>
                        <span className="text-gray-400 font-medium">
                          Not taken
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gray-300 h-2 rounded-full"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-400">Quiz Score</span>
                        <span className="text-gray-400 font-medium">
                          Locked
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gray-300 h-2 rounded-full"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              );

              return isUnlocked ? (
                <Link
                  to={course.link}
                  key={index}
                  className="block bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow"
                >
                  {CardContent}
                </Link>
              ) : (
                <div
                  key={index}
                  className="block bg-white rounded-xl shadow-sm border cursor-not-allowed"
                  title={lockReason}
                >
                  {CardContent}
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
