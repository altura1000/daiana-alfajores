import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="
        relative
        mt-3
        min-h-[calc(100svh-5.5rem)]
        overflow-hidden
        rounded-b-2xl
      "
    >
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="אלפחורס ארגנטינאי פרימיום"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/35 to-black/15" />

      {/* Content */}
      <div
        className="
          relative z-10
          mx-auto flex
          min-h-[calc(100svh-5.5rem)]
          max-w-6xl
          items-center
          px-4 py-12
          sm:px-6
          md:py-16
        "
      >
        <div className="max-w-xl text-right text-white">
          <span
            className="
              inline-block rounded-full
              border border-white/20
              bg-white/15
              px-4 py-2
              text-sm font-semibold
              backdrop-blur-md
            "
          >
            🇦🇷 מיוצר באהבה ובהשראה מארגנטינה
          </span>

          <h1
            className="
              text-[#f8f4ee]
              mt-6
              text-4xl
              font-bold
              leading-[1.1]
              tracking-tight
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            האלפחורס
            <br />
            שיגרמו לכם
            <br />
            להתאהב בביס הראשון.
          </h1>

          <p
            className="
              mt-6
              max-w-lg
              text-base
              leading-8
              text-white/90
              sm:text-lg
            "
          >
            שכבות של עוגיות חמאה עדינות, ריבת חלב ארגנטינאית עשירה
            וציפויים יוקרתיים שנעשים בעבודת יד.
            <br />
            מושלם למתנה, לאירוח או פשוט לפנק את עצמכם.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row-reverse">
            <Link
              href="#packs"
              className="
                rounded-full
                bg-[#5c2d10]
                px-8 py-4
                text-center
                text-lg font-semibold
                text-white
                transition
                hover:bg-[#47220d]
              "
            >
              הזמן עכשיו
            </Link>

            <Link
              href="#alfajores"
              className="
                rounded-full
                border border-white
                bg-white/10
                px-8 py-4
                text-center
                text-lg font-semibold
                text-white
                backdrop-blur-md
                transition
                hover:bg-white
                hover:text-[#3d1f08]
              "
            >
              צפה במוצרים
            </Link>
          </div>

          <div
            className="
              mt-10
              flex flex-wrap
              gap-x-6 gap-y-3
              text-sm
              text-white/90
            "
          >
            <div>✓ עבודת יד</div>
            <div>✓ חומרי גלם איכותיים</div>
            <div>✓ ריבת חלב מקורית</div>
          </div>
        </div>
      </div>
    </section>
  );
}