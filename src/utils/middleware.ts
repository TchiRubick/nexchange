import { getServerAuthSession } from '@/server/auth';
import { type GetServerSidePropsContext, type GetServerSidePropsResult } from 'next';

const rejectionHandler = (message: string, destination = '/') => ({
  redirect: {
    destination: `${destination}?${message && `message=${message}`}`,
    permanent: false,
  },
});

export const contractorGuard =
  <T>(
    callback: (
      arg: GetServerSidePropsContext
    ) => GetServerSidePropsResult<T> | Promise<GetServerSidePropsResult<T>>
  ) =>
  async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<T>> => {
    const session = await getServerAuthSession(ctx);

    if (!session) {
      return rejectionHandler('Not authentified');
    }

    return callback(ctx);
  };
