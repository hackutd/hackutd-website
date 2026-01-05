"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { Menu, Instagram, Linkedin, type LucideIcon } from "lucide-react";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { useState } from "react";

function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline";
  size?: "default" | "icon";
  children: React.ReactNode;
}

function Button({
  asChild,
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    icon: "h-10 w-10",
  };

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: classes,
      ...(children.props as any),
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export interface NavLink {
  href: string;
  label: string;
  icon?: LucideIcon;
}

export interface NavbarProps {
  /** Brand logo source */
  logoSrc?: string;
  /** Brand name */
  brandName: string;
  /** Navigation links */
  links: NavLink[];
  /** CTA button text */
  ctaText?: string;
  /** CTA button href */
  ctaHref?: string;
  /** Custom logo width (default: 20) */
  logoWidth?: number;
  /** Custom logo height (default: 20) */
  logoHeight?: number;
  /** Custom container max width (default: max-w-4xl) */
  containerMaxWidth?: string;
}

export function Navbar({
  logoSrc,
  brandName,
  links,
  ctaText = "Get Started",
  ctaHref = "#contact",
  logoWidth = 20,
  logoHeight = 20,
  containerMaxWidth = "max-w-4xl",
}: NavbarProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 p-4 font-['CeraPro']">
      <div className={`container mx-auto ${containerMaxWidth}`}>
        <div className="hidden md:flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            {logoSrc && (
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt={`${brandName} logo`}
                width={logoWidth}
                height={logoHeight}
                className={`h-${Math.ceil(logoHeight / 4)} w-${Math.ceil(
                  logoWidth / 4
                )}`}
              />
            )}
            <span className="font-semibold tracking-wide text-white">
              {brandName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300 absolute left-1/2 transform -translate-x-1/2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  if (target) {
                    const yOffset = -80; // adjust for fixed navbar height
                    const y =
                      target.getBoundingClientRect().top +
                      window.scrollY +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className="hover:text-purple-300 transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Media Icons */}
            <div className="hidden md:flex items-center gap-4 text-gray-300">
              <Link href="https://twitter.com/hackutd" target="_blank" className="hover:text-purple-300" aria-label="Twitter (X)">
                 <FaXTwitter className="h-5 w-5" />
              </Link>
                <Link href="https://linkedin.com/company/hackutd" target="_blank" className="hover:text-purple-300">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com/hackutd" target="_blank" className="hover:text-purple-300">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
        </div>
        
        {/* Mobile Navbar */}
        <div className="md:hidden flex h-14 items-center justify-between px-6 liquid-glass-header rounded-full">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-1.5">
            {logoSrc && (
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt={`${brandName} logo`}
                width={logoWidth}
                height={logoHeight}
                className={`h-${Math.ceil(logoHeight / 4)} w-${Math.ceil(
                  logoWidth / 4
                )}`}
              />
            )}
            <span className="font-semibold tracking-wide text-white">
              {brandName}
            </span>
          </Link>
          <div className="md:hidden">
            <Button
              variant="outline"
              size="icon"
              className="border-gray-200/30 bg-gray-900/20 text-gray-200 hover:bg-gray-800"
              onClick={() => setIsMobileNavOpen(true)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Sheet */}
        {isMobileNavOpen && (
          <>
            {/* Backdrop to catch clicks*/}
            <div
              className="fixed inset-0 z-50 bg-black/0"
              onClick={() => setIsMobileNavOpen(false)}
            />
            {/* Sheet */}
            <div className="mt-20 fixed right-2 top-0 z-50 h-fit w-40 liquid-glass-header !bg-black/30 border-l border-gray-800 rounded-3xl shadow-lg flex flex-col">
              {/* Nav Links */}
              <nav className="flex flex-col gap-1 mt-2 text-gray-200 items-end">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 hover:text-purple-300 transition-colors"
                  >
                    {link.icon && (
                      <span className="inline-flex items-center justify-center w-5 h-5 text-gray-400">
                        <link.icon className="h-4 w-4" />
                      </span>
                    )}
                    <span className="text-sm">{link.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Navbar;
