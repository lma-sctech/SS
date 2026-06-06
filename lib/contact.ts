import { siteConfig } from "@/data/site";

export function whatsappLink(service?: string) {
  const message = service
    ? `Hello Sanaa Services, I need help with ${service}. Can you assist me?`
    : "Hello Sanaa Services, I need help with one of your services. Can you assist me?";
  return `https://wa.me/${siteConfig.whatsapp.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

export function phoneLink() {
  return `tel:${siteConfig.phone}`;
}

export function emailLink() {
  return `mailto:${siteConfig.email}`;
}
