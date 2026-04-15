export const languageOptions = [
  { code: "ku", label: "کوردی" },
  { code: "ar", label: "العربية" },
  { code: "en", label: "English" },
];

export const mainNavigation = [
  { href: "/", label: "سەرەکی" },
  { href: "/courses", label: "کۆرسەکان" },
  { href: "/school", label: "بەشی قوتابیان" },
  { href: "/auth", label: "چوونەژوورەوە" },
];

export const stats = [
  { id: "students", label: "خوێندکاری بەشداری", value: 18000, suffix: "+" },
  { id: "visitors", label: "سەردانکەری چالاک", value: 3200, suffix: "+" },
  { id: "courses", label: "کۆرسی بەردەست", value: 240, suffix: "+" },
];

export const services = [
  {
    id: "courses",
    title: "کۆرس و فێرکاری پیشەیی",
    description:
      "کۆرسی ویدیۆیی، پڕۆژەی پراکتیکی و ئەنجامنامەی پشتڕاستکراو بۆ بازارکاری.",
    cta: "گەڕان بەناو کۆرسەکان",
    href: "/courses",
  },
  {
    id: "school",
    title: "بەشی قوتابیانی قوتابخانە",
    description:
      "پلانێکی ڕێکخراو لە کوریکولم، پۆل، بابەت و بەرهەمی خوێندن بۆ هەموو ئاستەکان.",
    cta: "چوونە بەشی قوتابیان",
    href: "/school",
  },
];

export const partners = [
  {
    name: "UNICEF",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/UNICEF_Logo.png",
    href: "https://www.unicef.org/",
  },
  {
    name: "Coursera",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg",
    href: "https://www.coursera.org/",
  },
  {
    name: "Khan Academy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Khan_Academy_logo_%282018%29.svg",
    href: "https://www.khanacademy.org/",
  },
  {
    name: "edX",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/EdX.svg",
    href: "https://www.edx.org/",
  },
  {
    name: "Wikipedia",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png",
    href: "https://www.wikipedia.org/",
  },
  {
    name: "UNESCO",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/UNESCO_logo.svg",
    href: "https://www.unesco.org/",
  },
];

export const courses = [
  {
    id: "frontend-foundations",
    title: "بنەماکانی Front-End بۆ دەستپێکەر",
    instructor: "مامۆستا ئارام",
    language: "ku",
    type: "free",
    hasCertificate: true,
    price: "خۆڕایی",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "react-pro",
    title: "React Pro بۆ پڕۆژەی ڕاستەقینە",
    instructor: "مامۆستا سارا",
    language: "ar",
    type: "paid",
    hasCertificate: true,
    price: "39$",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "english-for-students",
    title: "English For Students",
    instructor: "Teacher Lana",
    language: "en",
    type: "free",
    hasCertificate: false,
    price: "Free",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "ui-ux-masterclass",
    title: "UI/UX Masterclass for Education Platforms",
    instructor: "Designer Omar",
    language: "en",
    type: "paid",
    hasCertificate: true,
    price: "59$",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80",
  },
];

export const schoolHierarchy = [
  {
    curriculum: "سۆرانی",
    grades: [
      {
        name: "پۆلی 10",
        subjects: [
          { name: "بیرکاری", materials: ["فری کۆرس", "PDF", "وەزارەتی"] },
          { name: "زانست", materials: ["فری کۆرس", "لایڤی پارەدراو", "PDF"] },
        ],
      },
      {
        name: "پۆلی 12",
        subjects: [
          { name: "فیزیا", materials: ["فری کۆرس", "وەزارەتی"] },
          { name: "کیمیا", materials: ["لایڤی پارەدراو", "PDF", "وەزارەتی"] },
        ],
      },
    ],
  },
  {
    curriculum: "عەرەبی",
    grades: [
      {
        name: "الصف 9",
        subjects: [
          { name: "الرياضيات", materials: ["كورس مجاني", "PDF"] },
          { name: "العلوم", materials: ["كورس مدفوع", "امتحانات وزارية"] },
        ],
      },
    ],
  },
];
