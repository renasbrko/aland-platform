import Link from "next/link";
import { notFound } from "next/navigation";
import { Lock, PlayCircle } from "lucide-react";
import { courses } from "@/data/site-content";

export default function CourseDetailsPage({ params }) {
  const course = courses.find((item) => item.id === params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="section-shell space-y-8 py-10">
      <header className="space-y-2">
        <h1 className="text-4xl font-black">{course.title}</h1>
        <p className="text-slate-600 dark:text-slate-300">مامۆستا: {course.instructor}</p>
      </header>

      <section className="surface-card overflow-hidden">
        {/* Video placeholder to be replaced by your secure backend player endpoint */}
        <div className="flex h-80 items-center justify-center bg-slate-900 text-slate-100">
          <div className="text-center">
            <PlayCircle className="mx-auto h-16 w-16 text-amber-400" />
            <p className="mt-3 text-sm">Video Player Placeholder</p>
          </div>
        </div>
      </section>

      <section className="surface-card space-y-4 p-6">
        <h2 className="text-2xl font-black">پارەدان و دەستگەیشتن</h2>
        <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
          {/* Backend integration note: connect these buttons to your payment API webhooks */}
          ئەم دوگمانەکان ئامادەن بۆ بەستنی API ی پارەدان. پاش بەستنی backend دەتوانیت بە
          راستەوخۆ state ـی کڕین نوێ بکەیتەوە.
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="rounded-xl bg-purple-600 px-5 py-2 text-sm font-bold text-white">
            پارەدان بە ZainCash
          </button>
          <button className="rounded-xl bg-sky-600 px-5 py-2 text-sm font-bold text-white">
            پارەدان بە FastPay
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-2 text-sm font-bold dark:border-slate-700">
            <Lock className="h-4 w-4" />
            قوفڵکردنی ناوەڕۆکی پارەدراو
          </button>
        </div>
      </section>

      <Link href="/courses" className="inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white dark:bg-amber-400 dark:text-slate-950">
        گەڕانەوە بۆ کۆرسەکان
      </Link>
    </div>
  );
}
