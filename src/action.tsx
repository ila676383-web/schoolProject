"use server";

export async function checkPassword(FormData: FormData): Promise<boolean> {
  const token = process.env.PASSWORD_LOGIN;
  if (!token) {
    throw new Error("Server misconfiguration");
  }

  const password = FormData.get("password");
  
  if (typeof password !== "string") {
    throw new Error("Invalid password");
  }

  if (password !== token) {
    throw new Error("Wrong password");
  }
  return true;
}
