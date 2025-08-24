import { useQuery } from "@tanstack/react-query";
import { getSingleDisease } from "../services/apiDisease";

export function useSingleDisease(id) {
  const {
    data: Disease,
    isLoading,
    isError,
  } = useQuery({
    queryFn: () => getSingleDisease(id),
    queryKey: ["Disease", id],
  });

  return { Disease, isLoading, isError };
}
