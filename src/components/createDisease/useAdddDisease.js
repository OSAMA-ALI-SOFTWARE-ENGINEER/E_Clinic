import { useMutation } from "@tanstack/react-query";
import { addDisease as addDiseaseApi } from "../../services/apiDisease";

export function useAddDisease() {
  const { mutate: addDisease, isPending: isAdding } = useMutation({
    mutationFn: (newdisease) => addDiseaseApi(newdisease),
    onSuccess: () => {
      alert(" disease added successfully.");
    },
    onError: (err) => {
      alert(err?.message);
    },
  });

  return { addDisease, isAdding };
}
