import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSubscriber as deleteSubscriberApi } from "../../services/apiSubEmails";
import toast from "react-hot-toast";

export function useDeleteSubscriber() {
  const queryClient = useQueryClient();
  const { mutate: deleteSubscriber, isPending: isDeleting } = useMutation({
    mutationFn: deleteSubscriberApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Subscribers"] });
      toast.success("User deleted successfully.");
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteSubscriber, isDeleting };
}
