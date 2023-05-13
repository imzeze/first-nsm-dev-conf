import { useStudies } from '@/app/hooks/useStudies';

const ListPage = () => {
  const { data, isLoading } = useStudies();

  if (isLoading) return <div>Loading</div>;

  return <>{data?.payload[0].category}</>;
};

export default ListPage;
