"use client";
import React, { useEffect, useMemo, useRef } from "react";
import HeaderInfo from "./headerInfo";
import { backendContents, frontendContens } from "@/lib/constant";

function InteractiveCard({ type }: { type?: string }) {
  const divRef = useRef<HTMLDivElement>(null);

  const scrollToTop = (elementRef: React.RefObject<HTMLDivElement>) => {
    if (elementRef.current) {
      elementRef.current.scrollTop = 0;
    }
  };

  const selectedContent = useMemo(() => {
    if (type === "frontend") {
      return frontendContens;
    }
    if (type === "backend") {
      return backendContents;
    }
    return null;
  }, [type]);

  useEffect(() => {
    scrollToTop(divRef);
  }, [type]);

  return (
    <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      {type && <HeaderInfo type={type} />}

      {selectedContent && (
        <div
          ref={divRef}
          className="grid gap-x-6 h-96 md:grid-cols-2 lg:grid-cols-2 xl:gap-x-12 overflow-auto"
        >
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
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
      )}
    </div>
  );
}

export default InteractiveCard;
