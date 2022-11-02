import React from "react";

type Props = {};

export const IconWebsite = (props: Props) => {
  return (
    <svg
      className="h-5 w-5 text-black"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {" "}
      <circle cx="12" cy="12" r="10" /> <line x1="2" y1="12" x2="22" y2="12" />{" "}
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
};
