"use server";

export async function handleForm(prevState: any, formData: FormData) {
  const password = formData.get("password");
  const result = password === "12345";
  return {
    result,
  };
}
