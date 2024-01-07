import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://gngwainctcbjotncrins.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImduZ3dhaW5jdGNiam90bmNyaW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3NTEyOTIsImV4cCI6MjAxNjMyNzI5Mn0.MCPf6xAabx3wciYPs5Tis08aMakzf9zbxZolmmzjvd4";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;