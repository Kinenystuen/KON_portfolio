import { ButtonProps } from "../../../library/types";

function Button({
  onClick,
  children,
  className,
  title,
  ariaLabel,
  buttonType,
  type
}: ButtonProps) {
  let buttonClass = "";

  switch (buttonType) {
    case "green":
      buttonClass =
        "bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white";
      break;
    case "blue":
      buttonClass =
        "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white";
      break;
    case "red":
      buttonClass =
        "bg-red-500 hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600 text-white";
      break;
    case "transparent":
      buttonClass =
        "bg-transparent text-gray-600 hover:text-black hover:bg-transparent dark:hover:bg-transparent  dark:text-whiteFont-500 dark:hover:text-white ";
      break;
    default:
      buttonClass =
        "bg-gray-500 text-white hover:bg-gray-600 dark:bg-BtnColor dark:hover:bg-BtnColor-400";
  }

  return (
    <button
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
      type={type}
      className={`button rounded transition duration-300 ease-in-out ${buttonClass} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
