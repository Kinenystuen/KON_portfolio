import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type INavLink = {
  icon: IconDefinition;
  title: string;
  route: string;
  label: string;
};

/* Typographic props */
export type H1Props = {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

/* Button props */

export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  title?: string;
  ariaLabel?: string;
  buttonType?: "blue" | "violet" | "gradient" | "transparent";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: string;
}

/* Loader Props */
export interface LoaderProps {
  theme?: "light" | "dark";
  className?: string;
}

export interface Gallery {
  id: number;
  image: {
    url: string;
    alt: string;
  };
}

/* BreadCrumb props */
export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
  isDropdown?: boolean;
  dropdownItems?: { label: string; href?: string }[];
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  goBack?: boolean;
  className?: string;
}
