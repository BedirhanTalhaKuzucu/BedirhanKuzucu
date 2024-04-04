import React, { FormEvent, FunctionComponent, useState } from "react";
import { addEmail } from "@/app/lib/actions";
import clsx from "clsx";
import { useFormState } from "react-dom";

const SaveEmail: FunctionComponent = () => {
  const initialState = { message: "", type: "" };

  const [state, dispatch] = useFormState(addEmail, initialState);
  const [email, setemail] = useState("");

  const onClick = async (event: FormEvent) => {
    event.preventDefault();
    const response = await dispatch({ email: email });
    setemail("");
  };
  return (
    <div className="m-auto w-3/4 mt-[3rem]">
      <div className="relative mb-6">
        <form
          onSubmit={(e: FormEvent) => onClick(e)}
          className="max-w-md mx-auto"
        >
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Send Your Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              onBlur={() => dispatch({ email: "", resetFlag: true })}
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              name="email"
              id="email"
              className={clsx(
                "block w-full p-4 ps-10 text-sm text-gray-900 border  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                {
                  "border-red-400": state?.type && state?.type !== "success",
                  "border-gray-300": !state?.type,
                }
              )}
              placeholder="email@address.com"
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send Your Email
            </button>
          </div>
          {state?.type && (
            <p
              className={clsx("mt-5 text-xs italic", {
                "text-red-600": state?.type && state?.type !== "success",
                "text-green-600": state?.type === "success",
              })}
            >
              {state?.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SaveEmail;
