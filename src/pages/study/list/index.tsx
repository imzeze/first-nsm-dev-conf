import { GetServerSideProps } from 'next';

import { MainLayout } from '@/app/components/layouts';
import StudyListTemplate from '@/app/components/templates/StudyListTemplate';

const StudyListPage = ({
  category,
  keyword,
}: {
  category: string;
  keyword: string;
}) => {
  return <StudyListTemplate />;
};

StudyListPage.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default StudyListPage;
