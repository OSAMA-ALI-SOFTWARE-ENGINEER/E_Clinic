import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useCurrentUser() {
  const {
    data: User,
    isLoading,
    isError,
  } = useQuery({
    queryFn: getCurrentUser,
    queryKey: ["User"],
  });

  return {
    User,
    isLoading,
    isError,
    isAuthenticated: User?.role === "authenticated",
    isAdmin: User?.user_metadata.isAdmin,
  };
}
