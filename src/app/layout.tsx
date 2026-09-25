import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingHelpWidget from "@/components/ui/FloatingHelpWidget";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { CookieBanner } from "@/components/layout/CookieBanner";
import LoadingScreen from "@/components/layout/LoadingScreen";
import { SITE_CONFIG } from "@/lib/constants";
// ============================================
// FONT SETUP
// ============================================
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

// ============================================
// METADATA
// ============================================
export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "koperasi",
    "koperasi simpan pinjam",
    "KSP",
    "Bali",
    "Mandara Sedana Kuta",
    "Madata Mobile",
    "simpanan",
    "pinjaman",
    "koperasi Bali",
    "koperasi digital",
    "koperasi Legian",
    "koperasi Sesetan",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  metadataBase: new URL("https://mandarasedanakuta.co.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://mandarasedanakuta.co.id",
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: `${SITE_CONFIG.name} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#065A74" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
};

// ============================================
// ROOT LAYOUT
// ============================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning className={plusJakarta.variable}>
      <head>
        {/* Schema.org LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: SITE_CONFIG.name,
              alternateName: "Mandara Sedana Kuta",
              description: SITE_CONFIG.description,
              url: "https://mandarasedanakuta.co.id",
              logo: "https://mandarasedanakuta.co.id/logo.png",
              telephone: "+62813-9430-6999",
              email: SITE_CONFIG.email,
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: "Jl. Legian Kuta Gang Bendesa No.5",
                  addressLocality: "Kuta",
                  addressRegion: "Bali",
                  addressCountry: "ID",
                },
                {
                  "@type": "PostalAddress",
                  streetAddress: "Jl. Tukad Banyu Sari No. 100",
                  addressLocality: "Sesetan, Denpasar Selatan",
                  addressRegion: "Bali",
                  addressCountry: "ID",
                },
              ],
              geo: [
                {
                  "@type": "GeoCoordinates",
                  latitude: -8.7143616,
                  longitude: 115.1727784,
                },
                {
                  "@type": "GeoCoordinates",
                  latitude: -8.6839753,
                  longitude: 115.2177335,
                },
              ],
              sameAs: [
                `https://instagram.com/${SITE_CONFIG.instagram}`,
                `https://facebook.com/${SITE_CONFIG.facebook}`,
                SITE_CONFIG.youtube,
              ],
              foundingDate: "2017",
              areaServed: {
                "@type": "State",
                name: "Bali",
              },
            }),
          }}
        />
        {/* GA4 Placeholder */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.ga4Id}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${SITE_CONFIG.ga4Id}');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <LoadingScreen />
          <Navbar />
          <main id="main-content" className="flex-1 pt-[72px]">
            {children}
          </main>
          <Footer />
          <FloatingHelpWidget />
          <ScrollToTop />
          <CookieBanner />
          <Toaster
            position="top-right"
            richColors
            toastOptions={{
              style: {
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                color: "var(--text-primary)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
