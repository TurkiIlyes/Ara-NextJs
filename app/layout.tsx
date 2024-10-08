import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import StoreProvider from "@/redux/StoreProvider";
import NextSessionProvider from "@/components/Provider/NextSessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ARA CONSULTING",
  description: "ARA CONSULTING",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Toaster position="top-right" reverseOrder={true} />
        <StoreProvider>
          <NextSessionProvider>{children}</NextSessionProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
