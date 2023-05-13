import { NextPageWithLayout } from "@/app/types/NextPageWithLayout";
import { AppProps } from "next/app";

export interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}
