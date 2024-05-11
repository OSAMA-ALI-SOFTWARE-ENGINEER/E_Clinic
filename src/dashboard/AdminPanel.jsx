import React, { useEffect } from "react";
import TableData from "./TableData";
import AdminHeader from "../ui/AdminHeader";
import { Outlet, useNavigate } from "react-router-dom";
import { useCurrentUser } from "../components/auth/useCurrentUser";
import toast from "react-hot-toast";

const AdminPanel = () => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useCurrentUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) return <p> loading...</p>;

  if (isAuthenticated && !isLoading)
    return (
      <div className="">
        <Outlet />
        <AdminHeader isAuthenticated={isAuthenticated} />
        <TableData />
      </div>
    );
};

export default AdminPanel;
