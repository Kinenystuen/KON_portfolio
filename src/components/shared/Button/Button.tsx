import { ButtonProps } from "../../../library/types";

function Button({
  onClick,
  children,
  className,
  title,
  ariaLabel,
  buttonType,
  disabled,
  type
}: ButtonProps) {
  let buttonClass = "";

  switch (buttonType) {
    case "blue":
      buttonClass =
        "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white";
      break;
    case "violet":
      buttonClass =
        "bg-color4-600 hover:bg-color4-700 border-none text-white border text-white hover:text-white dark:bg-violet-900 dark:hover:bg-violet-800 dark:text-gray-100 border dark:border-violet-900";
      break;
    case "gradient":
      buttonClass =
        "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-transform transform hover:-translate-y-1 active:translate-y-0.5 focus:ring-2 focus:ring-violet-500 focus:ring-offset-1  focus:ring-offset-customBg dark:focus:ring-offset-customBgDark";
      break;
    case "transparent":
      buttonClass =
        "bg-transparent text-gray-600 hover:text-black hover:bg-transparent dark:hover:bg-transparent  dark:text-whiteFont-500 dark:hover:text-white ";
      break;
    default:
      buttonClass =
        "bg-gray-500 text-black dark:bg-BtnColor dark:hover:bg-BtnColor-400";
  }

  return (
    <button
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
      className={`button rounded-xl transition duration-300 ease-in-out ${buttonClass} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
