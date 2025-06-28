import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SubmissionDetail = () => {
  const { submissionId } = useParams();
  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [overallEssayScore, setOverallEssayScore] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "http://localhost:5000/api/admin/submissions",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const sub = res.data.find((r) => r.id === parseInt(submissionId));
        setSubmission(sub);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [submissionId]);

  const hasEssayQuestions = () => {
    if (!submission) return false;
    const isExam = submission.chapter === 3 || submission.chapter === 6;
    if (!isExam) return false;
    const answers = JSON.parse(submission.answers);
    return Object.values(answers).some(
      (ans) => ans.type && (ans.type === "fill" || ans.type === "essay")
    );
  };

  const handleSubmitReview = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.patch(
        `http://localhost:5000/api/admin/review/${submission.id}`,
        { manualScore: parseFloat(overallEssayScore) },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Review saved");
      navigate(-1);
    } catch (err) {
      console.error("Failed review", err);
      alert("Failed to save review");
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;

  const parsedAnswers = submission ? JSON.parse(submission.answers) : {};

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <button onClick={() => navigate(-1)} className="text-blue-600 mb-4">
        &larr; Back
      </button>

      <h1 className="text-2xl font-bold mb-2">
        Submission - {submission.user.name}
      </h1>
      <p className="text-gray-600 mb-4">
        Chapter: {submission.chapter} | Score: {submission.totalScore}
      </p>

      <div className="space-y-4">
        {Object.entries(parsedAnswers).map(([qid, answer], idx) => (
          <div
            key={qid}
            className="bg-white border rounded p-4 shadow-sm hover:shadow transition"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="text-lg font-semibold text-gray-800">Q{qid}</div>
              {answer.type && (
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    answer.type === "fill"
                      ? "bg-yellow-100 text-yellow-800"
                      : answer.type === "essay"
                      ? "bg-purple-100 text-purple-800"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {answer.type}
                </span>
              )}
            </div>

            <div className="text-gray-700 text-sm">
              {typeof answer === "string" && <p>{answer}</p>}
              {Array.isArray(answer) && (
                <ul className="list-disc list-inside">
                  {answer.map((ans, i) => (
                    <li key={i}>{ans}</li>
                  ))}
                </ul>
              )}
              {typeof answer === "object" && !Array.isArray(answer) && (
                <div className="space-y-1">
                  {Object.entries(answer).map(([key, val]) => (
                    <div key={key} className="text-sm text-gray-700">
                      <strong>{key}:</strong>{" "}
                      {typeof val === "object" ? JSON.stringify(val) : val}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {hasEssayQuestions() && (
        <div className="mt-8 bg-white border p-6 rounded shadow-sm">
          <label className="block mb-2 font-semibold text-gray-700">
            Overall Fill & Essay Score:
          </label>
          <input
            type="number"
            min="0"
            max="100"
            value={overallEssayScore}
            onChange={(e) => setOverallEssayScore(e.target.value)}
            className="border p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSubmitReview}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
          >
            Submit Review
          </button>
        </div>
      )}
    </div>
  );
};

export default SubmissionDetail;
