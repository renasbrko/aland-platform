import Link from "next/link";
import { Globe, MessageCircle, Send, Video } from "lucide-react";

const socialLinks = [
  { href: "https://t.me", label: "Telegram", icon: Send },
  { href: "https://facebook.com", label: "Facebook", icon: MessageCircle },
  { href: "https://instagram.com", label: "Instagram", icon: Globe },
  { href: "https://youtube.com", label: "YouTube", icon: Video },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100 py-10 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Aland Logo" className="h-10 w-10 rounded-full" />
            <p className="text-lg font-extrabold text-slate-900 dark:text-slate-100">ئەلند</p>
          </div>
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
            پلاتفۆرمی پەروەردەیی تایبەت بۆ قوتابیانی کوردستان.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">پەیوەندی</h3>
          <p className="text-slate-600 dark:text-slate-300">WhatsApp: +964 750 000 0000</p>
          <p className="text-slate-600 dark:text-slate-300">Telegram: @aland_support</p>
          <p className="text-slate-600 dark:text-slate-300">Email: support@aland.edu</p>
        </div>

        <div className="space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">سۆشیال میدیا</h3>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 text-slate-700 transition hover:border-amber-400 hover:text-amber-500 dark:border-slate-700 dark:text-slate-200"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-slate-500 dark:text-slate-400">
        PP Aland. All Rights Reserved ©
      </p>
    </footer>
  );
}
