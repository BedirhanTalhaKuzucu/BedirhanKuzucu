import React from "react";
import Icon from "../icon";

function InfoCard({
  icon,
  titel,
  description,
  onEnter,
  onMouseLeave,
}: {
  icon: string;
  titel: string;
  description: string;
  onEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      className="group flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#754671] hover:text-[#F5F5F5]  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      onMouseEnter={() => (onEnter ? onEnter() : null)}
      onMouseLeave={() => (onMouseLeave ? onMouseLeave() : null)}
    >
      <Icon
        classString="object-cover p-4 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        iconName={icon}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      />

      <div className="flex flex-col justify-between p-4 leading-normal ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-[#F5F5F5] dark:text-white">
          {titel}
        </h5>
        <p className="mb-3 font-normal text-gray-700  group-hover:text-[#F5F5F5]  dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
