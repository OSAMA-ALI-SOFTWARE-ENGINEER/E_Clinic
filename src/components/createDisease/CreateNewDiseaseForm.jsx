import React from "react";
import { Controller, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import FormRow from "../../ui/FormRow";
import { toolbarOptions } from "../TreatementFilterSection/toolbarOptions";
import { useAddDisease } from "./useAdddDisease";
import { useNavigate } from "react-router-dom";

const module = {
  toolbar: toolbarOptions,
};

const CreateDiseaseForm = () => {
  const navigate = useNavigate();
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { addDisease, isAdding } = useAddDisease();

  function onSubmit(data) {
    const image = data.image[0];
    addDisease(
      { ...data, image },
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
        className=" relative flex max-w-[80%] flex-col gap-4 rounded-md bg-slate-200 p-6 font-primary shadow-xl"
      >
        <h2 className="text-center text-xl font-bold text-sky-500">
          Add New Disease
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
        >
          ✕
        </button>
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

        <FormRow lable={"Disease Category"}>
          <Controller
            name="category" // Set the name for React Hook Form
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

        {/* Disease Doctor Treatment */}
        <FormRow lable={"Doctor Treatment"}>
          <Controller
            name="doctor" // Set the name for React Hook Form
            control={control}
            defaultValue=""
            disabled={isAdding}
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

        {/* Disease Homopathic Treatment */}
        <FormRow lable={"Homopathic Treatment"}>
          <Controller
            name="homopathic" // Set the name for React Hook Form
            control={control}
            defaultValue=""
            disabled={isAdding}
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

        {/* Disease Chinese treatment */}
        <FormRow lable={"Chinese Treatment"}>
          <Controller
            name="chinese" // Set the name for React Hook Form
            control={control}
            defaultValue=""
            disabled={isAdding}
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

        {/* Disease Herbal treatment */}
        <FormRow lable={"Herbal Treatment"}>
          <Controller
            name="herbal" // Set the name for React Hook Form
            control={control}
            defaultValue=""
            disabled={isAdding}
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

        <FormRow lable={"Disease image"} error={errors?.image?.message}>
          <input
            disabled={isAdding}
            type="file"
            className=" file-input file-input-info bg-gray-100"
            {...register("image", {
              required: "Field is required.",
              validate: (value) => {
                const isBigImage = value[0].size / 1000;
                return isBigImage < 1000 || "Image must be less than 1mb";
              },
            })}
          />
        </FormRow>

        <div className=" mt-6 flex gap-2">
          <button
            disabled={isAdding}
            className="text-bodyColor disabled:text-bodyColor btn flex min-w-[8rem] items-center justify-center border-none bg-cyan-400 font-semibold uppercase hover:scale-95 hover:bg-cyan-600 disabled:cursor-not-allowed disabled:bg-sky-500 disabled:opacity-60"
            type="submit"
          >
            submit
          </button>
          <button
            disabled={isAdding}
            className="text-bodyColor disabled:text-bodyColor btn flex min-w-[8rem] items-center justify-center border-none bg-cyan-400 font-semibold uppercase hover:scale-95 hover:bg-cyan-600 disabled:cursor-not-allowed disabled:bg-sky-500 disabled:opacity-60"
            type="reset"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateDiseaseForm;
