import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { type GetServerSidePropsContext } from 'next';
import { getServerSession, type DefaultSession, type NextAuthOptions } from 'next-auth';
import GithubProviders from 'next-auth/providers/github';

import { env } from '@/env';
import { db } from '@/server/db';
import { mysqlTable } from '@/server/db/schema';

declare module 'next-auth' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: 'contractor' | 'employer';
    } & DefaultSession['user'];
  }

  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface User {
    role: 'contractor' | 'employer';
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    session: ({ session, user, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          role: user.role,
        },
        token,
      };
    },
  },
  adapter: DrizzleAdapter(db, mysqlTable),
  providers: [
    GithubProviders({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
  debug: true,
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext['req'];
  res: GetServerSidePropsContext['res'];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
