import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function AuthPage() {
  return (
    <div className="section-shell py-12">
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="surface-card space-y-6 p-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1 text-sm font-bold text-amber-800 dark:bg-amber-300/20 dark:text-amber-200">
            <ShieldCheck className="h-4 w-4" />
            Authentication Ready
          </div>
          <h1 className="text-4xl font-black">چوونەژوورەوە / دروستکردنی هەژمار</h1>
          <p className="leading-8 text-slate-600 dark:text-slate-300">
            {/* Backend integration note: wire these forms to your auth provider (JWT/OAuth/Firebase) */}
            ئەم لایەوتە ئامادەیە بۆ بەستنی backend ـی تۆ بۆ Email, Google, Apple و بەڕێوەبردنی
            session/token.
          </p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-amber-400 dark:border-slate-700 dark:bg-slate-900"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-amber-400 dark:border-slate-700 dark:bg-slate-900"
            />
            <button className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white dark:bg-amber-400 dark:text-slate-950">
              بەردەوامبە
            </button>
          </form>
        </section>

        <section className="surface-card space-y-5 p-8">
          <h2 className="text-2xl font-black">پارەدان بۆ کۆرسی پارەدراو</h2>
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
            دوگمەکانی خوارەوە UI ی ئامادەی backend ـن. دەتوانیت بە API ی پارەدانەکەت
            بیبەستیت.
          </p>

          <div className="space-y-3">
            <button className="w-full rounded-xl bg-purple-600 px-4 py-3 text-sm font-bold text-white">
              پارەدان بە ZainCash
            </button>
            <button className="w-full rounded-xl bg-sky-600 px-4 py-3 text-sm font-bold text-white">
              پارەدان بە FastPay
            </button>
          </div>

          <Link
            href="/courses"
            className="inline-flex rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold dark:border-slate-700"
          >
            گەڕانەوە بۆ کۆرسەکان
          </Link>
        </section>
      </div>
    </div>
  );
}
