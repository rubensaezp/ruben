import Head from "next/head";
import Hero from "@/components/Hero";
import Composer from "@/components/Composer";
import SoundDesign from "@/components/SoundDesign";
import Discography from "@/components/Discography";
import Credits from "@/components/Credits";
import About from "@/components/About";
import Awards from "@/components/Awards";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { buildJsonLd, getAbsoluteSiteUrl, seo } from "@/constants/seo";

export default function Home() {
  const siteUrl = getAbsoluteSiteUrl();
  const ogImageUrl = `${siteUrl}${seo.ogImagePath}`;
  const jsonLd = buildJsonLd(siteUrl);

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.descriptionEs} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content={seo.author} />
        <meta name="creator" content={seo.author} />
        <meta name="publisher" content="Dinamo Studio" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="geo.region" content="MX" />

        <link rel="canonical" href={`${siteUrl}/`} />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content={seo.locale} />
        <meta property="og:locale:alternate" content={seo.localeAlternate} />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:site_name" content={seo.titleShort} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.descriptionEs} />
        <meta property="og:image" content={ogImageUrl} />
        <meta
          property="og:image:alt"
          content="Ruben Saez — Músico e ingeniero de audio, Dinamo Studio"
        />

        <meta name="twitter:card" content={seo.twitterCard} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.descriptionEn} />
        <meta name="twitter:image" content={ogImageUrl} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </Head>

      <Hero />
      <Composer />
      <SoundDesign />
      <Discography />
      <Credits />
      <About />
      <Awards />
      <ContactForm />
      <Footer />
    </>
  );
}
