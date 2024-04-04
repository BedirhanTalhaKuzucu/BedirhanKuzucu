"use client";
import React, { useMemo } from "react";
import HeaderInfo from "./headerInfo";

function InteractiveCard({ type }: { type?: string }) {
  const frontendContens = [
    {
      title: "React",
      content: " Pellentesque mollis, metus nec fringilla aliquam",
    },
    {
      title: "Next.js",
      content: " Pellentesque mollis, metus nec fringilla aliquam",
    },
    {
      title: "Angular",
      content: " Pellentesque mollis, metus nec fringilla aliquam",
    },
    {
      title: "TypeScript",
      content: " Pellentesque mollis, metus nec fringilla aliquam",
    },
    {
      title: "Tailwind CSS",
      content: " Pellentesque mollis, metus nec fringilla aliquam",
    },
    {
      title: "Bootstrap",
      content: " Pellentesque mollis, metus nec fringilla aliquam",
    },
    {
      title: "SASS",
      content: " Pellentesque mollis, metus nec fringilla aliquam",
    },
  ];

  const backendContents = [
    {
      title: "Expres.Js",
      content: " Pellentesque mollis, metus nec fringilla aliquam",
    },
    {
      title: "Django",
      content: " Pellentesque mollis, metus nec fringilla aliquam",
    },
    {
      title: "Node.js",
      content: " Pellentesque mollis, metus nec fringilla aliquam",
    },
    {
      title: "Python",
      content: " Pellentesque mollis, metus nec fringilla aliquam",
    },
    {
      title: "Swagger",
      content: "",
    },
    {
      title: "Postman",
      content: " Pellentesque mollis, metus nec fringilla aliquam",
    },
  ];

  const selectedContent = useMemo(() => {
    if (type === "frontend") {
      return frontendContens;
    } else return backendContents;
  }, [type]);

  return (
    <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      {type && <HeaderInfo type={type} />}
      <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
        {selectedContent.map((item, index) => {
          return (
            <div className="mb-12" key={index}>
              <div className="flex">
                <div className="shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="mr-3 h-5 w-5 text-success"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-2 grow">
                  <p className="mb-1 font-bold">{item.title} </p>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InteractiveCard;
