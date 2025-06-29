import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Komponen ProgressBar untuk visualisasi
const ProgressBar = ({ value, max }) => {
  const percentage = max > 0 ? (value / max) * 100 : 0;
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State untuk menangani error
  const [searchTerm, setSearchTerm] = useState(""); // State untuk input pencarian
  const [sortBy, setSortBy] = useState("name-asc"); // State untuk kriteria pengurutan
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        setLoading(true);
        setError(null);
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://english-app-production-174b.up.railway.app/api/admin/submissions",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setSubmissions(res.data);
      } catch (err) {
        console.error("Failed to fetch submissions", err);
        setError("Gagal memuat data. Silakan coba lagi nanti.");
      } finally {
        setLoading(false);
      }
    };
    fetchSubmissions();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // pastikan '/login' sesuai dengan routing aplikasi kamu
  };

  // useMemo untuk efisiensi, agar tidak menghitung ulang pada setiap render
  const uniqueUsers = useMemo(() => {
    const userMap = new Map();
    submissions.forEach((result) => {
      const key = `${result.user.id}-${result.chapter}`;
      if (
        !userMap.has(key) ||
        result.totalScore > userMap.get(key).highestSubmission.totalScore
      ) {
        userMap.set(key, {
          userId: result.user.id,
          userName: result.user.name,
          chapter: result.chapter,
          highestSubmission: result,
        });
      }
    });

    const summaryMap = new Map();
    userMap.forEach((entry) => {
      const userId = entry.userId;
      if (!summaryMap.has(userId)) {
        summaryMap.set(userId, {
          id: userId,
          name: entry.userName,
          totalSubmissions: 0,
          reviewedSubmissions: 0,
        });
      }
      const summary = summaryMap.get(userId);
      summary.totalSubmissions++;
      if (entry.highestSubmission.isReviewed) {
        summary.reviewedSubmissions++;
      }
    });

    return Array.from(summaryMap.values());
  }, [submissions]); // Hanya akan dijalankan ulang jika 'submissions' berubah

  // Logika untuk filter dan sort
  const filteredAndSortedUsers = useMemo(() => {
    return uniqueUsers
      .filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        switch (sortBy) {
          case "name-asc":
            return a.name.localeCompare(b.name);
          case "name-desc":
            return b.name.localeCompare(a.name);
          case "reviewed-asc":
            return a.reviewedSubmissions - b.reviewedSubmissions;
          case "reviewed-desc":
            return b.reviewedSubmissions - a.reviewedSubmissions;
          case "pending-desc":
            const pendingA = a.totalSubmissions - a.reviewedSubmissions;
            const pendingB = b.totalSubmissions - b.reviewedSubmissions;
            return pendingB - pendingA;
          default:
            return 0;
        }
      });
  }, [uniqueUsers, searchTerm, sortBy]); // Dijalankan ulang jika data, search, atau sort berubah

  // Tampilan Loading yang lebih baik
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Tampilan jika terjadi Error
  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        <h2 className="text-xl">{error}</h2>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Admin Dashboard - Users
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Kontrol Interaktif: Search dan Sort */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 p-4 bg-white rounded-lg shadow">
          <div className="flex-grow">
            <label htmlFor="search" className="sr-only">
              Search by name
            </label>
            <input
              type="text"
              id="search"
              placeholder="Cari nama pengguna..."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex-shrink-0">
            <label htmlFor="sort" className="sr-only">
              Sort by
            </label>
            <select
              id="sort"
              className="w-full md:w-auto p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name-asc">Nama (A-Z)</option>
              <option value="name-desc">Nama (Z-A)</option>
              <option value="pending-desc">Menunggu Review (Terbanyak)</option>
              <option value="reviewed-desc">Sudah Direview (Terbanyak)</option>
              <option value="reviewed-asc">Sudah Direview (Tersedikit)</option>
            </select>
          </div>
        </div>

        {/* Tampilan Grid Pengguna */}
        {filteredAndSortedUsers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedUsers.map((user) => (
              <div
                key={user.id}
                onClick={() => navigate(`/admin/user/${user.id}`)}
                className="p-5 bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-xl font-bold text-gray-800 truncate">
                    {user.name}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    ID Pengguna: {user.id}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700">
                    Status Review: {user.reviewedSubmissions} /{" "}
                    {user.totalSubmissions} Chapter
                  </p>
                  <ProgressBar
                    value={user.reviewedSubmissions}
                    max={user.totalSubmissions}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Tampilan jika tidak ada hasil
          <div className="text-center p-10 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold text-gray-700">
              Tidak ada pengguna ditemukan
            </h3>
            <p className="text-gray-500 mt-2">
              Coba ubah kata kunci pencarian atau filter Anda.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
