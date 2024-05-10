import React, { useState } from "react";
import { useDiasease } from "../components/TreatementFilterSection/useDiseases";
import ErrorMessage from "../ui/ErrorMessage";
import { useDelete } from "./useDelete";
import { Link } from "react-router-dom";
import Modal from "../ui/Modal";

const TableData = () => {
  const { Diseases, isLoading, isError } = useDiasease();
  const { deleteDisease, isDeleting } = useDelete();

  const [showModal, setShowModal] = useState(false);
  const [editID, setEditID] = useState("");

  function handleDelete(id) {
    deleteDisease(id);
  }

  function handleUpdate(id) {
    setEditID(id);
    setShowModal(true);
  }

  if (isLoading) return <p>Loading...</p>;
  if (isError)
    return <ErrorMessage>Something went wrong on the server.</ErrorMessage>;
  return (
    <div className="overflow-x-auto">
      {Diseases?.length === 0 ? (
        <div className=" flex items-center justify-center p-8">
          <div>
            <p className=" font-medium">No data found at the moment.</p>
          </div>
        </div>
      ) : (
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Picture</th>
              <th>Disease name</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {Diseases?.map((cur, i) => {
              return (
                <tr key={cur.id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className=" h-12 w-12 rounded-md">
                        <img src={cur.image} alt={cur.name} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <p>{cur.name}</p>
                  </td>

                  <th className=" flex items-center ">
                    <button
                      onClick={() => handleUpdate(cur.id)}
                      className="btn btn-ghost btn-xs bg-green-300 hover:bg-green-700 hover:text-white"
                    >
                      update
                    </button>
                    <button
                      onClick={() => handleDelete(cur.id)}
                      className="btn btn-ghost btn-xs bg-red-400 hover:bg-red-700 hover:text-white"
                      disabled={isDeleting}
                    >
                      delete
                    </button>
                    <Link
                      to={"/add-disease"}
                      className="btn btn-ghost btn-xs bg-sky-400 hover:bg-sky-700 hover:text-white"
                    >
                      add
                    </Link>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {showModal && <Modal editID={editID} setShowModal={setShowModal} />}
    </div>
  );
};

export default TableData;
