import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// Komponen untuk Loading Spinner
const Spinner = () => (
  <div className="flex justify-center items-center h-screen bg-gray-50">
    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-600"></div>
  </div>
);

const UserSubmissions = () => {
  const { userId } = useParams();
  const [submissions, setSubmissions] = useState([]);
  const [userName, setUserName] = useState(""); // State untuk nama pengguna
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State untuk menangani error
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "http://localhost:5000/api/admin/submissions",
          { headers: { Authorization: `Bearer ${token}` } }
        );

        // Filter submission berdasarkan userId dari URL
        const userSubs = res.data.filter((r) => r.user.id === parseInt(userId));

        if (userSubs.length > 0) {
          // Ambil nama pengguna dari data pertama
          setUserName(userSubs[0].user.name);
        }

        // Ambil hanya skor tertinggi per chapter menggunakan Map
        const highestScoreMap = new Map();
        userSubs.forEach((sub) => {
          if (
            !highestScoreMap.has(sub.chapter) ||
            sub.totalScore > highestScoreMap.get(sub.chapter).totalScore
          ) {
            highestScoreMap.set(sub.chapter, sub);
          }
        });

        const sortedSubmissions = Array.from(highestScoreMap.values()).sort(
          (a, b) => a.chapter - b.chapter
        );

        setSubmissions(sortedSubmissions);
      } catch (err) {
        console.error("Failed to fetch user submissions", err);
        setError("Gagal memuat data submission. Coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  // Fungsi helper untuk label chapter, tetap sama
  const getChapterLabel = (ch) =>
    ch === 3
      ? "Mid Exam"
      : ch === 4
      ? "Chapter 3"
      : ch === 5
      ? "Chapter 4"
      : ch === 6
      ? "Final Exam"
      : `Chapter ${ch}`;

  if (loading) return <Spinner />;

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        <h2 className="text-xl">{error}</h2>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Tombol Back yang lebih menarik */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold mb-6 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Kembali ke Dashboard
        </button>

        {/* Header yang dinamis dengan nama pengguna */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Submissions for{" "}
          <span className="text-blue-600">{userName || "User"}</span>
        </h1>

        {/* Daftar Submission */}
        {submissions.length > 0 ? (
          <div className="space-y-4">
            {submissions.map((sub) => {
              const isExam = sub.chapter === 3 || sub.chapter === 6;
              return (
                <div
                  key={sub.id}
                  onClick={() => navigate(`/admin/submission/${sub.id}`)}
                  className="group p-5 bg-white rounded-lg shadow-md hover:shadow-xl hover:border-blue-500 border border-transparent transition-all duration-300 cursor-pointer flex items-center justify-between"
                >
                  {/* Info Chapter dan Status */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">
                      {getChapterLabel(sub.chapter)}
                    </h2>

                    {/* Badge hanya untuk Mid Exam & Final Exam */}
                    {isExam &&
                      (sub.isReviewed ? (
                        <span className="mt-1 inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          Reviewed
                        </span>
                      ) : (
                        <span className="mt-1 inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                          Pending Review
                        </span>
                      ))}
                  </div>

                  {/* Info Skor dan Ikon Navigasi */}
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Highest Score</p>
                      <p className="text-2xl font-bold text-blue-600">
                        {sub.totalScore}
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Tampilan jika pengguna belum ada submission
          <div className="text-center p-10 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700">
              Belum Ada Submission
            </h3>
            <p className="text-gray-500 mt-2">
              Pengguna ini belum mengirimkan tugas apapun.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSubmissions;
