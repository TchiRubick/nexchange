"use client"
import { AosProvider } from "@/components/aos-provider";
import { MainNav } from "@/components/nav/main-nav";
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

export const MainContent = ({ children }: { children: ReactNode }) => (
  <SessionProvider>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
    >
      <AosProvider>
        <div className='flex min-h-screen flex-col space-y-6'>
          <header className='sticky top-0 z-40 border-b bg-background'>
            <div className='container flex h-16 items-center justify-between py-4'>
              <MainNav />
            </div>
          </header>
          <main className='flex w-full flex-1 flex-col overflow-hidden'>{children}</main>
        </div>
      </AosProvider>
    </ThemeProvider>
  </SessionProvider>
);
