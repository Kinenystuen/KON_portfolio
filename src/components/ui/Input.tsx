import React from "react";
import { ErrorMessage } from "@hookform/error-message";

interface InputProps {
  errors: any;
  register: any;
  InputId: string; // Unique ID for the input
  InputLabel: string; // Label for the input
  minLength?: number; // Optional: Minimum length validation
  maxLength?: number; // Optional: Maximum length validation
  required?: boolean; // Optional: Required field validation
}

const Input: React.FC<InputProps> = ({
  register,
  errors,
  InputId,
  InputLabel,
  minLength,
  maxLength,
  required
}) => {
  return (
    <div className="relative w-full">
      {/* Input field */}
      <input
        id={InputId}
        {...register(InputId, {
          required: required ? `${InputLabel} is required.` : undefined,
          minLength: minLength
            ? {
                value: minLength,
                message: `Minimum length is ${minLength} characters.`
              }
            : undefined,
          maxLength: maxLength
            ? {
                value: maxLength,
                message: `Maximum length is ${maxLength} characters.`
              }
            : undefined
        })}
        placeholder=" "
        className="peer cursor-pointer w-full p-2 pt-5 pb-2 border border-gray-300 dark:border-customBgDark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-color4-700 focus:border-color4-600"
      />

      {/* Label */}
      <label
        htmlFor={InputId}
        className="absolute rounded-md left-3 top-[-8px] text-gray-500 dark:text-whiteFont-700 bg-customBg text-sm dark:bg-customBgDark-500 px-1 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-[-8px] peer-focus:text-sm peer-focus:text-color4-800 dark:peer-focus:text-whiteFont-600"
      >
        {InputLabel}
      </label>

      {/* Error message */}
      <ErrorMessage
        errors={errors}
        name={InputId}
        render={({ message }) => (
          <p className="text-red-500 text-sm mt-1">{message}</p>
        )}
      />
    </div>
  );
};

export default Input;
