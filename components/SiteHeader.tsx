"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [["Listings", "#listings"], ["Services", "#services"], ["About", "#about"], ["Contact", "#contact"]];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="site-header absolute inset-x-0 top-0 z-50 text-white">
      <div className="header-inner">
        <a href="#top" className="site-logo" aria-label="The Ridge Realty Group home">
          <Image
            src="/ridge-realty-logo.png"
            alt="The Ridge Realty Group"
            width={1071}
            height={334}
            priority
          />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}
        </nav>
        <a href="tel:+12069196886" className="header-call">Call Marci</a>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
          <span aria-hidden="true">{open ? "Close" : "Menu"}</span>
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a href="tel:+12069196886" className="mobile-call">Call (206) 919-6886</a>
        </nav>
      )}
    </header>
  );
}
