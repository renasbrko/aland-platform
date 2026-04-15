"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Megaphone } from "lucide-react";
import StatsCounter from "@/components/stats-counter";
import { partners, services, stats } from "@/data/site-content";

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="section-shell relative grid min-h-[78vh] items-center gap-8 py-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-white"
          >
            <span className="inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1 text-sm font-bold text-amber-300">
              پلاتفۆرمی پەروەردەیی ئەلند
            </span>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              بۆ داهاتووی خوێندن
              <br />
              لەگەڵ <span className="text-amber-300">Aland</span>
            </h1>

            <p className="max-w-xl text-base leading-8 text-slate-200 md:text-lg">
              فێربوونێکی مۆدێرن، خێرا و ڕێکخراو بۆ قوتابیان و فێرخوازان. کۆرس، مامۆستا،
              تاقیکردنەوە و بڕوانامە لە شوێنێکی یەکگرتوودا.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-6 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-amber-300"
              >
                دەستپێکردن
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                href="/auth"
                className="inline-flex rounded-xl border border-slate-300/50 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                دروستکردنی هەژمار
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="surface-card mx-auto w-full max-w-md bg-white/10 p-6 backdrop-blur-md"
          >
            <img src="/logo.png" alt="Aland Logo" className="mx-auto h-28 w-28 rounded-full" />
            <p className="mt-4 text-center text-xl font-black text-white">ئەلند</p>
            <p className="mt-2 text-center text-sm text-slate-200">
              ژینگەیەکی تەواو بۆ خوێندنی قوتابیی و فێرکاری پیشەیی.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <StatsCounter
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="surface-card flex flex-col items-center justify-between gap-3 bg-gradient-to-r from-amber-200 to-amber-100 p-5 text-center dark:from-amber-900/60 dark:to-amber-700/20 sm:flex-row">
          <div className="flex items-center gap-2 text-slate-800 dark:text-amber-200">
            <Megaphone className="h-5 w-5" />
            <p className="text-sm font-bold">
              شوێنی ڕیکلام: ئەتوانیت لێرە بەرهەمە پەروەردەییەکانت پیشان بدەیت.
            </p>
          </div>
          <Link href="/auth" className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-bold text-white">
            پەیوەندی بکە
          </Link>
        </div>
      </section>

      <section className="section-shell space-y-6">
        <h2 className="text-3xl font-black">خزمەتگوزارییە سەرەکییەکان</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.id} className="surface-card p-6">
              <h3 className="text-2xl font-black">{service.title}</h3>
              <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-5 inline-flex rounded-xl bg-slate-900 px-5 py-2 text-sm font-bold text-white transition hover:bg-slate-700 dark:bg-amber-400 dark:text-slate-950"
              >
                {service.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <article className="surface-card border-r-4 border-amber-400 p-8">
          <h2 className="text-3xl font-black">بینین و ئامانج</h2>
          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            ئامانجی ئەلند ئەوەیە هەموو قوتابیێک دەرفەتی فێربوونی کوالێتی بۆ بەردەست بێت.
            ئێمە پلاتفۆرمێکی مۆدێرن دروست دەکەین کە فێربوون لە ئاستی نێودەوڵەتی لە
            کوردستان دابین بکات.
          </p>
        </article>
      </section>

      <section className="section-shell space-y-6">
        <h2 className="text-3xl font-black">هاوبەش و پاڵپشتەکانمان</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <Link
              key={partner.name}
              href={partner.href}
              target="_blank"
              className="surface-card flex items-center justify-center p-4 transition hover:-translate-y-1 hover:border-amber-300"
            >
              <img src={partner.logo} alt={partner.name} className="h-10 w-auto object-contain" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
