import React, { useEffect } from "react";
import TableData from "./TableData";
import AdminHeader from "../ui/AdminHeader";
import { Outlet, useNavigate } from "react-router-dom";
import { useCurrentUser } from "../components/auth/useCurrentUser";
import toast from "react-hot-toast";
import Sidebar from "./Sidebar";
import Card from "./dashboardCards/Card";

const AdminPanel = () => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useCurrentUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) return <p> loading...</p>;

  if (isAuthenticated && !isLoading)
    return (
      <div className="grid grid-cols-[15rem_1fr]">
        <Sidebar />

        <div>
          <div className=" grid grid-cols-4  gap-3 bg-gray-100 p-6">
            <Card
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
              }
            />
            <Card />
            <Card />
            <Card />
          </div>
          <Outlet />
          {/* <AdminHeader isAuthenticated={isAuthenticated} /> */}

          <TableData />
        </div>
      </div>
    );
};

export default AdminPanel;
