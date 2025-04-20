import { ButtonProps } from "../../../library/types";

function Button({
  onClick,
  children,
  className = "",
  title,
  ariaLabel,
  buttonType,
  disabled,
  type = "button",
  href,
  target
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
        "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:text-white shadow-lg hover:from-indigo-600 hover:to-purple-600 focus:ring-2 focus:ring-violet-500 focus:ring-offset-1 focus:ring-offset-customBg dark:focus:ring-offset-customBgDark ";
      break;
    case "transparent":
      buttonClass =
        "p-2 bg-transparent text-gray-600 hover:text-black hover:bg-transparent dark:hover:bg-transparent  dark:text-whiteFont-500 dark:hover:text-white ";
      break;
    default:
      buttonClass =
        "bg-gray-500 hover:bg-gray-600 text-white hover:text-white dark:bg-BtnColor dark:hover:bg-BtnColor-400 ";
  }

  const combinedClassName = `button p-2 px-4 hover:text-black rounded-xl transition duration-300 ease-in-out ${buttonClass} ${className}`;

  if (href) {
    // Render an anchor tag when href is provided.
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        title={title}
        aria-label={ariaLabel}
        className={combinedClassName}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}

export default Button;
