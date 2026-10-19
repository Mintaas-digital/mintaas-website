import { Image } from "@/components/image";
import { UAX_IMAGES } from "@/lib/uax-case-study";

export function UaxCaseStudy() {
  return (
    <div className="w-full">
      {UAX_IMAGES.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={`UAX Stake design ${i + 1}`}
          width={img.width}
          height={img.height}
          priority={i === 0}
          className="block h-auto w-full"
        />
      ))}
    </div>
  );
}
