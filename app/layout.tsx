import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LeadFormProvider from "./components/LeadFormProvider";

const alanSans = localFont({
  src: "../public/fonts/AlanSans-VariableFont_wght.ttf",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Skolarrs Solutions",
  description: "Study India and Abroad with personalized admission support."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={alanSans.className}>
        <LeadFormProvider>{children}</LeadFormProvider>
      </body>
    </html>
  );
}
