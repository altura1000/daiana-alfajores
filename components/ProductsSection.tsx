"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

type Category = "all" | "single" | "packs" | "events";

interface Product {
  title: string;
  description: string;
  price: string;
  imgSrc: string;
  imgAlt: string;
  category: Exclude<Category, "all">;
  tag?: string;
  quantity?: string;
  features?: string[];
  featured?: boolean;
  priceNote?: string;
}

const products: Product[] = [
  {
    title: "אלפחור קלאסי",
    description:
      "עוגיות קורנפלור עדינות, ריבת חלב ארגנטינאית וקוקוס מסביב.",
    price: "12 ₪",
    priceNote: "ליחידה",
    imgSrc: "/whyUs.png",
    imgAlt: "אלפחור קלאסי עם ריבת חלב וקוקוס",
    category: "single",
    tag: "הקלאסי",
    quantity: "יחידה אחת",
    features: ["מיוצר בעבודת יד", "ריבת חלב מקורית"],
  },
  {
    title: "אלפחור מצופה שוקולד",
    description:
      "עוגייה רכה עם מילוי נדיב של ריבת חלב וציפוי שוקולד עשיר.",
    price: "14 ₪",
    priceNote: "ליחידה",
    imgSrc: "/whyUs.png",
    imgAlt: "אלפחור מצופה שוקולד",
    category: "single",
    tag: "אהוב במיוחד",
    quantity: "יחידה אחת",
    features: ["ציפוי שוקולד", "מילוי נדיב"],
  },

  {
    title: "מארז היכרות",
    description:
      "מארז קטן ומדויק לטעימה, אירוח ביתי או מתנה אישית ומתוקה.",
    price: "132 ₪",
    imgSrc: "/whyUs.png",
    imgAlt: "מארז של 12 אלפחורס",
    category: "packs",
    quantity: "12 יחידות",
    features: ["עד 3 טעמים לבחירה", "אריזה חגיגית", "מתאים למתנה"],
  },
  {
    title: "המארז המשפחתי",
    description:
      "מארז עשיר לאירוח, ימי הולדת, ארוחות משפחתיות או פשוט לחלוק.",
    price: "240 ₪",
    imgSrc: "/whyUs.png",
    imgAlt: "מארז משפחתי של 24 אלפחורס",
    category: "packs",
    tag: "הכי מבוקש",
    quantity: "24 יחידות",
    features: ["עד 4 טעמים לבחירה", "אריזה חגיגית", "חיסכון ביחס ליחידה"],
    featured: true,
  },
  {
    title: "מארז החגיגה",
    description:
      "מארז גדול ומרשים שמתאים למסיבות, אירוח רחב ומתנות לצוותים.",
    price: "432 ₪",
    imgSrc: "/whyUs.png",
    imgAlt: "מארז גדול של 48 אלפחורס",
    category: "packs",
    tag: "לאירוח",
    quantity: "48 יחידות",
    features: ["מבחר טעמים", "אריזה גדולה", "מתאים לאירועים קטנים"],
  },

  {
    title: "מארז קייטרינג לאירועים",
    description:
      "אלפחורס בעבודת יד לאירועים פרטיים, ימי הולדת, בריתות, חתונות ואירועים עסקיים.",
    price: "החל מ־9 ₪",
    priceNote: "ליחידה, בהתאם לכמות",
    imgSrc: "/whyUs.png",
    imgAlt: "מגש אלפחורס לאירוע",
    category: "events",
    tag: "בהזמנה אישית",
    quantity: "מ־50 יחידות",
    features: [
      "מחיר מותאם לכמות",
      "אפשרות לאריזה אישית",
      "מיתוג לאירועים ועסקים",
      "בחירת טעמים וציפויים",
    ],
    featured: true,
  },
];

const filters: Array<{ label: string; value: Category }> = [
  { label: "הכול", value: "all" },
  { label: "יחידים", value: "single" },
  { label: "מארזים", value: "packs" },
  { label: "אירועים", value: "events" },
];

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section
      id="alfajores"
      dir="rtl"
      className="border-y border-[#e5d2b8] bg-[#FFF3E1]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        {/* Heading */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <SunIcon />

              <p className="text-xs font-bold tracking-[0.3em] text-[#b66d29]">
                התפריט שלנו
              </p>
            </div>

            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#3d1f08] sm:text-5xl">
              אלפחורס ומארזים
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#795943] sm:text-lg">
              מאלפחור אחד ליד הקפה ועד מארזים גדולים לאירועים — הכול נאפה,
              ממולא ונארז בעבודת יד.
            </p>
          </div>

          {/* Filters */}
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="סינון מוצרים"
          >
            {filters.map((filter) => {
              const isActive = activeCategory === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveCategory(filter.value)}
                  className={`
                    rounded-full border px-5 py-2.5
                    text-sm font-bold transition duration-200
                    ${
                      isActive
                        ? "border-[#3d1f08] bg-[#3d1f08] text-[#fff8ed]"
                        : "border-[#dcc8ad] bg-transparent text-[#6b3a1f] hover:border-[#9b6644] hover:bg-[#f7ead9]"
                    }
                  `}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>

        {/* Catering CTA */}
        <div className="mt-14 overflow-hidden rounded-[2rem] border border-[#d8c1a4] bg-[#f2dfc6]">
          <div className="grid items-center gap-8 px-6 py-9 sm:px-10 lg:grid-cols-[1fr_auto] lg:px-12">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-[#a45f29]">
                מתכננים אירוע?
              </p>

              <h3 className="mt-3 font-serif text-3xl font-bold text-[#3d1f08]">
                בואו נבנה לכם מארז בהתאמה אישית
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-[#72503c]">
                ספרו לנו כמה אורחים צפויים, איזה סוג אירוע אתם מתכננים ואילו
                טעמים אתם אוהבים — ונכין הצעה שמתאימה בדיוק עבורכם.
              </p>
            </div>

            <a
              href="https://wa.me/972500000000?text=שלום%20דיאנה,%20אשמח%20לקבל%20פרטים%20על%20אלפחורס%20לאירוע"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex min-h-12 items-center justify-center
                rounded-full bg-[#5c2d10] px-7 py-3.5
                font-bold text-white transition
                hover:bg-[#442009]
              "
            >
              קבלת הצעה לאירוע
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SunIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="21" fill="#E8A020" />

      {Array.from({ length: 12 }).map((_, index) => (
        <line
          key={index}
          x1="50"
          y1="9"
          x2="50"
          y2="1"
          stroke="#E8A020"
          strokeWidth="3"
          strokeLinecap="round"
          transform={`rotate(${index * 30} 50 50)`}
        />
      ))}

      <circle
        cx="50"
        cy="50"
        r="15"
        fill="none"
        stroke="#3D1F08"
        strokeWidth="2"
        opacity="0.2"
      />
    </svg>
  );
}