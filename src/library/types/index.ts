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
export type ButtonProps = {
  ButtonType?: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  title?: string;
  ariaLabel?: string;
};

/* Loader Props */
export interface LoaderProps {
  theme?: "light" | "dark";
}

export interface Gallery {
  id: number;
  image: {
    url: string;
    alt: string;
  };
}
