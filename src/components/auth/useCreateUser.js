import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useCreateUser() {
  const { mutate: signUp, isPending: isCreating } = useMutation({
    mutationFn: ({ name, email, password, avatar }) =>
      createUser(name, email, password, avatar),
    onSuccess: () => {
      toast.success("Account created successfully");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signUp, isCreating };
}
