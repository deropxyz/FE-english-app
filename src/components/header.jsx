import React, { useState } from "react";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, LogOut } from "lucide-react";

const Header = ({ user, title = "SmartLish" }) => {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const getInitials = (name) => {
    return name
      ? name
          .split(" ")
          .map((word) => word[0])
          .join("")
          .slice(0, 2)
          .toUpperCase()
      : "U";
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setShowLogoutPopup(false);
    alert("Anda telah berhasil logout.");
    navigate("/login");
  };

  const isActivePath = (paths) => paths.includes(location.pathname);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Title */}
          <div
            className="text-2xl font-bold text-purple-600 cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            {title}
          </div>

          {/* Navigation */}
          <nav className="flex space-x-6 text-sm font-medium text-gray-700 relative">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-semibold"
                  : "hover:text-purple-500"
              }
            >
              Dashboard
            </NavLink>

            {/* Materi Dropdown */}
            <div
              className="relative"
              onClick={() => setOpenDropdown("materi")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center ${
                  isActivePath([
                    "/chapter1",
                    "/chapter2",
                    "/chapter3",
                    "/chapter4",
                  ])
                    ? "text-purple-600 font-semibold"
                    : "hover:text-purple-500"
                }`}
              >
                Materi <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {openDropdown === "materi" && (
                <div className="absolute z-20 bg-white shadow-md rounded-md mt-2 w-40">
                  {[1, 2, 3, 4].map((n) => (
                    <NavLink
                      key={n}
                      to={`/chapter${n}`}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? "bg-purple-100 text-purple-700"
                            : "hover:bg-gray-100"
                        }`
                      }
                    >
                      Chapter {n}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Quiz Dropdown */}
            <div
              className="relative"
              onClick={() => setOpenDropdown("quiz")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center ${
                  isActivePath([
                    "/chapter1/quiz",
                    "/chapter2/quiz",
                    "/chapter3/quiz",
                    "/chapter4/quiz",
                  ])
                    ? "text-purple-600 font-semibold"
                    : "hover:text-purple-500"
                }`}
              >
                Quiz <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {openDropdown === "quiz" && (
                <div className="absolute z-20 bg-white shadow-md rounded-md mt-2 w-40">
                  {[1, 2, 3, 4].map((n) => (
                    <NavLink
                      key={n}
                      to={`/chapter${n}/quiz`}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm ${
                          isActive
                            ? "bg-purple-100 text-purple-700"
                            : "hover:bg-gray-100"
                        }`
                      }
                    >
                      Quiz {n}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Exam Dropdown */}
            <div
              className="relative"
              onClick={() => setOpenDropdown("exam")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center ${
                  isActivePath(["/midExam", "/finalExam"])
                    ? "text-purple-600 font-semibold"
                    : "hover:text-purple-500"
                }`}
              >
                Exam <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {openDropdown === "exam" && (
                <div className="absolute z-20 bg-white shadow-md rounded-md mt-2 w-40">
                  <NavLink
                    to="/midExam"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm ${
                        isActive
                          ? "bg-purple-100 text-purple-700"
                          : "hover:bg-gray-100"
                      }`
                    }
                  >
                    Mid Exam
                  </NavLink>
                  <NavLink
                    to="/finalExam"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm ${
                        isActive
                          ? "bg-purple-100 text-purple-700"
                          : "hover:bg-gray-100"
                      }`
                    }
                  >
                    Final Exam
                  </NavLink>
                </div>
              )}
            </div>
          </nav>

          {/* User Avatar & Logout */}
          <div className="relative flex items-center space-x-4">
            <button
              onClick={() => setShowLogoutPopup(!showLogoutPopup)}
              className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              aria-label="User menu"
            >
              {getInitials(user?.name)}
            </button>

            {showLogoutPopup && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-10">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
