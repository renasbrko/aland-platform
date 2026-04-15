"use client";

import Link from "next/link";
import { Languages, Moon, Sun } from "lucide-react";
import { languageOptions, mainNavigation } from "@/data/site-content";
import { useAppContext } from "@/components/providers";

export default function Navbar() {
  const { theme, language, setLanguage, toggleTheme } = useAppContext();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Aland Logo"
            className="h-12 w-12 rounded-full object-contain ring-2 ring-amber-300/70"
          />
          <div>
            <p className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
              ئەلند
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Aland Learning Platform
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {mainNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-amber-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden items-center rounded-xl border border-slate-200 bg-slate-50 p-1 dark:border-slate-700 dark:bg-slate-900 sm:flex">
            <Languages className="mx-2 h-4 w-4 text-slate-500" />
            {languageOptions.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => setLanguage(option.code)}
                className={`rounded-lg px-2 py-1 text-xs font-bold transition ${
                  language === option.code
                    ? "bg-amber-400 text-slate-900"
                    : "text-slate-600 hover:bg-slate-200 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-amber-300 hover:text-amber-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
