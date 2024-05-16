import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://avrzcbwhzojbuccpsxnb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2cnpjYndoem9qYnVjY3BzeG5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5MDQ0NTgsImV4cCI6MjAzMDQ4MDQ1OH0.se6xO7CEJ_KBvCtWeNG7SJVb0mCHWfhl57_zaf_rK5M";
export const supabase = createClient(supabaseUrl, supabaseKey);
