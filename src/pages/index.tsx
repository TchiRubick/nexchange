import * as HomeCard from '@/components/local/HomeCard';
import { Layout } from '@/components/local/Layout';
import { Button } from '@/components/ui/button';
import { type Metadata } from 'next';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
};

const IndexPage = () => {
  const { status } = useSession();

  return (
    <Layout>
      <section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
        <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
          <Link
            href='https://twitter.com/SofosLykos'
            className='mb-5 rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium'
            target='_blank'
          >
            Follow along on Twitter
          </Link>
          <div data-aos='zoom-out' data-aos-duration='3000' data-aos-offset='100'>
            <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
              <b>NeXchange</b>
              <br /> On-Demand Staffing on Next.js and React developers
            </h1>
            <p className='mx-auto mt-10 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
              Redefining developer engagement with dynamic, on-demand access to top-tier Next.js and
              React talent from Madagascar.
            </p>
          </div>
          {status === 'unauthenticated' && (
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
          )}
        </div>
      </section>
      <section
        id='features'
        className='container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24'
        data-aos='zoom-out'
        data-aos-offset='300'
        data-aos-duration='1000'
      >
        <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
          <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
            Technologies
          </h2>
          <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            Our projects are primarily developed using the cutting-edge t3 stack, leveraging the
            exceptional features of Next.js for a superior web development environment.
          </p>
        </div>
        <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>
          <HomeCard.NextCard />
          <HomeCard.ReactCard />
          <HomeCard.DatabaseCard />
          <HomeCard.ComponentsCard />
          <HomeCard.AuthCard />
          <HomeCard.VercelCard />
          <HomeCard.ReduxCard />
          <HomeCard.GithubCard />
          <HomeCard.DiscordCard />
        </div>
        <div className='mx-auto text-center md:max-w-[58rem]'>
          <p className='leading-normal text-muted-foreground sm:text-lg sm:leading-7'>
            Do you know that &apos;Ne&apos; is the symbol for Neon, and its atomic number
            &apos;Z&apos; is X?
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
