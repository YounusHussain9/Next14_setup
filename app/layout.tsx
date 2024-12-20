import React, { ReactNode } from "react";
import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";
import Providers from "./components/providers/NextUIProvider";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased w-full min-h-screen flex flex-col justify-center items-center`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
