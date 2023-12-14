"use client"
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export const LinkCommunity = () => {
  const { status } = useSession();

  return status === 'unauthenticated' && (
    <div
      className='space-x-4 mt-5'
      data-aos='fade-left'
      data-aos-duration='2000'
      data-aos-offset='400'
    >
      <div className='grid gap-6'>
        <Link href='/auth/signin'>
          <Button variant='outline' type='button'>
            Join the community
          </Button>
        </Link>
      </div>
    </div>
  )
};
