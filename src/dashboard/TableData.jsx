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
    <>
      <div className="mr-12 flex items-end justify-end self-end">
        <Link
          to={"/add-disease"}
          className="rounded-md border border-none bg-cyan-500 hover:bg-cyan-700 px-6 my-4 py-2 font-medium capitalize text-black hover:text-white outline-none transition-all duration-300 hover:shadow-xl active:scale-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Add +
        </Link>
      </div>
      <div className="overflow-x-auto">
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
            {Diseases?.length === 0 ? (
              <tr>
                <td></td>
                <td></td>
                <td className=" text-xl font-semibold capitalize text-gray-400">
                  No data found
                </td>
                <td></td>
              </tr>
            ) : (
              Diseases?.map((cur, i) => {
                return (
                  <tr key={cur.id}>
                    <th>{i + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className=" h-12 w-12 rounded">
                          <img
                            className="border bg-gray-100"
                            src={cur.image ? cur.image : "/default.jpg"}
                          />
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>{cur.name}</p>
                    </td>

                    <th className=" flex items-center gap-2">
                      <button
                        onClick={() => handleUpdate(cur.id)}
                        className=" rounded-md bg-green-300 px-6 py-1.5 capitalize hover:bg-green-700 hover:text-white"
                      >
                        update
                      </button>

                      <button
                        onClick={() => handleDelete(cur.id)}
                        className=" rounded-md bg-red-400 px-6 py-1.5 capitalize hover:bg-red-700 hover:text-white"
                        disabled={isDeleting}
                      >
                        delete
                      </button>
                    </th>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      {showModal && <Modal editID={editID} setShowModal={setShowModal} />}
    </>
  );
};

export default TableData;
