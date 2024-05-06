import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDisease as deleteDiseaseApi } from "../services/apiDisease";
import toast from "react-hot-toast";

export function useDelete() {
  const queryClient = useQueryClient();
  const { mutate: deleteDisease, isPending: isDeleting } = useMutation({
    mutationFn: deleteDiseaseApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Diseases"] });
      toast.success("Disease deleted successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return {
    deleteDisease,
    isDeleting,
  };
}
