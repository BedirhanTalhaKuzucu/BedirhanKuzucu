"use client";
import React from "react";
import Image from "next/image";
import InfoCard from "@/components/ui/infoCard";

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
            icon="screen"
          />
          <InfoCard
            description="Custom mobile applications tailored to your needs. Development services for both iOS and Android platforms."
            titel="Mobile App Development"
            icon="mobile"
          />
          <InfoCard
            description="Boost your online sales! Attract customers with secure and scalable e-commerce platforms."
            titel="E-commerce Solutions"
            icon="world"
          />
          <InfoCard
            description="Be on top in search engines. Effective SEO strategies to increase the visibility of your website."
            titel="SEO Consulting"
            icon="grafic"
          />
        </div>
      </div>
      <div className="h-full grid place-items-center">
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
