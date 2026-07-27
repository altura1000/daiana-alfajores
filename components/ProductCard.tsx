import Image from "next/image";

import foo from '@/public/whyUs.png'

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imgSrc: string;
  imgAlt: string;
  tag?: string;
  quantity?: string;
  features?: string[];
  featured?: boolean;
  priceNote?: string;
}

export default function ProductCard({
  title,
  description,
  price,
  imgSrc,
  imgAlt,
  tag,
  quantity,
  features = [],
  featured = false,
  priceNote,
}: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(
    `שלום דיאנה, אשמח לקבל פרטים על ${title}.`
  );

  return (
    <article
      className={`
        group relative flex h-full flex-col overflow-hidden
        rounded-[1.75rem] border
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(61,31,8,0.12)]
        ${
          featured
            ? "border-[#b87940] ring-1 ring-[#b87940]/20"
            : "border-[#dfcdb5]"
        }
      `}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#eadcc9]">
        <Image
          src={foo}
          alt={imgAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="
            object-cover
            transition-transform duration-700
            group-hover:scale-[1.04]
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        {tag && (
          <span
            className="
              absolute right-4 top-4
              rounded-full border border-white/25
              bg-[#3d1f08]/85 px-3.5 py-1.5
              text-xs font-bold text-white
              backdrop-blur-md
            "
          >
            {tag}
          </span>
        )}

        {quantity && (
          <span
            className="
              absolute bottom-4 right-4
              rounded-full bg-[#fff8ed]/95
              px-4 py-2 text-sm font-bold
              text-[#3d1f08] shadow-sm
            "
          >
            {quantity}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl font-bold leading-snug text-[#3d1f08]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#795943]">
          {description}
        </p>

        {features.length > 0 && (
          <ul className="mt-5 space-y-2.5">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-[#674630]"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eddac3] text-xs text-[#7b411d]">
                  ✓
                </span>

                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-6">
          <div className="border-t border-[#e4d3bd] pt-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <span className="font-serif text-3xl font-bold text-[#b96b25]">
                  {price}
                </span>

                {priceNote && (
                  <p className="mt-1 text-xs text-[#8b7355]">{priceNote}</p>
                )}
              </div>

              <a
                href={`https://wa.me/972500000000?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex min-h-11 items-center justify-center
                  rounded-full bg-[#3d1f08] px-5 py-2.5
                  text-sm font-bold text-[#fff8ed]
                  transition duration-200
                  hover:bg-[#5c2d10]
                  active:scale-95
                "
              >
                להזמנה
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}