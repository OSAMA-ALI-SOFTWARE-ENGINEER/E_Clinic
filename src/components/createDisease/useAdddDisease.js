import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addDisease as addDiseaseApi } from "../../services/apiDisease";
import toast from "react-hot-toast";

export function useAddDisease() {
  const queryClient = useQueryClient();
  const { mutate: addDisease, isPending: isAdding } = useMutation({
    mutationFn: (newdisease) => addDiseaseApi(newdisease),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Diseases"] });
      toast.success(" Disease added successfully.");
    },
    onError: (err) => {
      toast.error(err?.message);
    },
  });

  return { addDisease, isAdding };
}
