export const VercelCard = () => (
  <div
    className='relative overflow-hidden rounded-lg border bg-background p-2'
    data-aos='flip-right'
    data-aos-duration='1500'
  >
    <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
      <svg
        fill='#ffffff'
        viewBox='0 0 512 512'
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12 fill-current'
      >
        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
        <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round'></g>
        <g id='SVGRepo_iconCarrier'>
          <path fillRule='evenodd' d='M256,48,496,464H16Z'></path>
        </g>
      </svg>
      <div className='space-y-2'>
        <h3 className='font-bold'>Vercel</h3>
        <p className='text-sm text-muted-foreground'>
          Cloud platform to deploy, scale, and manage websites and web applications.
        </p>
      </div>
    </div>
  </div>
);
