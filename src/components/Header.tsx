"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/data/navigation";
export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="고려다이나믹스 홈"
        >
          <span className="brand-mark" aria-hidden="true">
            K<span> /</span>
          </span>
          <span>
            고려다이나믹스<small>KORYO DYNAMICS</small>
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "메뉴 닫기 ✕" : "메뉴 열기 ☰"}
        </button>
        <nav
          id="main-navigation"
          className={open ? "open" : ""}
          aria-label="주 메뉴"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                (item.href === "/" ? path === "/" : path.startsWith(item.href))
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
