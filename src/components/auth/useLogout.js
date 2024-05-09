import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogOut() {
  const { mutate: logout, isPending: isOuting } = useMutation({
    mutationFn: logoutApi,

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { logout, isOuting };
}
