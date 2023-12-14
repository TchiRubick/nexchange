"use client"

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { signIn, useSession } from 'next-auth/react';
import { type HTMLAttributes } from 'react';
import { GithubIcon } from './github-icon';

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>;

export const UserAuthForm = ({ className, ...props }: UserAuthFormProps) => {
  const { status } = useSession();

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Button variant='outline' type='button' onClick={() => void signIn('github', { callbackUrl: '/' })} disabled={status === 'loading'}>
        <GithubIcon className='mr-2 h-4 w-4' /> Github
      </Button>
    </div>
  );
}
