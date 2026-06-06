import { ContactStrip } from "@/components/marketing/ContactStrip";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ServiceGrid } from "@/components/marketing/ServiceGrid";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata(
  "Services",
  "Explore Sanaa Services support for notary, translation, insurance, immigration documents, travel and more.",
  "/services",
);

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="All services"
        title="Choose the support you need."
        body="Every service has a direct call path, WhatsApp path and a focused request form so our team can follow up clearly."
      />
      <ServiceGrid featured className="mt-8" />
      <div className="mt-12">
        <ContactStrip />
      </div>
    </div>
  );
}
