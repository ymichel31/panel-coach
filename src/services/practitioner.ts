import { createClient } from "@/lib/supabase/server";

export const getPractitioners = async () => {
    const supabase = await createClient();
    const { data, error } = await supabase.from('practitioners').select('*');
    if (error) {
        console.error(error);
        return [];
    }
    return data;
}

export const getPractitionerById = async (id: string) => {
    const supabase = await createClient();
    const { data, error } = await supabase.from('practitioners').select('*').eq('id', id);
    if (error) {
        console.error(error);
        return null;
    }
    return data;
}