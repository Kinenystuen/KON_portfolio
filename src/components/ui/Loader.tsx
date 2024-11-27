import React from "react";
import { LoaderProps } from "../../library/types";

const Loader: React.FC<LoaderProps> = ({ theme = "light" }) => {
  const themeClass =
    theme === "dark" ? "border-color-dark" : "border-color-light";

  return (
    <div className="loaderArea">
      <div className={`loader ${themeClass}`} />
    </div>
  );
};

export default Loader;
