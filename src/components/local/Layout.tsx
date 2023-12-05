import { MainNav } from '@/components/local/nav/MainNav';
import { MAIN_NAV_ITEMS } from '@/types/nav';
import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div className='flex min-h-screen flex-col space-y-6'>
    <header className='sticky top-0 z-40 border-b bg-background'>
      <div className='container flex h-16 items-center justify-between py-4'>
        <MainNav items={MAIN_NAV_ITEMS} />
      </div>
    </header>
    <main className='flex w-full flex-1 flex-col overflow-hidden'>{children}</main>
  </div>
);
