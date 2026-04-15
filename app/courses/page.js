"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { courses } from "@/data/site-content";

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [languageFilter, setLanguageFilter] = useState("all");
  const [certificateFilter, setCertificateFilter] = useState("all");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.instructor.toLowerCase().includes(search.toLowerCase());
      const matchType = typeFilter === "all" || course.type === typeFilter;
      const matchLanguage = languageFilter === "all" || course.language === languageFilter;
      const matchCertificate =
        certificateFilter === "all" ||
        (certificateFilter === "yes" && course.hasCertificate) ||
        (certificateFilter === "no" && !course.hasCertificate);

      return matchSearch && matchType && matchLanguage && matchCertificate;
    });
  }, [certificateFilter, languageFilter, search, typeFilter]);

  return (
    <div className="section-shell space-y-8 py-10">
      <header className="space-y-2">
        <h1 className="text-4xl font-black">کۆرسەکان</h1>
        <p className="text-slate-600 dark:text-slate-300">
          فلتەر و گەڕان بۆ دۆزینەوەی کۆرسی گونجاو.
        </p>
      </header>

      <section className="surface-card grid gap-4 p-5 md:grid-cols-4">
        <label className="space-y-2">
          <span className="text-sm font-bold">جۆری کۆرس</span>
          <select
            value={typeFilter}
            onChange={(event) => setTypeFilter(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <option value="all">هەموو</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-bold">زمان</span>
          <select
            value={languageFilter}
            onChange={(event) => setLanguageFilter(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <option value="all">هەموو</option>
            <option value="ku">کوردی</option>
            <option value="ar">عەرەبی</option>
            <option value="en">English</option>
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-bold">بڕوانامە</span>
          <select
            value={certificateFilter}
            onChange={(event) => setCertificateFilter(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <option value="all">هەموو</option>
            <option value="yes">بەڵێ</option>
            <option value="no">نەخێر</option>
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-bold">گەڕان</span>
          <div className="flex items-center rounded-xl border border-slate-300 px-3 dark:border-slate-700">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="ناوی کۆرس یان مامۆستا"
              className="w-full bg-transparent px-2 py-2 text-sm outline-none"
            />
          </div>
        </label>
      </section>

      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map((course) => (
          <article key={course.id} className="surface-card overflow-hidden">
            <img src={course.image} alt={course.title} className="h-44 w-full object-cover" />
            <div className="space-y-3 p-5">
              <h2 className="text-lg font-black">{course.title}</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">{course.instructor}</p>
              <div className="flex items-center justify-between text-xs font-bold">
                <span>{course.type === "free" ? "Free" : "Paid"}</span>
                <span>{course.price}</span>
              </div>
              <Link
                href={`/courses/${course.id}`}
                className="inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-white dark:bg-amber-400 dark:text-slate-950"
              >
                بینینی وردەکاری
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
