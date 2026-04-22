import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import {
  LegalPageHero,
  LegalBody,
  LegalSectionHeading,
} from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How DattaRemit uses cookies and similar technologies on our website and applications, and how you can manage your preferences.",
  openGraph: {
    title: "Cookie Policy | DattaRemit",
    description:
      "How DattaRemit uses cookies and similar technologies, and how you can manage your preferences.",
    url: "https://dattaremit.com/cookies",
  },
  alternates: {
    canonical: "https://dattaremit.com/cookies",
  },
};

type Section =
  | { title: string; content: string }
  | { title: string; intro: string; items: string[] }
  | {
      title: string;
      intro: string;
      table: {
        name: string;
        purpose: string;
        lifetime: string;
        category: string;
      }[];
    };

const sections: Section[] = [
  {
    title: "What cookies are",
    content:
      "Cookies are small text files that a website stores on your device to remember information between visits. Similar technologies — including local storage, session storage, and mobile application identifiers — do the same job. This policy covers all of them and explains which we use and why.",
  },
  {
    title: "Categories we use",
    intro:
      "We only use cookies and similar technologies that fall into one of three categories:",
    items: [
      "Strictly necessary — required for the site or app to work, including holding your authenticated session, preserving your cart-equivalent transfer state, and preventing abuse. These cannot be disabled because the service would not function without them.",
      "Preference — remember your chosen language, theme (light / dark), and certain display preferences so you do not have to re-select them every visit.",
      "Analytics and performance — help us understand how visitors interact with our site so we can improve it. We do not combine this data with identified customer records and we do not use it for advertising.",
    ],
  },
  {
    title: "Cookies we set",
    intro:
      "Below is a representative list of the cookies and similar technologies active on dattaremit.com. Names and lifetimes may change as we refine the product.",
    table: [
      {
        name: "__session",
        purpose: "Clerk-issued authentication session cookie.",
        lifetime: "Session (cleared on logout)",
        category: "Strictly necessary",
      },
      {
        name: "__clerk_db_jwt",
        purpose:
          "Clerk session refresh token used to mint short-lived access tokens.",
        lifetime: "Up to 7 days",
        category: "Strictly necessary",
      },
      {
        name: "theme",
        purpose: "Stores your chosen interface theme (light / dark / system).",
        lifetime: "1 year (local storage)",
        category: "Preference",
      },
      {
        name: "next-themes",
        purpose: "Synchronises theme choice across tabs.",
        lifetime: "1 year (local storage)",
        category: "Preference",
      },
    ],
  },
  {
    title: "Third-party technologies",
    intro:
      "Some features on our website rely on third-party services that may set their own cookies or identifiers subject to their own privacy policies:",
    items: [
      "Clerk — authentication, session issuance, and bot protection.",
      "Plaid — US bank account linking when you start an ACH funding flow.",
      "Sentry — browser-side error capture used to diagnose crashes (we configure Sentry to redact identifiable fields at source).",
      "Google — reCAPTCHA-style bot protection when used, and address autocomplete where you opt in during onboarding.",
    ],
  },
  {
    title: "Managing your preferences",
    intro: "You can control cookies through your browser or device settings:",
    items: [
      "Most browsers allow you to see what cookies are set and delete them individually or clear them all.",
      "Most browsers let you block cookies from specific sites or from third parties globally.",
      "Mobile operating systems allow you to reset advertising identifiers and limit ad tracking.",
      "If you block strictly necessary cookies you will not be able to log in or complete a transfer.",
    ],
  },
  {
    title: "Updates to this policy",
    content:
      "We review and update this policy when we introduce or retire any cookie or similar technology. The 'last updated' date below reflects the most recent change. Questions about this policy can be sent to privacy@dattaremit.com.",
  },
];

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPageHero
          eyebrow="Cookies"
          title="Cookie Policy."
          titleAccent="Tiny files, clear intentions."
          description="The cookies and similar technologies we use, and how you can manage them."
          lastUpdated="April 22, 2026"
        />
        <LegalBody>
          {sections.map((section, i) => (
            <div key={section.title}>
              <LegalSectionHeading number={i + 1} title={section.title} />
              {"content" in section && !("intro" in section) && (
                <p>{section.content}</p>
              )}
              {"intro" in section && <p className="mb-3">{section.intro}</p>}
              {"items" in section && (
                <ul>
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              {"table" in section && (
                <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-card">
                  <table className="w-full text-sm">
                    <thead className="bg-background/60 text-left">
                      <tr>
                        <th className="px-4 py-3 text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground">
                          Name
                        </th>
                        <th className="px-4 py-3 text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground">
                          Purpose
                        </th>
                        <th className="px-4 py-3 text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground">
                          Lifetime
                        </th>
                        <th className="px-4 py-3 text-[11px] uppercase tracking-[0.16em] font-medium text-muted-foreground">
                          Category
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {section.table.map((row) => (
                        <tr key={row.name}>
                          <td className="px-4 py-3 align-top font-mono text-xs text-foreground">
                            {row.name}
                          </td>
                          <td className="px-4 py-3 align-top text-muted-foreground leading-relaxed">
                            {row.purpose}
                          </td>
                          <td className="px-4 py-3 align-top text-muted-foreground whitespace-nowrap">
                            {row.lifetime}
                          </td>
                          <td className="px-4 py-3 align-top text-muted-foreground whitespace-nowrap">
                            {row.category}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </LegalBody>
      </main>
      <Footer />
    </>
  );
}
