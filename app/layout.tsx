import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ChatWidget } from "@/components/chat-widget";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://dattaremit.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DattaRemit - Money without borders",
    template: "%s | DattaRemit",
  },
  description:
    "Send USD from your US bank account to any Indian bank account — transparent rates, clearly disclosed fees, bank-grade encryption, and settlement through our regulated payments partner Cybrid.",
  keywords: [
    "USD to INR remittance",
    "send money to India",
    "US to India money transfer",
    "international money transfer",
    "cross-border payments",
    "remittance to India",
    "UPI payout",
    "IMPS payout",
    "Plaid-linked remittance",
    "DattaRemit",
  ],
  authors: [{ name: "DattaRemit" }],
  creator: "DattaRemit",
  publisher: "DattaRemit",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "DattaRemit",
    title: "DattaRemit - Money without borders",
    description:
      "Send money internationally with zero fees, instant transfers, and the best exchange rates. Global banking and payments powered by regulated stablecoins.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DattaRemit - Money without borders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DattaRemit - Send USD to India, the straightforward way",
    description:
      "Send USD from your US bank account to any Indian bank account — transparent rates, clearly disclosed fees, bank-grade encryption.",
    images: ["/og-image.png"],
    creator: "@dattaremit",
  },
  verification: {
    // Add these when you have the verification codes
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "DattaRemit",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
      sameAs: [
        "https://twitter.com/dattaremit",
        "https://linkedin.com/company/dattaremit",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "support@dattaremit.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "DattaRemit",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      description:
        "Send USD from your US bank account to any Indian bank account, with transparent rates and bank-grade security.",
    },
    {
      "@type": "FinancialService",
      "@id": `${siteUrl}/#financialservice`,
      name: "DattaRemit",
      description:
        "USD-to-INR cross-border money transfer service. Operates through regulated payments partner Cybrid.",
      url: siteUrl,
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "India" },
      ],
      serviceType: "Cross-border money transfer",
      currenciesAccepted: "USD",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
