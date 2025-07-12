import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Trophy, Star } from "lucide-react";
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
    },
    {
      title: "Chapter 2",
      subtitle: "Watching Sports Events",
      color: "bg-teal-500",
      link: "/chapter2",
      chapter: 2,
    },
    {
      title: "Midterm Exam",
      subtitle: "",
      color: "bg-teal-500",
      link: "/midExam",
      chapter: 3,
    },
    {
      title: "Chapter 3",
      subtitle: "Sports & Health",
      color: "bg-blue-500",
      link: "/chapter3",
      chapter: 4,
    },
    {
      title: "Chapter 4",
      subtitle: "Healthy Food",
      color: "bg-purple-500",
      link: "/chapter4",
      chapter: 5,
    },
    {
      title: "Final Exam",
      subtitle: "",
      color: "bg-red-500",
      link: "/finalExam",
      chapter: 6,
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

  if (user === null && localStorage.getItem("token")) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        Loading...
      </div>
    );
  }

  if (user === null) return null;

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
              const { autoScore, manualScore } = getAutoManualScore(
                course.chapter
              );

              return (
                <Link
                  to={course.link}
                  key={index}
                  className="block bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center text-white`}
                      >
                        {course.title[0]}
                      </div>
                      {score && (
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
                    </div>

                    <h3 className="font-semibold mb-1 text-gray-900">
                      {course.title}
                    </h3>
                    <p className="text-sm mb-4 text-gray-600">
                      {course.subtitle}
                    </p>

                    {score ? (
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
                              <span className="font-semibold">
                                {manualScore}
                              </span>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
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
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
