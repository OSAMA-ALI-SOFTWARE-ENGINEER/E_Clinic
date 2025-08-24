import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSubscribe as addSubscribeApi } from "../../services/apiSubEmails";
import toast from "react-hot-toast";

export function useAddSubscriber() {
  const queryClient = useQueryClient();

  const { mutate: addSubscriber, isPending: isAdding } = useMutation({
    mutationFn: addSubscribeApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Subscribers"] });
      toast.success(
        "Welcome! You are added successfully in our news letter list.",
      );
    },
    onError: (err) => toast.error(err.message),
  });

  return { addSubscriber, isAdding };
}
