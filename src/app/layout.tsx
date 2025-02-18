import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConfigProvider } from "antd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "基于爬虫的全网搜索",
  description: "基于爬虫的全网搜索",
  icons: "logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center items-center h-[100vh] bg-gray-50`}
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#000000",
              borderRadius: 2,
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
