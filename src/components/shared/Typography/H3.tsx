import { H1Props } from "../../../library/types";

function H3({ className, children }: H1Props) {
  return (
    <h3
      className={`text-xl font-semibold text-black dark:text-white ${className}`}
    >
      {children}
    </h3>
  );
}
export default H3;
