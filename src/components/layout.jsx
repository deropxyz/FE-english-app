// components/Layout.jsx
import React, { useEffect, useState } from "react";
import Header from "./header";
import axios from "axios";

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get("http://localhost:5000/api/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Failed to fetch user:", err));
  }, []);

  return (
    <div>
      <Header user={user} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
