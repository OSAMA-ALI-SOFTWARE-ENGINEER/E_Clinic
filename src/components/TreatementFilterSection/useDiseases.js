import { useQuery } from "@tanstack/react-query";
import { getDiseases } from "../../services/apiDisease";

export function useDiasease() {
  const {
    data: Diseases,
    isLoading,
    isError,
  } = useQuery({
    queryFn: getDiseases,
    queryKey: ["Diseases"],
  });

  return { Diseases, isLoading, isError };
}
