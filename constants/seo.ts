/**
 * SEO defaults (English primary — matches default UI language).
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
  title: "Ruben Saez | Musician & Audio Engineer — Dinamo Studio",
  titleEs: "Ruben Saez | Músico e Ingeniero de Audio — Dinamo Studio",
  titleShort: "Ruben Saez — Dinamo Studio",
  descriptionEn:
    "Music and audio post-production for film, TV, documentaries, and advertising. Composition, sound design, and Dolby Atmos mixing at Dinamo Studio, Mexico. Emmy, Cannes World, and more.",
  descriptionEs:
    "Música y postproducción de audio para cine, series, documentales y publicidad. Composición, diseño sonoro y mezcla Dolby Atmos en Dinamo Studio, México. Emmy, Cannes World y más.",
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
  locale: "en_US",
  localeAlternate: "es_MX",
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
        description: seo.descriptionEn,
        inLanguage: ["en-US", "es-MX"],
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Ruben Saez",
        url: siteUrl,
        image: imageUrl,
        jobTitle: "Musician & Audio Engineer",
        description: seo.descriptionEn,
        sameAs: [seo.instagramUrl],
        knowsAbout: [
          "Music composition",
          "Sound design",
          "Audio mixing",
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
