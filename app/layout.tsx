import Header from "@/components/Header";
import { ConfigProvider } from "antd";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BloodBooth - Save Lives Through Blood Donation",
  description:
    "Join thousands of heroes who donate blood regularly. Your single donation can save up to three lives. Connect with blood donation centers and make a difference today.",
  keywords: [
    "blood donation",
    "donate blood",
    "blood bank",
    "save lives",
    "blood donor",
    "emergency blood",
    "blood drive",
  ],
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <meta name="theme-color" content="#ef4444" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#dc2626",
            },
            components: {
              Steps: {
                colorPrimary: "#dc2626",
                colorPrimaryBorder: "#fecdd3",
                colorTextDescription: "#4b5563",
                colorTextProcess: "#dc2626",
                dotCurrentSize: 12,
                dotSize: 10,
              },
            },
          }}
        >
          <Header />
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
