import { useState } from "react";
import { Menu, X } from "lucide-react";

import profileImg from "@/assets/Mohamed_Galhoum_Image.jpg";
import { Button } from "@/components/Button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-4 sm:pt-5">
      <nav
        className="
          glass mx-auto flex max-w-7xl items-center justify-between
          rounded-2xl lg:rounded-full
          px-3 sm:px-4 lg:px-6
          py-3
          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
        "
      >
        {/* Logo */}
        <a
          href="#"
          className="
            group flex items-center gap-2 sm:gap-3
            transition-all duration-300
          "
        >
          {/* Avatar */}
          <div
            className="
              relative h-10 w-10 sm:h-11 sm:w-11
              overflow-hidden rounded-full
              border border-primary/30
              shadow-[0_0_20px_rgba(32,178,166,0.25)]
              flex-shrink-0
            "
          >
            <img
              src={profileImg}
              alt="Mohamed Galhoum"
              className="
                h-full w-full object-contain
                transition-transform duration-500
                group-hover:scale-110
              "
            />

            {/* Glow Ring */}
            <span
              className="
                absolute inset-0 rounded-full
                ring-2 ring-primary/20
                group-hover:ring-primary/50
                transition-all duration-300
              "
            />
          </div>

          {/* Brand */}
          <div className="flex flex-col leading-none">
            <span
              className="
                text-base sm:text-lg font-bold tracking-tight text-foreground
                transition-colors duration-300
                group-hover:text-primary
              "
            >
              MuohlaG
              <span className="text-primary">.</span>
            </span>

            {/* Animated Roles */}
            <div className="relative mt-1 h-4 overflow-hidden hidden sm:block">
              <div
                className="
                  flex flex-col animate-role-cycle
                  text-[10px] sm:text-[11px] md:text-xs
                  font-medium tracking-wide
                  text-primary
                "
              >
                <span>Software Engineer 🚀</span>
                <span>Full-stack Engineer 🌟</span>
                <span>Competitive Programmer 💥</span>
                <span>Expert @ Codeforces ❤️</span>
              </div>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div
          className="
            hidden md:flex items-center gap-1
            rounded-full border border-border/50
            bg-surface/50 px-2 py-1
          "
        >
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="
                group relative overflow-hidden
                rounded-full px-3 lg:px-4 py-2
                text-sm font-medium text-muted-foreground
                transition-all duration-300
                hover:text-foreground
              "
            >
              {/* Hover Background */}
              <span
                className="
                  absolute inset-0 scale-0 rounded-full
                  bg-primary/10
                  transition-all duration-300
                  group-hover:scale-100
                "
              />

              {/* Text */}
              <span className="relative z-10">{link.label}</span>

              {/* Tiny Dot */}
              <span
                className="
                  absolute bottom-1 left-1/2 h-1 w-1
                  -translate-x-1/2 rounded-full
                  bg-primary opacity-0
                  transition-all duration-300
                  group-hover:opacity-100
                "
              />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Status */}
          <div
            className="
              hidden lg:flex items-center gap-2
              rounded-full border border-border/50
              bg-surface/40 px-3 py-2
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute inline-flex h-full w-full
                  animate-ping rounded-full bg-primary opacity-75
                "
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>

            <span className="text-xs text-muted-foreground">
              Available for work
            </span>
          </div>

          <Button className="text-sm lg:text-base">
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex md:hidden items-center justify-center
            h-10 w-10 rounded-full
            border border-border/50
            bg-surface/50
            text-foreground
            transition-all duration-300
            hover:bg-primary/10
          "
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"}
        `}
      >
        <div
          className="
            glass mx-auto max-w-7xl
            rounded-2xl
            border border-border/30
            p-4
            shadow-[0_8px_30px_rgba(0,0,0,0.25)]
          "
        >
          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  rounded-xl px-4 py-3
                  text-md font-medium
                  text-muted-foreground
                  transition-all duration-300
                  hover:bg-primary/10
                  hover:text-foreground
                  animate-fade-in
                "
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-4 flex flex-col gap-3">
            <div
              className="
                flex items-center gap-2
                rounded-xl border border-border/50
                bg-surface/40 px-3 py-3
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute inline-flex h-full w-full
                    animate-ping rounded-full bg-primary opacity-75
                  "
                />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>

              <span className="text-xs text-muted-foreground">
                Available for work
              </span>
            </div>

            <Button className="w-full">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};