"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import logo from "@/components/ui/logo.jpg";
import Image from "next/image";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact Us" },
  { href: "/faqs", label: "FAQs" },
  { href: "/industries-we-cover", label: "Industries" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[1000] w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Image src={logo} alt="Logo" className="h-8 w-8" />
            <Logo />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-foreground/60"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:flex">
            <Link href="/contact">Book a Call</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block rounded-md p-2 text-base font-medium transition-colors hover:bg-secondary hover:text-primary",
                  pathname === link.href
                    ? "bg-secondary text-primary"
                    : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild>
              <Link
                href="https://calendly.com/misandigital/30min"
                onClick={() => setIsOpen(false)}
              >
                Book a Call
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
