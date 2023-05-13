import { AppProps } from 'next/app';

import { NextPageWithLayout } from '@/app/types/NextPageWithLayout';

export interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}
