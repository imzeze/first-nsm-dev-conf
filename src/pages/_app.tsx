import '../app/styles/global.css';

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { RecoilRoot } from 'recoil';

import { AppPropsWithLayout } from '@/app/types/AppPropsWithLayout';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>{getLayout(<Component {...pageProps} />)}</RecoilRoot>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
