import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Amatic_SC, Poppins} from "next/font/google"

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100","200","300","400","500","600","700","800","900"],
});

const amatic =Amatic_SC({
  subsets: ["latin"],
  weight: ["400","700"],
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fine Arts ",
  description: "Official Website for Fine Arts NITH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${amatic.className} ${geistMono.variable} ${poppins.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
