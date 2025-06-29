import React, { useEffect, useState } from "react";
import axios from "axios";

const QuizReview = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://english-app-production-174b.up.railway.app/api/quiz/result/last",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch quiz result.");
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, []);

  if (loading) return <div>Loading review...</div>;
  if (error) return <div>{error}</div>;
  if (!data || !data.results) return <div>No result found</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Quiz Review</h1>
      <p className="mb-4">
        You scored <strong>{data.score}</strong> out of{" "}
        <strong>{data.total}</strong> ({data.percentage}%)
      </p>

      {data.results.map((r, idx) => (
        <div key={r.questionId} className="mb-6">
          <p className="font-semibold">
            {idx + 1}. {r.question}
          </p>
          <p>
            Your Answer:{" "}
            <span className="text-blue-600">
              {JSON.stringify(r.yourAnswer)}
            </span>
          </p>
          <p>
            {r.isCorrect ? (
              <span className="text-green-600 font-semibold">✅ Correct</span>
            ) : (
              <span className="text-red-600 font-semibold">
                ❌ Incorrect – Correct Answer:{" "}
                <span className="text-black">
                  {JSON.stringify(r.correctAnswer)}
                </span>
              </span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QuizReview;
