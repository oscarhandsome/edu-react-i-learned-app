import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zpbeigopymviogonmopc.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwYmVpZ29weW12aW9nb25tb3BjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQxOTUxMTEsImV4cCI6MTk4OTc3MTExMX0.V_88atlowT4nytXbzNQwTMi96unXDdpTvWSNoReEuuE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
