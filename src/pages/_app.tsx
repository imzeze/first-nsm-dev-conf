import "../app/styles/global.css";
import { AppPropsWithLayout } from "@/app/types/AppPropsWithLayout";

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
