import React from "react";
import FormRow from "./FormRow";
import { Controller, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import { toolbarOptions } from "../components/TreatementFilterSection/toolbarOptions";
import { useSingleDisease } from "../dashboard/useSingleDisease";

import { useUpdateDisease } from "../dashboard/useUpdateDisease";
import { useNavigate } from "react-router-dom";

const module = {
  toolbar: toolbarOptions,
};

const Modal = ({ setShowModal, editID }) => {
  const navigate = useNavigate();
  const { Disease, isLoading } = useSingleDisease(editID);
  const { updateDisease, isUpdating } = useUpdateDisease();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: !isLoading && Disease,
  });

  function onSubmit(data) {
    updateDisease(
      { id: editID, updateData: data },
      {
        onSuccess: () => {
          navigate("/dashboard");
        },
      },
    );
  }
  return (
    <div className=" absolute left-0 top-0 z-10 flex h-screen w-full  items-center justify-center backdrop-blur-md">
      <div className=" mx-auto flex items-center justify-center ">
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" flex  max-h-[calc(100vh-5em)] max-w-[80%] flex-col gap-4 overflow-y-scroll rounded-md bg-white p-6 font-primary shadow-xl"
          >
            <h1 className=" mb-6 text-center text-xl font-medium capitalize text-cyan-500">
              Update disease {`"${Disease?.name}"`}
            </h1>
            <FormRow lable={"Disease name"} error={errors?.name?.message}>
              <input
                type="text"
                placeholder="Enter Blog title"
                className={`h-12 w-full rounded-lg border-gray-700 bg-gray-100 p-4 text-cyan-900 shadow-lg outline-none outline-offset-2 placeholder:text-gray-400 focus-visible:border-b-transparent disabled:cursor-not-allowed disabled:bg-cyan-500 sm:w-3/4`}
                {...register("name", {
                  required: "Field is required.",
                })}
              />
            </FormRow>
            <FormRow lable={"Disease Content"}>
              <Controller
                name="content" // Set the name for React Hook Form
                control={control}
                defaultValue=""
                // disabled={isAdding}
                render={({ field }) => (
                  <ReactQuill
                    modules={module}
                    value={field.value}
                    onChange={(value) => field.onChange(value)}
                    className=" rounded-xl border-none bg-gray-100 shadow-xl outline-none disabled:cursor-not-allowed disabled:bg-cyan-500"
                  />
                )}
              />
            </FormRow>

            <FormRow lable={"Disease image"}>
              <input
                type="file"
                className=" file-input file-input-info bg-gray-100 shadow-xl"

                // {...register("blogImage", {
                //   required: "Field is required.",
                //   validate: (value) => {
                //     const isBigImage = value[0].size / 1000;
                //     return isBigImage < 1000 || "Image must be less than 1mb";
                //   },
                // })}
              />
            </FormRow>
            <div className=" mt-6 flex items-center gap-2">
              <button
                disabled={isUpdating}
                className=" disabled:text-bodyColor btn flex min-w-[8rem] items-center justify-center border-none bg-cyan-400 font-semibold uppercase hover:scale-95 hover:bg-cyan-600 disabled:cursor-not-allowed disabled:bg-sky-500 disabled:opacity-60"
                type="submit"
              >
                submit
              </button>
              <button
                onClick={() => setShowModal(false)}
                type="reset"
                className=" btn rounded-md bg-gray-200 px-4 py-2 capitalize text-gray-600"
              >
                cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;
