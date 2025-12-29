"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavLink } from "@/components/ui/nav-link";
import { MobileMenu } from "@/components/MobileMenu";
import { PulsatingButton } from "@/components/ui/pulsating-button";

const navLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#casos-de-estudio", label: "Casos de Estudio" },
  { href: "/#tecnologias", label: "Tecnologías" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out",
          isScrolled
            ? "top-4 left-4 right-4 mx-auto max-w-6xl rounded-2xl bg-white/80 backdrop-blur-lg shadow-lg shadow-neutral-900/5 border border-neutral-200/50"
            : "bg-transparent"
        )}
      >
        <nav
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            isScrolled ? "px-6 py-3" : "px-6 md:px-12 py-6"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/icons/mindo-logo.png"
              alt="Mindo"
              width={140}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/+5492235351858"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex"
            >
              <PulsatingButton>Contáctanos</PulsatingButton>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-full hover:bg-neutral-100 text-neutral-700 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
