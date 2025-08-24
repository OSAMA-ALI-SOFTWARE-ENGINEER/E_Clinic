import { useQuery } from "@tanstack/react-query";
import { getSingleDisease } from "../../services/apiDisease";
import { useParams } from "react-router-dom";

export function useSingleDisease() {
  const { id } = useParams();
  const {
    data: Disease,
    isLoading: isLoadingDisease,
    isError,
  } = useQuery({
    queryKey: ["Disease", id],
    queryFn: () => getSingleDisease(id),
  });

  return { Disease, isLoadingDisease, isError };
}
