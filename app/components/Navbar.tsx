"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/70 backdrop-blur-xl">
      <div className="px-8 md:px-24 py-5 flex items-center justify-between">
        <Link href="/" className="text-sm font-bold tracking-widest text-cyan-400">
          RG
        </Link>
        <div className="flex items-center gap-10">
          {[
            { label: "About", href: "/about" },
            { label: "Projects", href: "/#projects" },
            { label: "Skills", href: "/#skills" },
            { label: "Contact", href: "/#contact" },
          ].map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.label} href={item.href}
                className={`text-sm transition-colors pb-1 ${
                  isActive
                    ? "text-white border-b border-cyan-400"
                    : "text-white/40 hover:text-white"
                }`}>
                {item.label}
              </Link>
            );
          })}
          <a href="/cv.pdf" target="_blank"
            className="bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 px-5 py-2 rounded-full text-sm hover:bg-cyan-400/20 transition-all">
            CV ↓
          </a>
        </div>
      </div>
    </nav>
  );
}