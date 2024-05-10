import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogOut() {
  const queryClient = useQueryClient();
  const { mutate: logout, isPending: isOuting } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["User"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { logout, isOuting };
}
