import Image from "next/image";
import Link from "next/link";
import FlagLine from "./FlagLine";

import logo from '@/public/logo.png';

const navItems = [
  { href: "#alfajores", label: "אלפג'ורס" },
  { href: "#packs", label: "חבילות" },
  { href: "#nosotros", label: "אודות" },
];

export default function Navbar() {
  return (
    <header
      dir="ltr"
    className="border-b border-[#eadbc5]"
    >
  
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo and brand */}
        <Link
          href="/"
          aria-label="Patria Alfajores home"
          className="flex items-center gap-3"
        >
          <Image
            src={logo}
            alt="Patria Alfajores"
            width={44}
            height={44}
            priority
            className="h-11 w-11 object-contain"
          />

          <div
            dir="ltr"
            className="flex flex-col items-start text-left"
          >
            <span className="block font-serif text-xl font-bold uppercase tracking-[0.3em] text-[#3d1f08]">
              Patria
            </span>

            <p className="whitespace-nowrap text-[9px] uppercase tracking-[0.25em] text-[#8b7355]">
              Artisanal Alfajor · Orgullo Argentino
            </p>
          </div>
        </Link>

        {/* Hebrew navigation */}
        <nav
          dir="rtl"
          aria-label="Primary navigation"
          className="hidden items-center gap-8 text-sm font-bold uppercase tracking-[0.2em] text-[#6b3a1f] md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Flag line */}
      </div>
        <FlagLine />
    </header>
  );
}