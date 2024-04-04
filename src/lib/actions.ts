"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface formData {
  email: string;
  resetFlag?: boolean;
}

export async function addEmail(prevState: any, formData: formData) {
  const email: string = formData.email;

  if (formData.resetFlag) {
    return {
      type: "",
      message: "",
    };
  }

  if (!email) {
    return {
      type: "error",
      message: "You should write firstly your email adress!!!",
    };
  }
  let response;
  try {
    response = await sql`
      INSERT INTO emails (email)
      VALUES (${email})
      ON CONFLICT (email) DO NOTHING RETURNING '*'
    `;
  } catch (error) {
    console.log(error);
    return {
      type: "error",
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  if (response.rowCount === 0) {
    revalidatePath("");

    return {
      type: "notUniqValue",
      message: "This Email is already added.",
    };
  }
  return {
    type: "success",
    message:
      "Your e-mail has reached me. Thank you very much. I will contact you as soon as possible",
  };
}
