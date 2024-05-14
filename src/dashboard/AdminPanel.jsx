import React, { useEffect } from "react";
import TableData from "./TableData";
import AdminHeader from "../ui/AdminHeader";
import { Outlet, useNavigate } from "react-router-dom";
import { useCurrentUser } from "../components/auth/useCurrentUser";
import toast from "react-hot-toast";
import Sidebar from "./Sidebar";
import Card from "./dashboardCards/Card";
import { HiChatBubbleBottomCenter, HiFolder, HiEnvelopeOpen, HiIdentification   } from "react-icons/hi2";



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
                <HiChatBubbleBottomCenter />
                
              }
            />
            <Card icon={
                <HiFolder />
              }/>
            <Card icon={
               <HiEnvelopeOpen />
                
              }/>
            <Card icon={
                <HiIdentification />
              }
            
            />
          </div>
          <Outlet />
          {/* <AdminHeader isAuthenticated={isAuthenticated} /> */}

          <TableData />
        </div>
      </div>
    );
};

export default AdminPanel;
