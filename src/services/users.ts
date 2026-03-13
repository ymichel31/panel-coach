import { createClient } from "@/lib/supabase/server";
import { UserInput } from "@/types/user";

export const createUser = async (user: UserInput) => {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
    });

    if (error) {
        console.error(error);
        return null;
    }
    
    return data.user;
};