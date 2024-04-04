"use client";
import clsx from "clsx";
import React, { ReactNode } from "react";

function VerticalStepperContainer({ children }: { children: ReactNode }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {children}
      </div>
    </section>
  );
}

function VerticalStepperItem({
  step,
  link,
  header,
  subHeader,
  description,
  children,
  backgroundImage,
  dateRange,
}: {
  step: number;
  link: string;
  header: string;
  subHeader: string;
  description?: string;
  children?: ReactNode;
  backgroundImage?: string;
  dateRange?: string;
}) {
  return (
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-white pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#754671] text-white relative z-10 title-font font-medium text-sm">
        {step}
      </div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <a
          href={link}
          target="_blank"
          className={`flex-shrink-0 w-24 h-24 bg-[#754671] text-white rounded-full inline-flex items-center justify-center bg-center bg-cover bg-no-repeat ${
            backgroundImage ? backgroundImage : ""
          }`}
        ></a>

        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
            {header}
          </h2>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold dark:text-white">{subHeader}</p>
            {dateRange && (
              <p className="text-lg font-bold dark:text-white italic">
                {dateRange}
              </p>
            )}
          </div>
          {description && (
            <p className="leading-relaxed font-bold">{description}</p>
          )}

          {children ? children : null}
        </div>
      </div>
    </div>
  );
}

export { VerticalStepperItem, VerticalStepperContainer };
