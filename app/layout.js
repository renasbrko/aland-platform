import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi-arabic",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Aland | پلاتفۆرمی پەروەردەیی ئەلند",
  description: "Professional educational platform for Kurdish students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ku" dir="rtl" className={`${notoKufiArabic.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <AppProviders>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
