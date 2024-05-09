import React from "react";
import { Controller, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FormRow from "../ui/FormRow";
import { toolbarOptions } from "../components/TreatementFilterSection/toolbarOptions";
import { useAddDisease } from "../components/createDisease/useAdddDisease";

const module = {
  toolbar: toolbarOptions,
};

const AddDisease = () => {
  
  const { register, control, formState:{errors}, handleSubmit, reset } = useForm();
  const { addDisease, isAdding } = useAddDisease();

  function onSubmit(data) {
    addDisease(
      { ...data },
      {
        onSuccess: () => {
          reset();
        },
      },
    );
  }

  return (
    <div className=" flex items-center justify-center bg-gradient-to-br from-stone-300 to-cyan-200 p-8 text-cyan-950">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex max-w-[80%] flex-col gap-4 rounded-md p-6 font-primary shadow-xl bg-slate-200"
      >
        <FormRow lable={"Disease name"} error={errors?.name?.message}>
          <input
            disabled={isAdding}
            type="text"
            placeholder="Enter Blog title"
            className={`h-12 w-full rounded-lg border-gray-700 bg-base-100 p-4 text-stone-900 shadow-lg outline-none outline-offset-2 placeholder:text-cyan-600 focus-visible:border-b-transparent disabled:cursor-not-allowed disabled:bg-cyan-500 sm:w-3/4`}
            {...register("name", {
              required: "Field is required.",
            })}
          />
        </FormRow>
        <FormRow lable={"Disease Overview"}>
          <Controller
            name="overview" // Set the name for React Hook Form
            control={control}
            defaultValue=""
            disabled={isAdding}
            render={({ field }) => (
              <ReactQuill
                modules={module}
                value={field.value}
                
                onChange={(value) => field.onChange(value)}
                className=" rounded-xl border-none bg-base-100 shadow-xl outline-none disabled:cursor-not-allowed disabled:bg-cyan-500"
              />
            )}
          />
        </FormRow>
        <FormRow lable={"Disease Symptoms"}>
          <Controller
            name="symptoms" // Set the name for React Hook Form
            control={control}
            defaultValue=""
            disabled={isAdding}
            render={({ field }) => (
              <ReactQuill
                modules={module}
                value={field.value}
                
                onChange={(value) => field.onChange(value)}
                className=" rounded-xl border-none bg-base-100 shadow-xl outline-none disabled:cursor-not-allowed disabled:bg-cyan-500"
              />
            )}
          />
        </FormRow>
        <FormRow lable={"Disease Causes"}>
          <Controller
            name="causes" // Set the name for React Hook Form
            control={control}
            defaultValue=""
            disabled={isAdding}
            render={({ field }) => (
              <ReactQuill
                modules={module}
                value={field.value}
                
                onChange={(value) => field.onChange(value)}
                className=" rounded-xl border-none bg-base-100 shadow-xl outline-none disabled:cursor-not-allowed disabled:bg-cyan-500"
              />
            )}
          />
        </FormRow>
        <FormRow lable={"Disease Prevention"}>
          <Controller
            name="prevention" // Set the name for React Hook Form
            control={control}
            defaultValue=""
            disabled={isAdding}
            render={({ field }) => (
              <ReactQuill
                modules={module}
                value={field.value}
                
                onChange={(value) => field.onChange(value)}
                className=" rounded-xl border-none bg-base-100 shadow-xl outline-none disabled:cursor-not-allowed disabled:bg-cyan-500"
              />
            )}
          />
        </FormRow>
        <FormRow lable={"Disease Treatment"}>
          <Controller
            name="treatment" // Set the name for React Hook Form
            control={control}
            defaultValue=""
            disabled={isAdding}
            render={({ field }) => (
              <ReactQuill
                modules={module}
                value={field.value}
                
                onChange={(value) => field.onChange(value)}
                className=" rounded-xl border-none bg-base-100 shadow-xl outline-none disabled:cursor-not-allowed disabled:bg-cyan-500"
              />
            )}
          />
        </FormRow>
        {/* <FormRow lable={"Disease Content"}>
          <Controller
            name="content" // Set the name for React Hook Form
            control={control}
            defaultValue=""
            disabled={isAdding}
            render={({ field }) => (
              <ReactQuill
                modules={module}
                value={field.value}
                
                onChange={(value) => field.onChange(value)}
                className=" rounded-xl border-none bg-base-100 shadow-xl outline-none disabled:cursor-not-allowed disabled:bg-cyan-500"
              />
            )}
          />
        </FormRow> */}

        <FormRow lable={"Disease image"}>
          <input
            disabled={isAdding}
            type="file"
            className=" file-input file-input-info bg-base-100 shadow-xl"

            // {...register("blogImage", {
            //   required: "Field is required.",
            //   validate: (value) => {
            //     const isBigImage = value[0].size / 1000;
            //     return isBigImage < 1000 || "Image must be less than 1mb";
            //   },
            // })}
          />
        </FormRow>
        <div className=" flex gap-2 mt-6">
          <button
            disabled={isAdding}
            className="text-bodyColor disabled:text-bodyColor btn flex min-w-[8rem] items-center justify-center border-none bg-cyan-400 font-semibold uppercase hover:scale-95 hover:bg-cyan-600 disabled:cursor-not-allowed disabled:bg-sky-500 disabled:opacity-60"
            type="submit"
          >
            submit
          </button>
          <button
            // disabled={isAdding}
            className="text-bodyColor disabled:text-bodyColor btn flex min-w-[8rem] items-center justify-center border-none bg-cyan-400 font-semibold uppercase hover:scale-95 hover:bg-cyan-600 disabled:cursor-not-allowed disabled:bg-sky-500 disabled:opacity-60"
            type="reset"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDisease;
