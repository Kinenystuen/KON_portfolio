import { H1Props } from "../../../library/types";

function H1({ className, children }: H1Props) {
  return (
    <h1 className={`font-header text-3xl font-bold text-black ${className}`}>
      {children}
    </h1>
  );
}
export default H1;
