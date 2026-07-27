import Image from "next/image";

import daiana from '@/public/daiana.jpeg'

export default function DianaStory() {
  return (
 <section className="py-24">
  <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 md:flex-row-reverse">
    {/* Image */}
    <div className="flex-1">
      <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[32px] shadow-2xl">
        <Image
          src={daiana}
          alt="דיאנה"
          fill
          className="object-cover"
        />
      </div>
    </div>

    {/* Content */}
    <div className="flex-1 text-right">
      <span className="inline-block rounded-full bg-[#efe4d2] px-4 py-2 text-sm font-semibold text-[#8b7355]">
        הסיפור שלי
      </span>

      <h2 className="mt-6 text-4xl font-bold leading-tight text-[#3d1f08] md:text-5xl">
        נעים להכיר,
        <br />
        אני דיאנה.
      </h2>

      <p className="mt-8 text-lg leading-9 text-[#6b3a1f]">
        נולדתי וגדלתי בארגנטינה, ולפני כארבע שנים עליתי לישראל.
        היום אני גרה בחולון, אבל הלב שלי עדיין נמצא במטבח שעליו גדלתי.
      </p>

      <p className="mt-6 text-lg leading-9 text-[#6b3a1f]">
        במשך שנים בישלתי ואפיתי מאכלים ארגנטינאיים מסורתיים למשפחה ולחברים.
        עם הזמן הבנתי שאני רוצה להביא את הטעמים האלה גם לכאן, בדיוק כמו שאני זוכרת אותם מהבית.
      </p>

      <p className="mt-6 text-lg leading-9 text-[#6b3a1f]">
        כל אלפחורס שאני מכינה נעשה בעבודת יד, עם ריבת חלב ארגנטינאית,
        חומרי גלם איכותיים והמון אהבה לפרטים הקטנים.
      </p>

      <div className="mt-10 rounded-3xl border border-[#e9d7bc] bg-[#fffaf3] p-6">
        <p className="text-2xl italic leading-10 text-[#5c2d10]">
          "אני לא מנסה להכין עוד עוגייה.
          <br />
          אני רוצה שכל מי שטועם ירגיש לרגע שהוא יושב בבית קפה קטן בבואנוס איירס."
        </p>

        <p className="mt-5 text-sm font-semibold tracking-wide text-[#8b7355]">
          — דיאנה
        </p>
      </div>
    </div>
  </div>
</section>
  );
}