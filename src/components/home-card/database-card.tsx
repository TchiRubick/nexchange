export const DatabaseCard = () => (
  <div
    className='relative overflow-hidden rounded-lg border bg-background p-2'
    data-aos='flip-left'
    data-aos-duration='1500'
  >
    <div className='flex h-[180px] flex-col justify-between rounded-md p-6'>
      <svg viewBox='0 0 24 24' className='h-12 w-12 fill-current'>
        <path d='M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z' />
      </svg>
      <div className='space-y-2'>
        <h3 className='font-bold'>Database</h3>
        <p className='text-sm text-muted-foreground'>
          ORM using Drizzle and deployed on PlanetScale.
        </p>
      </div>
    </div>
  </div>
);
