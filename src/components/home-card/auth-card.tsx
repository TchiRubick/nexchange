export const AuthCard = () => (
  <div
    className='relative overflow-hidden rounded-lg border bg-background p-2'
    data-aos='flip-right'
    data-aos-duration='1500'
  >
    <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1'
        className='h-12 w-12 fill-current'
      >
        <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
      </svg>
      <div className='space-y-2'>
        <h3 className='font-bold'>Authentication</h3>
        <p className='text-sm text-muted-foreground'>
          Authentication using NextAuth.js and middlewares.
        </p>
      </div>
    </div>
  </div>
);
