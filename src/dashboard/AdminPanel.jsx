import React, { useEffect, useState } from "react";
import TableData from "./TableData";
import AdminHeader from "../ui/AdminHeader";
import { Outlet, useNavigate } from "react-router-dom";
import { useCurrentUser } from "../components/auth/useCurrentUser";
import toast from "react-hot-toast";
import Sidebar from "./Sidebar";
import Card from "./dashboardCards/Card";
import { FcOpenedFolder, FcViewDetails,FcFeedback,FcBusinessContact } from "react-icons/fc";
import { useDiasease } from "../components/TreatementFilterSection/useDiseases";
import { useSubscribers } from "../components/subscribers/useSubscribers";
import Charts from "./Charts";

const AdminPanel = () => {
  const [show, setShow] = useState(false);
  const [showSubs, setShowSubs] = useState(true);
  const navigate = useNavigate();
  const {
    User,
    isLoading,
    isAuthenticated,
    isError: userError,
  } = useCurrentUser();
  const {
    Subscribers,
    isLoading: isLoadingSubs,
    isError: subsError,
  } = useSubscribers();

  const {
    Diseases,
    isLoading: isLoadingDisease,
    isError: diseaseError,
  } = useDiasease();

  const totalDisease = Diseases?.length;
  const totalCategories = Diseases?.filter((cur) => cur.category).length;
  const totalSubs = Subscribers?.length;
  const adminName = User?.user_metadata?.name;

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) return <p> loading...</p>;

  if (isAuthenticated && !isLoading)
    return (
      <div className="relative grid grid-cols-[15rem_1fr]">
        <Sidebar setShow={setShow} />

        <div>
          <div className=" grid grid-cols-1 gap-3 bg-gray-100  p-6 sm:grid-cols-3 md:grid-cols-4">
            <Card
              icon={<FcViewDetails />}
              lable={"Total Disease"}
              value={totalDisease}
              loading={isLoadingDisease}
              error={diseaseError}
            />
            <Card
              icon={<FcOpenedFolder />}
              lable={"total Categories"}
              value={totalCategories}
              loading={isLoadingDisease}
              error={diseaseError}
            />
            <Card
              icon={<FcFeedback />}
              lable={"Total subscribtion"}
              value={totalSubs}
              loading={isLoadingSubs}
              error={subsError}
            />
            <Card
              icon={<FcBusinessContact />}
              lable={"Hey,"}
              value={adminName}
              loading={isLoading}
              error={userError}
            />
          </div>
          {/* {!show && <Charts />} */}

          <Outlet />
          {/* <AdminHeader isAuthenticated={isAuthenticated} /> */}
        </div>
      </div>
    );
};

export default AdminPanel;
