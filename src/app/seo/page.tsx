import type { Metadata } from "next";
import { siteDetails } from "@/data/siteDetails";
import SEOContent from "./SEOContent";

const niche = 'dakdekker';
const nichePlural = 'dakdekkers';

export const metadata: Metadata = {
  title: `SEO en online marketing voor ${nichePlural} | ${siteDetails.siteName}`,
  description: `Online marketing voor ${nichePlural} die opdrachten oplevert: SEO, blogartikelen, lokale vindbaarheid en je Google Bedrijfsprofiel. Vanaf ${"\u20AC"}79 per maand.`,
  openGraph: {
    title: `SEO en online marketing voor ${nichePlural} | ${siteDetails.siteName}`,
    description: `Wil je als ${niche} beter gevonden worden in Google? ${siteDetails.siteName} regelt je SEO volledig: keyword research, content en technische optimalisatie.`,
    url: `${siteDetails.siteUrl}seo`,
    type: "website",
  },
  alternates: {
    canonical: `${siteDetails.siteUrl}seo`,
  },
};

export default function SEOPage() {
  return <SEOContent />;
}
