"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ContactFormSchema } from "./validationSchema";
import { z } from "zod";
import { Resend } from "resend";
import ContactFormEmail from "@/components/ui/contactFormEmail";

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

type Inputs = z.infer<typeof ContactFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendEmail(data: Inputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.success) {
    const { name, email, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: "fromContactForm@resend.dev",
        to: ["bounced@resend.dev", "btk.kzc@gmail.com"],
        reply_to: "def30880@gmail.com",
        subject: "Contact from MyWebsite",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactFormEmail({ name, email, message }),
      });
      if (data.error) {
        return { success: false, error: data.error };
      }
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
