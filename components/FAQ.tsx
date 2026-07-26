"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "איך מבצעים הזמנה?",
    answer:
      "אפשר להזמין בקלות דרך WhatsApp. בוחרים את המארז הרצוי, שולחים הודעה ואנחנו חוזרים אליכם עם כל הפרטים.",
  },
  {
    question: "תוך כמה זמן ההזמנה מוכנה?",
    answer:
      "רוב ההזמנות מוכנות בתוך 24–48 שעות. בהזמנות גדולות או לאירועים מומלץ להזמין מראש.",
  },
  {
    question: "האם יש משלוחים?",
    answer:
      "כן. ניתן להזמין משלוח באזורי השירות שלנו או לבצע איסוף עצמי בתיאום מראש.",
  },
  {
    question: "האם אפשר להזמין לאירועים או כמתנה?",
    answer:
      "בהחלט. אנחנו מכינים מארזים חגיגיים לימי הולדת, אירועים עסקיים, חגים ומתנות אישיות.",
  },
  {
    question: "איך שומרים על האלפחורס?",
    answer:
      "מומלץ לשמור במקום קריר ויבש. בקיץ אפשר לשמור במקרר ולהוציא כמה דקות לפני ההגשה לקבלת המרקם המושלם.",
  },
];
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      dir="rtl"
      className="bg-[#FFF3E1] py-24"
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.35em] text-[#9b6644]">
            שאלות נפוצות
          </p>

          <h2 className="mt-5 text-4xl font-medium leading-tight text-[#321708] sm:text-5xl">
            כל מה שרציתם לדעת.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#755641]">
            ריכזנו את השאלות שאנחנו מקבלים הכי הרבה לפני ההזמנה.
          </p>
        </div>

        <div className="mt-16 divide-y divide-[#dcc5aa] border-y border-[#dcc5aa]">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div key={faq.question}>
                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="
                    flex w-full items-center justify-between
                    py-7 text-right transition
                    hover:text-[#7f4b27]
                  "
                >
                  <span className="text-xl font-semibold">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 transition duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] pb-7"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl leading-8 text-[#755641]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}