import { ButtonProps } from "../../../library/types";

function Button({
  ButtonType,
  onClick,
  children,
  className,
  title,
  ariaLabel
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
      className={`hover:bg-gray-100 hover:border-customGreen-600 dark:hover:bg-gray-600 dark:hover:text-white ${className} ${
        ButtonType === "primary" ? "button--primary" : "button--secondary"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
