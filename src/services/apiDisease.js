import { supabase } from "../../supabase";

export async function getDiseases() {
  let { data: Diseases, error } = await supabase.from("Disease").select("*");

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
