import Image from "next/image";

import whyUs from '@/public/whyUs.png'


const details = [
  {
    number: "01",
    eyebrow: "הבסיס",
    title: "עוגייה שנמסה, לא מתפוררת",
    description:
      "אנחנו אופים את העוגיות עד הרגע המדויק שבו הן נשארות עדינות ורכות, אבל עדיין מחזיקות את המילוי העשיר שביניהן.",
  },
  {
    number: "02",
    eyebrow: "הלב",
    title: "שכבה נדיבה של דולסה דה לצ'ה",
    description:
      "לא נגיעה סמלית באמצע. כל אלפחור מקבל מילוי עשיר שמרגישים כבר בביס הראשון — בדיוק כמו בארגנטינה.",
  },
  {
    number: "03",
    eyebrow: "הגימור",
    title: "מצופה אחד־אחד ביד",
    description:
      "כל יחידה עוברת ציפוי וגימור בנפרד, כדי שהשוקולד, המרקם והאיזון בין השכבות יהיו מדויקים.",
  },
];

export default function WhyPatria() {
  return (
    <section
      id="nosotros"
      dir="rtl"
      className="overflow-hidden"
    >
      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1.15fr_0.85fr]">
        {/* Content — right side */}
        <div className="flex flex-col justify-center px-5 py-16 sm:px-10 sm:py-20 lg:min-h-[780px] lg:px-14 xl:px-20">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.32em] text-[#9b6644]">
              לא עוד עוגייה ליד הקפה
            </p>

            <h2 className="mt-6 text-4xl font-medium leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              שלוש שכבות.
              <br />
              אפס קיצורי דרך.
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#72503c] sm:text-lg">
              הטעם של{" "}
              <span dir="ltr" className="font-serif italic text-[#321708]">
                Patria
              </span>{" "}
              לא מגיע מסיסמה אחת גדולה, אלא מהמון החלטות קטנות שאנחנו לא
              מוכנים להתפשר עליהן.
            </p>
          </div>

          <div className="mt-10 border-t border-[#cdb69c]">
            {details.map((detail) => (
              <article
                key={detail.number}
                className="
                  group grid gap-4 border-b border-[#cdb69c] py-6
                  sm:grid-cols-[64px_1fr] sm:gap-6 sm:py-7
                "
              >
                <span
                  dir="ltr"
                  className="
                    text-sm font-medium tracking-[0.16em] text-[#a06b48]
                    transition-transform duration-300
                    group-hover:-translate-x-1
                  "
                >
                  {detail.number}
                </span>

                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#a06b48]">
                    {detail.eyebrow}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] sm:text-2xl">
                    {detail.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-[#795943] sm:text-base">
                    {detail.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold tracking-[0.12em] text-[#8d654c]">
            <span>נאפה בכמויות קטנות</span>
            <span className="h-1 w-1 rounded-full bg-[#a97b5d]" />
            <span>מורכב ביד</span>
            <span className="h-1 w-1 rounded-full bg-[#a97b5d]" />
            <span>מיוצר בישראל</span>
          </div>
        </div>

        {/* Image — left side */}
        <div className="relative min-h-[480px] overflow-hidden sm:min-h-[600px] lg:min-h-[780px]">
          <Image
            src={whyUs}
            alt="אלפחור פתוח עם שכבת דולסה דה לצ'ה"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="
              object-cover
              object-[42%_center]
              transition-transform
              duration-[1400ms]
              hover:scale-[1.02]
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          <div className="absolute inset-x-7 bottom-7 flex items-end justify-between text-[#fff8ee] sm:inset-x-10 sm:bottom-10">
            <div>
              <p
                dir="ltr"
                className="text-xs font-medium tracking-[0.25em] opacity-75"
              >
                HECHO CON AMOR
              </p>

              <p className="mt-2 max-w-sm text-lg leading-7 sm:text-xl">
                אלפחור טוב לא צריך הסברים.
                <br />
                אבל הוא כן צריך סבלנות.
              </p>
            </div>

            <span
              dir="ltr"
              className="hidden font-serif text-5xl italic opacity-90 sm:block"
            >
              Patria
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}