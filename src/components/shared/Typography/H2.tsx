import { H1Props } from "../../../library/types";

function H2({ className, children }: H1Props) {
  return (
    <h2
      className={`font-header text-2xl px-4 font-semibold text-black dark:text-whiteFont ${className}`}
    >
      {children}
    </h2>
  );
}
export default H2;
