import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconMail,
  IconBrandLinkedin,
  IconMan,
  IconTool,
  IconPhone,
  IconLabel,
  IconPackage,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-white/90 group-hover:text-white transition-colors" />
      ),
      href: "#background-beams",
    },
    {
      title: "About Me",
      icon: (
        <IconMan className="h-full w-full text-white/90 group-hover:text-white transition-colors" />
      ),
      href: "#about",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-white/90 group-hover:text-white transition-colors" />
      ),
      href: "#projects",
    },
    {
      title: "Skills",
      icon: (
        <IconTool className="h-full w-full text-white/90 group-hover:text-white transition-colors" />
      ),
      href: "#icon-cloud",
    },
    {
      title: "Contact Me",
      icon: (
        <IconPhone className="h-full w-full text-white/90 group-hover:text-white transition-colors" />
      ),
      href: "#background-lines",
    },
    {
      title: "Resume",
      icon: (
        <IconPackage className="h-full w-full text-white/90 group-hover:text-white transition-colors" />
      ),
      href: "#about",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-white/90 group-hover:text-white transition-colors" />
      ),
      href: "https://www.linkedin.com/in/manas-kumar-b23388300/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-white/90 group-hover:text-white transition-colors" />
      ),
      href: "#",
    },
    {
      title: "E-mail",
      icon: (
        <IconMail className="h-full w-full text-white/90 group-hover:text-white transition-colors" />
      ),
      href: "#background-lines",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full z-50 fixed bottom-5 left-0 right-0">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
