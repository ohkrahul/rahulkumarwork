import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rahul Sahu | Freelance Web Developer & Software Engineer — Mumbai",
  description:
    "Rahul Kumar Sahu is a freelance full-stack web developer in Mumbai specializing in React, Next.js, TypeScript, Node.js, GSAP animations, and AI integration. Google Cloud Hackathon 3rd Runner Up. Building fast, SEO-optimized websites, e-commerce platforms, SaaS apps, and mobile apps that grow your business. 25+ projects delivered, 100% client satisfaction.",
  keywords: [
    "Rahul Sahu",
    "Rahul Kumar Sahu",
    "Freelance Web Developer",
    "Freelance Developer Mumbai",
    "Full Stack Developer India",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "GSAP Animation Developer",
    "Web Developer Mumbai",
    "Hire Freelance Developer",
    "E-Commerce Developer",
    "SaaS Developer",
    "Mobile App Developer",
    "React Native Developer",
    "Website Maintenance",
    "SEO Expert",
    "UI UX Designer",
    "Google Cloud Hackathon 3rd Runner Up",
    "Portfolio Website",
    "Freelancer India",
  ],
  authors: [{ name: "Rahul Kumar Sahu", url: "https://www.rahulkumarsahu.in" }],
  creator: "Rahul Kumar Sahu",
  publisher: "Rahul Kumar Sahu",
  metadataBase: new URL("https://www.rahulkumarsahu.in"),
  alternates: {
    canonical: "https://www.rahulkumarsahu.in",
  },
  openGraph: {
    title: "Rahul Sahu | Freelance Web Developer & Software Engineer",
    description:
      "Full-stack developer building fast, beautiful websites, e-commerce stores, SaaS apps & mobile apps. Google Cloud Hackathon 3rd Runner Up. 25+ projects, 15+ happy clients.",
    type: "website",
    url: "https://www.rahulkumarsahu.in",
    siteName: "Rahul Kumar Sahu Portfolio",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Sahu | Freelance Web Developer",
    description:
      "Full-stack developer in Mumbai. React, Next.js, TypeScript, Node.js. Google Cloud Hackathon 3rd Runner Up. Hire me for your next project.",
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
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for SEO + AI search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rahul Kumar Sahu",
              alternateName: "Rahul Sahu",
              url: "https://www.rahulkumarsahu.in",
              jobTitle: "Freelance Full-Stack Web Developer",
              description:
                "Freelance full-stack web developer in Mumbai specializing in React, Next.js, TypeScript, Node.js, GSAP animations, and AI integration. Google Cloud Hackathon 3rd Runner Up. 25+ projects delivered.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              knowsAbout: [
                "React", "Next.js", "TypeScript", "JavaScript", "Node.js",
                "Python", "Tailwind CSS", "GSAP", "Firebase", "MongoDB",
                "PostgreSQL", "React Native", "Shopify", "WordPress",
                "UI/UX Design", "SEO", "E-Commerce Development",
                "SaaS Development", "Mobile App Development",
                "Web Development", "Full Stack Development",
              ],
              sameAs: [
                "https://www.rahulkumarsahu.in",
                "https://linkedin.com/in/rahulsahu",
                "https://github.com/rahulsahu",
              ],
              award: "3rd Runner Up — Gen AI Exchange Hackathon 2025 by Google Cloud",
              hasOccupation: {
                "@type": "Occupation",
                name: "Freelance Web Developer",
                skills:
                  "React, Next.js, TypeScript, Node.js, Python, Firebase, MongoDB, GSAP, Tailwind CSS, React Native, Shopify, WordPress, SEO, UI/UX Design",
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Web Development",
                    description:
                      "Modern responsive web applications with React, Next.js, Node.js, and TypeScript",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "E-Commerce Development",
                    description:
                      "Full-featured online stores with Shopify, WooCommerce, Stripe, and PayPal integration",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Mobile App Development",
                    description:
                      "Cross-platform mobile apps with React Native and Expo for iOS and Android",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "SaaS Application Development",
                    description:
                      "Scalable SaaS products with multi-tenant architecture and subscription billing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "UI/UX Design",
                    description:
                      "Beautiful interfaces with Figma, Adobe XD, design systems, and prototyping",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Website Maintenance & SEO",
                    description:
                      "Ongoing maintenance, performance optimization, security updates, and SEO",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Rahul Kumar Sahu — Freelance Web Developer Portfolio",
              url: "https://www.rahulkumarsahu.in",
              description:
                "Portfolio of Rahul Kumar Sahu, a freelance full-stack web developer in Mumbai. Showcasing projects, services, and achievements including Google Cloud Hackathon 3rd Runner Up.",
              author: {
                "@type": "Person",
                name: "Rahul Kumar Sahu",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* Custom cursor follows mouse with GSAP */}
        <CustomCursor />

        {/* Page transition overlay */}
        <PageTransition />

        {/* Noise texture overlay for premium feel */}
        <div className="noise-overlay" />

        {/* Fixed navigation */}
        <Navigation />

        {/* Lenis smooth scroll wrapper */}
        <SmoothScroll>
          <main>{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
