// The "1500+ brands" globe animation centred on a solid coloured tile. Used
// as the cover for the Interaction card on the home and work pages. The
// iframe ignores pointer events so the surrounding link stays clickable.
const TILE_COLOR = "#D9F2F8";

export function InteractionIconTile() {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      style={{ backgroundColor: TILE_COLOR }}
    >
      <div
        className="pointer-events-none relative w-3/5"
        style={{ aspectRatio: "342 / 326" }}
      >
        <iframe
          src="/projects/interaction/Icon_Largest_global_catalogue.html"
          title="Interaction design animation"
          sandbox="allow-scripts"
          loading="lazy"
          tabIndex={-1}
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    </div>
  );
}
