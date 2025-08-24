import { useEffect } from "react";
import { useCurrentUser } from "../components/auth/useCurrentUser";

export default function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useCurrentUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading) return <Spinner />;

  if (isAuthenticated) return children;
}
