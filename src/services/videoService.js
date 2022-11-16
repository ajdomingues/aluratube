import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://ivwptwduqxtxhylwgkuu.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2d3B0d2R1cXh0eGh5bHdna3V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1Mzc5MTIsImV4cCI6MTk4NDExMzkxMn0.XcD1bWFKpmkJP8grGo-0DrHDhWOyHMZ_dyaGAlE-n5c";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
           return supabase.from("video")
                .select("*");                
        }
    }
}