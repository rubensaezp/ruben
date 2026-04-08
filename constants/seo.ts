/**
 * SEO defaults (Spanish primary — matches default UI language).
 * Set NEXT_PUBLIC_SITE_URL in production, e.g. https://rubensaez.com
 * (falls back to VERCEL_URL on Vercel, then localhost for dev).
 */
export function getAbsoluteSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, "")}`;
  return "http://localhost:3000";
}

export const seo = {
  title: "Ruben Saez | Músico e Ingeniero de Audio — Dinamo Studio",
  titleShort: "Ruben Saez — Dinamo Studio",
  descriptionEs:
    "Música y postproducción de audio para cine, series, documentales y publicidad. Composición, diseño sonoro y mezcla Dolby Atmos en Dinamo Studio, México. Emmy, Cannes World y más.",
  descriptionEn:
    "Music and audio post-production for film, TV, documentaries, and advertising. Composition, sound design, and Dolby Atmos mixing at Dinamo Studio, Mexico.",
  keywords: [
    "Ruben Saez",
    "Dinamo Studio",
    "compositor",
    "compositor cine",
    "diseño sonoro",
    "mezcla 5.1",
    "Dolby Atmos",
    "ingeniero de audio",
    "música para cine",
    "postproducción audio",
    "México",
    "sound design",
    "film composer",
  ].join(", "),
  author: "Ruben Saez",
  locale: "es_MX",
  localeAlternate: "en_US",
  twitterCard: "summary_large_image" as const,
  ogImagePath: "/bg-hero.jpg",
  instagramUrl: "https://www.instagram.com/dinamo_music_studio",
} as const;

export function buildJsonLd(siteUrl: string) {
  const imageUrl = `${siteUrl}${seo.ogImagePath}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: seo.titleShort,
        description: seo.descriptionEs,
        inLanguage: ["es-MX", "en-US"],
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Ruben Saez",
        url: siteUrl,
        image: imageUrl,
        jobTitle: "Músico e Ingeniero de Audio",
        description: seo.descriptionEs,
        sameAs: [seo.instagramUrl],
        knowsAbout: [
          "Composición musical",
          "Diseño sonoro",
          "Mezcla de audio",
          "Dolby Atmos",
        ],
        workLocation: {
          "@type": "Place",
          name: "México",
        },
      },
    ],
  };
}
