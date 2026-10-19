import type { Metadata } from "next";
import { HashScroll } from "@/components/hash-scroll";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = {
  title: "Work",
};

export default function Work() {
  return (
    <div className="px-3 pt-28 pb-36">
      <HashScroll />
      <WorkGrid />
    </div>
  );
}
