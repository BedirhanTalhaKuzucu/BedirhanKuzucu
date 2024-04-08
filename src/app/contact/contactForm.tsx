"use client";
import { sendEmail } from "@/lib/actions";
import { ContactFormSchema } from "@/lib/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Inputs = z.infer<typeof ContactFormSchema>;

function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = async (e: any) => {
    const response = await sendEmail(e);
    console.log(response);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap -m-2">
      <div className="p-2 w-1/2">
        <div className="relative">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          {errors.name?.message && (
            <p className="text-sm text-red-400">{errors.name.message}</p>
          )}
        </div>
      </div>
      <div className="p-2 w-1/2">
        <div className="relative">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          {errors.email?.message && (
            <p className="text-sm text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div className="p-2 w-full">
        <div className="relative">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            {...register("message")}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
          {errors.message?.message && (
            <p className="text-sm text-red-400">{errors.message.message}</p>
          )}
        </div>
      </div>
      <div className="p-2 w-full">
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full px-5 py-2.5 text-sm font-medium text-white bg-[#754671] hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-blue-800"
        >
          <span className="inline-flex items-center">
            <svg
              className="w-4 h-4 text-white me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
            {isSubmitting ? "Sending" : "Send Mail"}
          </span>
        </button>
      </div>
      <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
        <a className="text-indigo-500">btk.kzc@gmail.com</a>
      </div>
    </form>
  );
}

export default ContactForm;
