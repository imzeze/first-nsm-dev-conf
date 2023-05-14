import { MainLayout } from '@/app/components/layouts';
import MetaDataHead from '@/app/components/molecules/MetaDataHead';
import MainTemplate from '@/app/components/templates/MainTemplate';

const MainPage = () => {
  return (
    <>
      <MetaDataHead />
      <MainTemplate />
    </>
  );
};

MainPage.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default MainPage;
