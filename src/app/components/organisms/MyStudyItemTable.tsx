import { useMemo } from 'react';

import { StudyItem } from '@/app/components/molecules';
import { useLocalStorage } from '@/app/hooks/useLocalStorage';
import { useStudies } from '@/app/hooks/useStudies';

const MyStudyItemTable = () => {
  const { data, isLoading } = useStudies();
  const { storedValue, addValue, removeValue } = useLocalStorage('myStudy');

  const myStudy = useMemo(() => {
    if (storedValue) {
      return data?.payload.filter((item) =>
        Object.keys(storedValue).some((value) => value === `${item.id}`),
      );
    }
  }, [data?.payload, storedValue]);

  if (isLoading) return <div>Loading</div>;
  if (!myStudy) return <div>데이터가 없습니다.</div>;
  return (
    <div>
      {myStudy.map((elem) => {
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

export default MyStudyItemTable;
