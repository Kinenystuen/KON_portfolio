import React from "react";
import H1 from "../shared/Typography/H1";
import { getBaseUrl } from "./BaseNameUtils";

interface ErrorMessageProps {
  message: string;
  children?: React.ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, children }) => {
  return (
    <section className="container w-full mb-10 flex justify-center items-center flex-col min-h-[60vh]">
      <div className="my-10 text-center">
        <img
          className="my-5"
          src={getBaseUrl("/assets/Error_robot.svg")}
          alt="Page not found"
        />
        <H1 className="uppercase font-bold">{message}</H1>
      </div>
      {children}
    </section>
  );
};

export default ErrorMessage;
