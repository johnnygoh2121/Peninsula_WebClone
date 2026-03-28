"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteAsset } from "@/lib/siteAssets";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Machines & Department", href: "/machines-and-department" },
  { label: "Products", href: "/products" },
  { label: "Facilities", href: "/facilities" },
  { label: "About", href: "/about" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#f8f8f8] border-b border-[#eee] text-sm hidden md:block">
        <div className="container flex items-center h-[36px]">
          <div className="flex items-center gap-4 text-[#666]">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +6012-3942033 (Ext. 118)
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              shaha@my-peninsula.com
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="container flex items-center justify-between h-[60px]">
        <Link href="/">
          <Image src={siteAsset("/images/logo.jpg")} alt="Peninsula Precision Stamping" width={116} height={57} priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-5 text-[13px] uppercase tracking-wide font-oswald transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary" : "text-[#333]"
              } ${i < navItems.length - 1 ? "border-r border-[#eee]" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden flex flex-col gap-1 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-[#333] transition-transform ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`w-6 h-0.5 bg-[#333] transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-[#333] transition-transform ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-[#eee] shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-[13px] uppercase tracking-wide font-oswald border-b border-[#eee] hover:text-primary hover:bg-[#fafafa] ${
                pathname === item.href ? "text-primary" : "text-[#333]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="px-6 py-3 text-[12px] text-[#666] border-b border-[#eee]">
            <div>+6012-3942033 (Ext. 118)</div>
            <div>shaha@my-peninsula.com</div>
          </div>
        </nav>
      )}
    </header>
  );
}
