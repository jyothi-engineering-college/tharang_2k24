import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "supabase_url";
const supabaseKey =
  "supabaseKey";

export const supabase = createClient(supabaseUrl, supabaseKey);
