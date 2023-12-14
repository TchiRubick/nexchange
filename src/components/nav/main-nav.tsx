"use client"
import { UserAccountNav } from '@/components/avatar/user-account-avatar';
import { cn } from '@/lib/utils';
import { Command, X } from 'lucide-react';
import { useSession } from "next-auth/react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, type ReactNode } from 'react';
import { MobileNav } from './mobile-nav';

type MainNavProps = {
  items?: {
    href: string;
    title: string;
    disabled?: boolean;
  }[];
  children?: ReactNode;
};

export const MainNav = ({ items, children }: MainNavProps) => {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const { data: session, status } = useSession();

  return (
    <>
      <div className='flex gap-6 md:gap-10'>
        <Link href='/' className='hidden items-center space-x-2 md:flex'>
          <Command />
          <span className='hidden font-bold sm:inline-block'>NeXchange</span>
        </Link>
        {status === 'authenticated' && items?.length ? (
          <nav className='hidden gap-6 md:flex'>
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.disabled ? '#' : item.href}
                className={cn(
                  'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                  item.href.startsWith(`/${pathname}`) ? 'text-foreground' : 'text-foreground/60',
                  item.disabled && 'cursor-not-allowed opacity-80'
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        ) : null}
        <button
          className='flex items-center space-x-2 md:hidden'
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          {showMobileMenu ? <X /> : <Command />}
          <span className='font-bold'>Menu</span>
        </button>
        {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
      </div>
      {session && <UserAccountNav user={session.user} />}
    </>
  );
};
