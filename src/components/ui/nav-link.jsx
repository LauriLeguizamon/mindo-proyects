"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function NavLink({ href, children, className, onClick }) {
  const isAnchor = href.startsWith("#");

  const handleClick = (e) => {
    if (isAnchor) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    onClick?.();
  };

  const LinkComponent = isAnchor ? "a" : Link;

  return (
    <LinkComponent
      href={href}
      onClick={handleClick}
      className={cn("relative group py-2 inline-block", className)}
    >
      <span className="relative z-10 text-sm font-medium text-neutral-700 group-hover:text-neutral-900 transition-colors duration-200">
        {children}
      </span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
    </LinkComponent>
  );
}
