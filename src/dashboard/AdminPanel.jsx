import React from "react";
import TableData from "./TableData";
import AdminHeader from "../ui/AdminHeader";

const AdminPanel = () => {
  // const navigate = useNavigate();
  // const { isLoading, isAuthenticated } = useCurrentUser();

  // useEffect(() => {
  //   if (!isLoading && isAuthenticated) return navigate("/dashboard");
  // }, [isLoading, isAuthenticated, navigate]);
  return (
    <div className=" mx-auto my-8 max-w-[1000px]">
      <AdminHeader />
      <TableData />
    </div>
  );
};

export default AdminPanel;
