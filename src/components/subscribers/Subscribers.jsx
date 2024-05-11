import React, { useEffect } from "react";
import AdminHeader from "../../ui/AdminHeader";
import { useSubscribers } from "./useSubscribers";
import { useDeleteSubscriber } from "./useDeleteSubscriber";
import { useCurrentUser } from "../../components/auth/useCurrentUser";
import { useNavigate } from "react-router-dom";

const Subscribers = () => {
  const navigate = useNavigate();
  const { deleteSubscriber, isDeleting } = useDeleteSubscriber();
  const { Subscribers, isLoading, isError } = useSubscribers();

  const { isAuthenticated, isLoading: isLoadingUser } = useCurrentUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoadingUser) navigate("/login");
  }, [isAuthenticated, isLoadingUser, navigate]);
  if (isLoading || isLoadingUser) return <p>laoding...</p>;
  if (isError) return <p>error</p>;

  return (
    <div>
      <AdminHeader />
      <div className="mx-auto my-9 max-w-5xl overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>username</th>
              <th>email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {Subscribers?.length === 0 ? (
              <p> no data found at the moment</p>
            ) : (
              Subscribers?.map((cur, i) => {
                return (
                  <tr className="hover:bg-gray-200" key={cur.id}>
                    <th>{i + 1}</th>

                    <td>{cur.username}</td>
                    <td>{cur.email}</td>
                    <td>
                      <button
                        disabled={isDeleting}
                        onClick={() => deleteSubscriber(cur.id)}
                        className=" rounded-md bg-red-400 px-6 py-1.5 capitalize hover:bg-red-700 hover:text-white disabled:cursor-not-allowed disabled:bg-opacity-65"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscribers;
