const CTA_PHONE_NUMBER =
  process.env.NEXT_PUBLIC_CTA_PHONE_NUMBER ?? "525586444339";

export function whatsappLink(text: string): string {
  const params = new URLSearchParams({ text });
  return `https://wa.me/${CTA_PHONE_NUMBER}?${params.toString()}`;
}
