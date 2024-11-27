import { H1Props } from "../../../library/types";

function P({ className, children }: H1Props) {
  return (
    <p className={`font-body text-base text-black ${className}`}>{children}</p>
  );
}
export default P;
