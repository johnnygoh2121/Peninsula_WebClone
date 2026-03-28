import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteAsset } from "@/lib/siteAssets";

export const metadata: Metadata = {
  title: "Metal Stamping - Peninsula Precision Stamping (Malaysia) Sdn. Bhd.",
  description: "Peninsula Precision Stamping (Malaysia) Sdn. Bhd. - Precision Metal Stamping Manufacturer established in 1994.",
  icons: {
    icon: siteAsset("/images/favicon-32x32.jpg"),
    apple: siteAsset("/images/favicon-180x180.jpg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-arimo">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
