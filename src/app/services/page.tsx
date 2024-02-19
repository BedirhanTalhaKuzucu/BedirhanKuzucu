import React from "react";
import Image from "next/image";
import InfoCard from "@/components/infoCard";

function ServicesPage() {
  return (
    <div className="grid grid-cols-2 gap-x-1 h-full w-full items-start justify-between sm:flex-row mt-[4rem]">
      <div>
        <h1 className="text-[2rem] text-[#754671] mb-[3rem] font-bold subpixel-antialiased">
          WHAT I DO?
        </h1>
        <div className="grid grid-cols-1  gap-y-[3.5rem]">
          <InfoCard
            description="Empower your brand in the online world with professional web
              solutions. We design customizable and user-friendly websites."
            titel="Web Development"
            iconPath="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.2"
          />
          <InfoCard
            description="Custom mobile applications tailored to your needs. Development services for both iOS and Android platforms."
            titel="Mobile App Development"
            iconPath="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
          <InfoCard
            description="Boost your online sales! Attract customers with secure and scalable e-commerce platforms."
            titel="E-commerce Solutions"
            iconPath="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z"
          />
          <InfoCard
            description="Be on top in search engines. Effective SEO strategies to increase the visibility of your website."
            titel="SEO Consulting"
            iconPath="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
          />
        </div>
      </div>
      <div className="h-full grid place-items-center">
        try
        <Image
          src="/assets/olacak.png"
          alt="talha"
          width={580}
          height={580}
          loading="lazy"
          className="rounded-lg  h-auto w-3/4"
        />
      </div>
    </div>
  );
}

export default ServicesPage;

<div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
  <div className="grid grid-cols-3 gap-4 mb-4">
    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
      <p className="text-2xl text-gray-400 dark:text-gray-500">
        <svg
          className="w-3.5 h-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </p>
    </div>
    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
      <p className="text-2xl text-gray-400 dark:text-gray-500">
        <svg
          className="w-3.5 h-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </p>
    </div>
    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
      <p className="text-2xl text-gray-400 dark:text-gray-500">
        <svg
          className="w-3.5 h-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </p>
    </div>
  </div>
  <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
    <p className="text-2xl text-gray-400 dark:text-gray-500">
      <svg
        className="w-3.5 h-3.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 1v16M1 9h16"
        />
      </svg>
    </p>
  </div>
  <div className="grid grid-cols-2 gap-4 mb-4">
    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
      <p className="text-2xl text-gray-400 dark:text-gray-500">
        <svg
          className="w-3.5 h-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </p>
    </div>
    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
      <p className="text-2xl text-gray-400 dark:text-gray-500">
        <svg
          className="w-3.5 h-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </p>
    </div>
    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
      <p className="text-2xl text-gray-400 dark:text-gray-500">
        <svg
          className="w-3.5 h-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </p>
    </div>
    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
      <p className="text-2xl text-gray-400 dark:text-gray-500">
        <svg
          className="w-3.5 h-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </p>
    </div>
  </div>
  <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
    <p className="text-2xl text-gray-400 dark:text-gray-500">
      <svg
        className="w-3.5 h-3.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 18"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 1v16M1 9h16"
        />
      </svg>
    </p>
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
      <p className="text-2xl text-gray-400 dark:text-gray-500">
        <svg
          className="w-3.5 h-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </p>
    </div>
    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
      <p className="text-2xl text-gray-400 dark:text-gray-500">
        <svg
          className="w-3.5 h-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </p>
    </div>
    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
      <p className="text-2xl text-gray-400 dark:text-gray-500">
        <svg
          className="w-3.5 h-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </p>
    </div>
    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
      <p className="text-2xl text-gray-400 dark:text-gray-500">
        <svg
          className="w-3.5 h-3.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
      </p>
    </div>
  </div>
</div>;
