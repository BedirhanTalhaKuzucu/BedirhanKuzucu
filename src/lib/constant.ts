import { navIcons } from "@/components/navIcons";
import { ReactElement } from "react";

interface LinksItem {
  href: string;
  label: string;
  icon: ReactElement;
}

export const LINKS: LinksItem[] = [
  {
    href: "/",
    label: "Home",
    icon: navIcons.HomeIcon,
  },
  {
    href: "/about",
    label: "About",
    icon: navIcons.AboutIcon,
  },
  {
    href: "/services",
    label: "Services",
    icon: navIcons.ServiceIcon,
  },
  {
    href: "/contact",
    label: "Contact",
    icon: navIcons.ContactIcon,
  },
  {
    href: "/signup",
    label: "Sign Up",
    icon: navIcons.SignUpIcon,
  },
];
