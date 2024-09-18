import { FloatingDock } from "../ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconMail,
  IconBrandLinkedin,
  IconPhone,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/shafiq-m-b0580320b",
    },

    {
      title: "Phone",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Mail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.gmail.com",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/shafiq__m",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/shafeek26",
    },
  ];
  return (
    (<div className="flex relative z-50">
      <FloatingDock
        mobileClassName="lg:translate-y-20 translate-y-20"
        items={links} />
    </div>)
  );
}
