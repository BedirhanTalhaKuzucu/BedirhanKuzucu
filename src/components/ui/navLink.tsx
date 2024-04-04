"use client";
import Link from "next/link";
import React, { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const NavLink = ({
  icon,
  path,
  label,
}: {
  icon: any;
  path: string;
  label: string;
}) => {
  const pathName = usePathname();

  const isActiveNav = useMemo(() => {
    if (path === pathName) {
      return true;
    } else return false;
  }, [path, pathName]);

  return (
    <li>
      <Link
        href={path}
        className={clsx(
          "flex  items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group",
          {
            "bg-gray-300": isActiveNav,
          }
        )}
      >
        {icon}
        <span className="ms-3 whitespace-nowrap"> {label}</span>
      </Link>
    </li>
  );
};
