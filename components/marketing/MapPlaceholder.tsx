import { siteConfig } from "@/data/site";
import { CardSurface } from "@/components/ui/CardSurface";

export function MapPlaceholder() {
  return (
    <CardSurface glow className="flex min-h-72 items-center justify-center bg-[linear-gradient(135deg,#e5e9ef,#f1f3f6_45%,#e8ecf1)] p-6">
      <div className="max-w-sm text-center">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-champagne">Visit us in Astoria</p>
        <p className="mt-3 text-xl font-bold text-navy">{siteConfig.address.street}</p>
        <p className="mt-2 text-sm leading-6 text-slate">
          {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
        </p>
      </div>
    </CardSurface>
  );
}
