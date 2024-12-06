import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/components/globalsStyles/globals.css";
import Layout from "@/components/layout/layout";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const geistMonts = localFont({
  src: "../fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-geist-monts",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMonts.variable}`}>
        <AntdRegistry>
          <Layout>{children}</Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
