interface PathProps {
  name1?: string;
  name2?: string;
  name3?: string;
}

export const PathComponent = (props: PathProps) => {
  const { name1, name2, name3 } = props;
  const icon = () => (
    <svg
      className="h-5 w-5 text-black"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {" "}
      <path stroke="none" d="M0 0h24v24H0z" />{" "}
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );

  const renderName3 = () => {
    if (name3) {
      return (
        <>
          <svg
            className="h-5 w-5 text-black"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <polyline points="9 6 15 12 9 18" />
          </svg>
          {name3}
        </>
      );
    }
  };
  return (
    <>
      <div className="name1">{name1}</div>
      <div className="icon">{icon()}</div>
      <div className="name1">{name2}</div>
      {renderName3()}
    </>
  );
};
