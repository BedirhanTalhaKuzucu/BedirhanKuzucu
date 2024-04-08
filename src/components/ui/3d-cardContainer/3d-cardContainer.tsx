import React from "react";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-cardContainer/3d-card";
import Image from "next/image";
import Link from "next/link";

function Card3dContainer({
  title,
  description,
  cover,
  techStack,
  liveLink,
  url,
  customButton,
}: {
  title: string;
  description: string;
  cover: string;
  techStack: string[];
  liveLink: string;
  url: string;
  customButton?: {
    label: string;
    onClick: (item: any) => void;
  };
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={cover}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover  rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <hr className="mt-6 my-6 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
        {techStack && (
          <div className="text-center">
            {techStack.map((item, idx) => (
              <CardItem
                key={idx}
                as="span"
                translateZ="60"
                className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
              >
                {item}
              </CardItem>
            ))}
          </div>
        )}

        {customButton && (
          <div className="text-center mt-8">
            <button
              onClick={() => customButton.onClick(true)}
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              {customButton.label}
            </button>
          </div>
        )}

        {!customButton && (
          <div className="flex justify-between items-center mt-8">
            <CardItem
              translateZ={20}
              as={Link}
              href={liveLink}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Live →
            </CardItem>
            <CardItem
              translateZ={20}
              as={Link}
              target="__blank"
              href={url}
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              GitHub
            </CardItem>
          </div>
        )}
      </CardBody>
    </CardContainer>
  );
}

export default Card3dContainer;
