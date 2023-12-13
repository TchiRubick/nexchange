import "@/styles/globals.css";

import { TRPCReactProvider } from "@/trpc/react";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { MainContent } from "./_components/main-content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "NeXchange",
  description: "On-Demand Staffing on Next.js and React developers",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider cookies={cookies().toString()}>
          <MainContent>
            {children}
          </MainContent>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
