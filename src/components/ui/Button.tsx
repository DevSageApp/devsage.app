import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, className = "", ...props }: Props) {
  return (
    <button
      {...props}
      className={
        "inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-white font-semibold " +
        "hover:bg-indigo-500 active:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed " +
        className
      }
    >
      {children}
    </button>
  );
}
