import { MainLayout } from '@/app/components/layouts';
import StudyDetailTemplate from '@/app/components/templates/StudyDetailTemplate';

const StudyDetailPage = () => {
  return <StudyDetailTemplate />;
};

StudyDetailPage.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default StudyDetailPage;
