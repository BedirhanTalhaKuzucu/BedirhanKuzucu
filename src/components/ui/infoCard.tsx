import React, { useEffect } from "react";
import Icon from "../icon";
import clsx from "clsx";

function InfoCard({
  icon,
  titel,
  description,
  onClick,
  active = false,
}: {
  icon: string;
  titel: string;
  description: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <div
      className={clsx(
        "group flex flex-col items-start  border border-gray-200  rounded-lg hover:cursor-pointer shadow md:flex-row md:max-w-xl hover:bg-[#754671] hover:text-[#F5F5F5]  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700",
        {
          "bg-white ": !active,
        },
        {
          "bg-[#754671] text-[#F5F5F5]": active,
        }
      )}
      onClick={() => (onClick ? onClick() : null)}
    >
      <Icon
        classString="object-cover p-4 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        iconName={icon}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      />

      <div className="flex flex-col justify-between p-4 leading-normal ">
        <h5
          className={clsx(
            "mb-2 text-2xl font-bold tracking-tight  group-hover:text-[#F5F5F5] dark:text-white",
            {
              "text-gray-900": !active,
            },
            {
              "text-[#F5F5F5]": active,
            }
          )}
        >
          {titel}
        </h5>
        <p
          className={clsx(
            "mb-3 font-normal text-gray-700  group-hover:text-[#F5F5F5] dark:text-gray-400",
            {
              "text-gray-700": !active,
            },
            {
              "text-[#F5F5F5]": active,
            }
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
