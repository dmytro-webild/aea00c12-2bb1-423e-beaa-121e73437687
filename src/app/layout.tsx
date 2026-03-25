import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Armstrong Plumbing, Inc. | Precision & Reliable Plumbing Services',
  description: 'Armstrong Plumbing, Inc. offers expert, reliable plumbing services for homeowners. From emergency repairs to full renovations, trust us for precision craftsmanship and transparent pricing.',
  keywords: ["plumbing, plumber, emergency plumbing, drain cleaning, water heater, home renovation plumbing, residential plumbing, Armstrong Plumbing"],
  openGraph: {
    "title": "Armstrong Plumbing, Inc. | Precision & Reliable Plumbing Services",
    "description": "Armstrong Plumbing, Inc. offers expert, reliable plumbing services for homeowners. From emergency repairs to full renovations, trust us for precision craftsmanship and transparent pricing.",
    "url": "https://www.armstrongplumbing.com",
    "siteName": "Armstrong Plumbing, Inc.",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/low-angle-man-working-as-plumber_23-2150746296.jpg",
        "alt": "Professional plumber working on pipes"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Armstrong Plumbing, Inc. | Precision & Reliable Plumbing Services",
    "description": "Armstrong Plumbing, Inc. offers expert, reliable plumbing services for homeowners. From emergency repairs to full renovations, trust us for precision craftsmanship and transparent pricing.",
    "images": [
      "http://img.b2bpic.net/free-photo/low-angle-man-working-as-plumber_23-2150746296.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
