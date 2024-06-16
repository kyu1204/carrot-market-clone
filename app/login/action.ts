"use server";

export default async function handleForm(prevState: any, formData: FormData) {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  console.log("logged in!");
  return {
    errors: ["wrong password", "password too short"],
  };
}
