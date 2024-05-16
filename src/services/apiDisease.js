import { supabase, supabaseUrl } from "../../supabase";

export async function getDiseases() {
  let { data: Diseases, error } = await supabase
    .from("Disease")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.log(error);
    throw new Error("Failed to load data.");
  }

  return Diseases;
}
export async function addDisease(newDisease) {
  const imageName = `${Math.random()}-${newDisease.image - name}`;
  const imagePath = `${supabaseUrl}/storage/v1/object/public/disease-image/${imageName}`;

  const { data, error } = await supabase
    .from("Disease")
    .insert([{ ...newDisease, image: imagePath }])
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error("Failed to insert data! Please try again.");
  }

  const { error: storageError } = await supabase.storage
    .from("disease-image")
    .upload(imageName, newDisease.image);

  if (storageError) {
    console.log(storageError);
    await supabase.from("Disease").delete().eq("id", data.id);
    throw new Error(
      "Disease image could not uploaded and the Disease was not created.",
    );
  }
  return data;
}

export async function deleteDisease(id) {
  const { error } = await supabase.from("Disease").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Failed to delete disease. Try again later.");
  }
}
export async function updateDisease(id, updateData) {
  const { data, error } = await supabase
    .from("Disease")
    .update({ ...updateData })
    .eq("id", id)
    .select();

  if (error) {
    console.log(error);
    throw new Error("Failed to update disease. Try again later.");
  }

  return data;
}

export async function getSingleDisease(id) {
  let { data: Disease, error } = await supabase
    .from("Disease")
    .select("*")
    .eq("id", id);
  if (error) {
    console.log(error);
    throw new Error("Failed to update disease. Try again later.");
  }
  return Disease[0];
}
