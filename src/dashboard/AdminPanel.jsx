import React, { useEffect } from "react";
import TableData from "./TableData";
import AdminHeader from "../ui/AdminHeader";
import { Outlet, useNavigate } from "react-router-dom";
import { useCurrentUser } from "../components/auth/useCurrentUser";
import toast from "react-hot-toast";
import Sidebar from "./Sidebar";

const AdminPanel = () => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useCurrentUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) return <p> loading...</p>;

  if (isAuthenticated && !isLoading)
    return (
      <div className="grid grid-cols-[20rem_1fr]">
        <Sidebar />

        <div>
          <Outlet />
          {/* <AdminHeader isAuthenticated={isAuthenticated} /> */}
          <TableData />
        </div>
      </div>
    );
};

export default AdminPanel;
