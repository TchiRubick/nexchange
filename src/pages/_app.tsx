import { ThemeProvider } from '@/components/provider/ThemeProvider';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { api } from '@/utils/api';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { type AppType } from 'next/app';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import { useEffect } from 'react';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <div
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable,
            fontHeading.variable
          )}
        >
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
