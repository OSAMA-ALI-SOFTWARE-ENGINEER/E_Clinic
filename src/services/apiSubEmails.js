import { supabase } from "../../supabase";

export async function getAllSubscribers() {
  let { data: EmailSubs, error } = await supabase.from("EmailSubs").select("*");

  if (error) {
    console.log(error);
    throw new Error("Failed to load data!");
  }

  return EmailSubs;
}

export async function addSubscribe(newSub) {
  const { data, error } = await supabase
    .from("EmailSubs")
    .insert([{ ...newSub }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Failed to add in our news letter list!");
  }

  return data;
}
export async function deleteSubscriber(id) {
  const { data, error } = await supabase
    .from("EmailSubs")
    .delete()
    .eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Failed to delete subscriber!");
  }

  return data;
}
