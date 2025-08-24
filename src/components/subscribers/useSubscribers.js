import { useQuery } from "@tanstack/react-query";
import { getAllSubscribers } from "../../services/apiSubEmails";

export function useSubscribers() {
  const {
    data: Subscribers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["Subscribers"],
    queryFn: getAllSubscribers,
  });

  return {
    Subscribers,
    isLoading,
    isError,
  };
}
