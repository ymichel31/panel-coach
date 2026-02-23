import { createClient } from "@/lib/supabase/server";

import type { SkillInput } from "@/types/skill";

export const getSkills = async () => {
    const supabase = await createClient();
    const { data, error } = await supabase.from('skills').select('*');
    if (error) {
        console.error(error);
        return [];
    }       
    return data;
}

export const getSkillById = async (id: string) => {
    const supabase = await createClient();
    const { data, error } = await supabase.from('skills').select('*').eq('id', id);
    if (error) {
        console.error(error);
        return null;
    }
    return data;
}

export const createSkill = async (skill: SkillInput) => {
    const supabase = await createClient();
    const { data, error } = await supabase.from('skills').insert(skill).select('*');
    if (error) {
        console.error(error);
        return null;
    }
    return data;
}

export const updateSkill = async (skill: SkillInput & { id: string }) => {
    const supabase = await createClient();
    const { data, error } = await supabase.from('skills').update(skill).eq('id', skill.id).select('*');
    if (error) {    
        console.error(error);
        return null;
    }
    return data;
}

export const deleteSkill = async (id: string) => {
    const supabase = await createClient();
    const { data, error } = await supabase.from('skills').delete().eq('id', id).select('*');
    if (error) {
        console.error(error);
        return null;
    }
    return data;
}