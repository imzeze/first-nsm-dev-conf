import { GetServerSideProps } from 'next';

import { MainLayout } from '@/app/components/layouts';
import StudyDetailTemplate from '@/app/components/templates/StudyDetailTemplate';

const StudyDetailPage = ({ id }: { id: string }) => {
  return <StudyDetailTemplate id={id} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.id,
    },
  };
};

StudyDetailPage.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default StudyDetailPage;
