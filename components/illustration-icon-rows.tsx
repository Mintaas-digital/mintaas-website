import { Image } from "@/components/image";
import { ILLUSTRATION_ICONS } from "@/lib/illustration-case-study";

type Vector = (typeof ILLUSTRATION_ICONS.rows)[number][number];

// Each vector already carries its own rounded card, so there is no tile
// wrapper. Same marquee as the About page's Daily Tools rows.
function VectorRow({
  items,
  reverse = false,
}: {
  items: Vector[];
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div
        className={`flex w-max gap-4 py-2 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 gap-4"
            aria-hidden={group === 1}
          >
            {items.map((vector) => (
              <Image
                key={vector.n}
                src={vector.src}
                alt={`Vector illustration ${vector.n}`}
                width={vector.width}
                height={vector.height}
                className="h-auto w-44 shrink-0 sm:w-60"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function IllustrationIconRows() {
  const [rowOne, rowTwo] = ILLUSTRATION_ICONS.rows;

  return (
    <div className="flex flex-col gap-4">
      <VectorRow items={rowOne} />
      <VectorRow items={rowTwo} reverse />
    </div>
  );
}
