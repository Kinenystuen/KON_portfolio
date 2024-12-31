import { faHome, faImage } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const urlContactForm = import.meta.env.VITE_URL_CONTACT_FORM;

export const headerNavLinks = [
  {
    icon: faHome,
    title: "Home",
    route: "/",
    label: "Home"
  },
  {
    icon: faImage,
    title: "Gallery",
    route: "/gallery",
    label: "Gallery"
  }
];

export const socialMedia = [
  {
    id: 1,
    platform: "LinkedIn",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/kine-odden-nystuen-208744223/"
  },
  {
    id: 2,
    platform: "Instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/kinenystuen/"
  }
];
