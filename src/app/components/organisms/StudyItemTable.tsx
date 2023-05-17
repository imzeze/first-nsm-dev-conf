import { StudyItem } from '@/app/components/molecules';
import { useLocalStorage } from '@/app/hooks/useLocalStorage';
import { useFilterStudies } from '@/app/hooks/useStudies';

const StudyItemTable = ({
  category,
  search,
}: {
  category: string;
  search: string;
}) => {
  const { data, isLoading } = useFilterStudies({ category, search });
  const { storedValue, addValue, removeValue } = useLocalStorage('myStudy');

  if (isLoading) return <div>Loading</div>;
  return (
    <div>
      {data?.payload.map((elem) => {
        return (
          <StudyItem
            key={elem.id}
            data={elem}
            storedValue={storedValue}
            addValue={addValue}
            removeValue={removeValue}
          />
        );
      })}
    </div>
  );
};

export default StudyItemTable;
