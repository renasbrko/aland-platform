"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StatsCounter({ value, suffix = "", label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const durationMs = 1200;
    const steps = 30;
    const increment = Math.ceil(value / steps);
    const stepDuration = Math.floor(durationMs / steps);

    const timer = window.setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value;
        window.clearInterval(timer);
      }
      setCount(current);
    }, stepDuration);

    return () => window.clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-slate-200 bg-white px-6 py-5 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900"
    >
      <p className="text-3xl font-black text-amber-500">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">{label}</p>
    </motion.div>
  );
}
