import { supabase } from "../../supabase";

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
  const { data, error } = await supabase
    .from("Disease")
    .insert([{ ...newDisease }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Failed to insert data! Please try again.");
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
