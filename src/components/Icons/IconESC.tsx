import clsx from "clsx";

interface ButtonProps {
  customStyle?: string;
}

export const IconESC = (props: ButtonProps) => {
  const { customStyle } = props;
  return (
    <svg
      className={clsx(["h-6 w-6 text-black", customStyle])}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {" "}
      <circle cx="12" cy="12" r="10" /> <line x1="15" y1="9" x2="9" y2="15" />{" "}
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
};
