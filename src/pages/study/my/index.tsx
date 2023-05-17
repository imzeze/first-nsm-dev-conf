import { MainLayout } from '@/app/components/layouts';
import MyStudyListTemplate from '@/app/components/templates/MyStudyListTemplate';

const MyStudyListPage = () => {
  return <MyStudyListTemplate />;
};

MyStudyListPage.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default MyStudyListPage;
