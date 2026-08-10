import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BIGRAtec – Gesundheitstechnik aus Saarbrücken",
  description:
    "Reha-Technik, Homecare, Orthopädietechnik und Pflegehilfsmittel. Familiengeführt im Saarland, seit über zwei Jahrzehnten.",
  metadataBase: new URL("https://www.bigratec.de"),
  openGraph: {
    title: "BIGRAtec – Gesundheitstechnik aus Saarbrücken",
    description:
      "Reha-Technik, Homecare, Orthopädietechnik und Pflegehilfsmittel – mit dem Anspruch, dass jedes Detail sitzt.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${fraunces.variable} ${geist.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
