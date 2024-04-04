import React from "react";
import Icon from "../icon";

function InfoButton({
  title,
  text,
  icon,
  onClick,
}: {
  title: string;
  text: string;
  icon: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={() => (onClick ? onClick() : null)}
      type="button"
      className="flex flex-1 items-center gap-4 rounded-2xl border-2 bg-white px-4 py-4 text-left dark:bg-slate-900 border-accent-400 dark:border-accent-400"
    >
      <span className="hidden w-24 shrink-0 justify-center text-center text-6xl font-black xl:flex text-accent-600 dark:text-accent-400">
        <Icon classString="w-6 h-6" iconName={icon} />
      </span>
      <span className="flex-1">
        <span className="block font-bold text-accent-600 dark:text-accent-400">
          {title}
        </span>
        <span className="mt-1 block text-sm text-slate-600 dark:text-slate-400">
          {text}
        </span>
      </span>
    </button>
  );
}

export default InfoButton;
