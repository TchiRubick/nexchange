import { UserAuthForm } from '@/components/local/UserAuthForm';

export const SigninForm = () => (
  <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[360px]'>
    <div className='flex flex-col space-y-2 text-center'>
      <h1 className='text-2xl font-semibold tracking-tight'>Join NeXchange community</h1>
      <p className='text-sm text-muted-foreground'>
        Connect with your Github account, we&apos;ll reach you out
      </p>
    </div>
    <UserAuthForm />
  </div>
);
