import { createClient } from "@/lib/supabase/server";

import type { SessionInput } from "@/types/session";

export const getSessions = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.from('sessions').select('*');
  if (error) {
    console.error(error);
    return [];
  }
  return data;
}

export const getSessionById = async (id: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase.from('sessions').select('*').eq('id', id);
  if (error) {
    console.error(error);
    return null;
  }
  return data;
}

export const createSession = async (session: SessionInput) => {
  const supabase = await createClient();
  const { data, error } = await supabase.from('sessions').insert(session).select('*');
  if (error) {
    console.error(error);
    return null;
  }
  return data;
}


export const updateSession = async (session: SessionInput & { id: string }) => {
  const supabase = await createClient();
  const { title, date, description, id } = session;
  const { data, error } = await supabase
    .from('sessions')
    .update({ title, date, description })
    .eq('id', id)
    .select('*');
  if (error) {
    console.error(error);
    return null;
  }
  return data;
}


export const deleteSession = async (id: string) => {
  const supabase = await createClient();
  const { data, error } = await supabase.from('sessions').delete().eq('id', id).select('*');
  if (error) {
    console.error(error);
    return null;
  }
  return data;
}