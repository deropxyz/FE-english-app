import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Chapter1 from "./pages/chapter1";
import Chapter2 from "./pages/chapter2";
import Chapter3 from "./pages/chapter3";
import Chapter4 from "./pages/chapter4";
import Chapter1q from "./quiz/Chapter1Quiz";
import Chapter2q from "./quiz/Chapter2q";
import Chapter3q from "./quiz/Chapter3q";
import Chapter4q from "./quiz/Chapter4q";
import MidExamQuiz from "./quiz/midExam";
import FinalExamQuiz from "./quiz/FinalExam";
import QuizReview from "./quiz/QuizReview";
import AdminDashboard from "./pages/adminDashboard";
import AdminRoute from "./components/adminRoute";
import UserSubmissions from "./pages/usersubmission";
import SubmissionDetail from "./pages/submissionDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Private routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route path="/admin/user/:userId" element={<UserSubmissions />} />
        <Route
          path="/admin/submission/:submissionId"
          element={<SubmissionDetail />}
        />
        <Route
          path="/chapter1"
          element={
            <PrivateRoute>
              <Chapter1 />
            </PrivateRoute>
          }
        />
        <Route
          path="/chapter2"
          element={
            <PrivateRoute>
              <Chapter2 />
            </PrivateRoute>
          }
        />
        <Route
          path="/chapter3"
          element={
            <PrivateRoute>
              <Chapter3 />
            </PrivateRoute>
          }
        />
        <Route
          path="/chapter4"
          element={
            <PrivateRoute>
              <Chapter4 />
            </PrivateRoute>
          }
        />
        <Route
          path="/chapter1/quiz"
          element={
            <PrivateRoute>
              <Chapter1q />
            </PrivateRoute>
          }
        />
        <Route
          path="/chapter2/quiz"
          element={
            <PrivateRoute>
              <Chapter2q />
            </PrivateRoute>
          }
        />
        <Route
          path="/chapter3/quiz"
          element={
            <PrivateRoute>
              <Chapter3q />
            </PrivateRoute>
          }
        />
        <Route
          path="/chapter4/quiz"
          element={
            <PrivateRoute>
              <Chapter4q />
            </PrivateRoute>
          }
        />
        <Route
          path="/midExam"
          element={
            <PrivateRoute>
              <MidExamQuiz />
            </PrivateRoute>
          }
        />
        <Route
          path="/finalExam"
          element={
            <PrivateRoute>
              <FinalExamQuiz />
            </PrivateRoute>
          }
        />
        <Route
          path="/quiz-review"
          element={
            <PrivateRoute>
              <QuizReview />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
