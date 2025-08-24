import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateDisease as updateDiseaseApi } from "../services/apiDisease";
import toast from "react-hot-toast";

export function useUpdateDisease() {
  const queryClient = useQueryClient();
  const { mutate: updateDisease, isPending: isUpdating } = useMutation({
    mutationFn: ({ id, updateData }) => updateDiseaseApi(id, updateData),

    onSuccess: () => {
      toast.success("Data updated.");
      queryClient.invalidateQueries(["Diseases"]);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateDisease, isUpdating };
}
