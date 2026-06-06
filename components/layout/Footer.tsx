import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[#253150] bg-[#121B35] text-white shadow-[0_-18px_70px_rgba(18,27,53,0.28)]">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <Link href="/" className="focus-ring relative inline-flex h-16 w-full max-w-[28rem] overflow-visible rounded-md" aria-label={`${siteConfig.name} home`}>
            <span className="absolute left-0 top-1/2 block h-40 w-full -translate-y-1/2 overflow-visible">
              <Image
                src="/img/logo_sanaaservices_hd.png"
                alt=""
                fill
                sizes="448px"
                className="object-contain object-left drop-shadow-[0_12px_26px_rgba(0,0,0,0.28)]"
              />
            </span>
            <span className="sr-only">{siteConfig.name}</span>
          </Link>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/78 drop-shadow-sm">
            Practical support for documents, travel, insurance and immigration paperwork across the United States.
          </p>
        </div>

        <div className="lg:text-right">
          <div className="text-sm leading-6 text-white/78">
            <p>{siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region}</p>
            <p>{siteConfig.hours}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#253150]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-white/62 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© 2026 Sanaa Services. All rights reserved.</p>
          <div className="flex gap-4">
            <Link className="focus-ring rounded-sm hover:text-white" href="/privacy">Privacy</Link>
            <a className="focus-ring rounded-sm hover:text-white" href={siteConfig.googleReviewsUrl} target="_blank" rel="noreferrer">Google Reviews</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
