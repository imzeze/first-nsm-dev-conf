import { MainLayout } from '@/app/components/layouts';
import StudyListTemplate from '@/app/components/templates/StudyListTemplate';

const StudyListPage = () => {
  return <StudyListTemplate />;
};

StudyListPage.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default StudyListPage;
