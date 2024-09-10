import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://byuubvkdiddwygztuujz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5dXVidmtkaWRkd3lnenR1dWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NDMxMjUsImV4cCI6MjA0MTUxOTEyNX0.DC_eRfQkvKDMMkxZKWi8grByoVj1QV889lY5RiVhRYQ";

export const supabase = createClient(supabaseUrl, supabaseKey);
