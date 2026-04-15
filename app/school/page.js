"use client";

import { useMemo, useState } from "react";
import { schoolHierarchy } from "@/data/site-content";

export default function SchoolPage() {
  const [curriculumIndex, setCurriculumIndex] = useState(0);
  const [gradeIndex, setGradeIndex] = useState(0);
  const [subjectIndex, setSubjectIndex] = useState(0);

  const selectedCurriculum = schoolHierarchy[curriculumIndex];
  const selectedGrade = selectedCurriculum.grades[gradeIndex];
  const selectedSubject = selectedGrade.subjects[subjectIndex];

  const availableMaterials = useMemo(() => selectedSubject.materials, [selectedSubject.materials]);

  return (
    <div className="section-shell space-y-8 py-10">
      <header className="space-y-2">
        <h1 className="text-4xl font-black">بەشی قوتابیانی قوتابخانە</h1>
        <p className="text-slate-600 dark:text-slate-300">
          ڕێکخستنێکی 4 ئاستی: کوریکولم ← پۆل ← بابەت ← بەرهەم.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-4">
        <article className="surface-card p-4">
          <h2 className="mb-3 text-sm font-black">1) کوریکولم</h2>
          <div className="space-y-2">
            {schoolHierarchy.map((item, index) => (
              <button
                key={item.curriculum}
                type="button"
                onClick={() => {
                  setCurriculumIndex(index);
                  setGradeIndex(0);
                  setSubjectIndex(0);
                }}
                className={`w-full rounded-lg px-3 py-2 text-sm font-bold ${
                  curriculumIndex === index
                    ? "bg-amber-400 text-slate-900"
                    : "bg-slate-100 dark:bg-slate-800"
                }`}
              >
                {item.curriculum}
              </button>
            ))}
          </div>
        </article>

        <article className="surface-card p-4">
          <h2 className="mb-3 text-sm font-black">2) پۆل</h2>
          <div className="space-y-2">
            {selectedCurriculum.grades.map((grade, index) => (
              <button
                key={grade.name}
                type="button"
                onClick={() => {
                  setGradeIndex(index);
                  setSubjectIndex(0);
                }}
                className={`w-full rounded-lg px-3 py-2 text-sm font-bold ${
                  gradeIndex === index ? "bg-amber-400 text-slate-900" : "bg-slate-100 dark:bg-slate-800"
                }`}
              >
                {grade.name}
              </button>
            ))}
          </div>
        </article>

        <article className="surface-card p-4">
          <h2 className="mb-3 text-sm font-black">3) بابەت</h2>
          <div className="space-y-2">
            {selectedGrade.subjects.map((subject, index) => (
              <button
                key={subject.name}
                type="button"
                onClick={() => setSubjectIndex(index)}
                className={`w-full rounded-lg px-3 py-2 text-sm font-bold ${
                  subjectIndex === index
                    ? "bg-amber-400 text-slate-900"
                    : "bg-slate-100 dark:bg-slate-800"
                }`}
              >
                {subject.name}
              </button>
            ))}
          </div>
        </article>

        <article className="surface-card p-4">
          <h2 className="mb-3 text-sm font-black">4) بەرهەمەکان</h2>
          <ul className="space-y-2">
            {availableMaterials.map((material) => (
              <li key={material} className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-bold dark:bg-slate-800">
                {material}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
