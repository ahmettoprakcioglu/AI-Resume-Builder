import supabase from "./supabase";

export async function createNewResume(payload) {
  const { data, error } = await supabase
    .from('user-resumes')
    .insert([
      payload,
    ])
    .select();
  if (error) {
    console.error(error);
    throw new Error('Translation Notes could not be loaded');
  }

  return data[0];
}

export async function getUserResumes(user_id) {
  const { data: userResumes, error } = await supabase
    .from('user-resumes')
    .select("*")
    .eq('user_id', user_id);

  if (error) {
    console.error(error);
    throw new Error('Translation Notes could not be loaded');
  }
  return userResumes;
}

export async function updateUserResume(payload, resume_id) {
  const { data, error } = await supabase
    .from('user-resumes')
    .update(payload)
    .eq('resume_id', resume_id)
    .select();

  if (error) {
    console.error(error);
    throw new Error('Translation Notes could not be loaded');
  }
  return data;

}