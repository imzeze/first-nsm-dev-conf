import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { StudyItem } from '@/app/components/molecules';
import { useLocalStorage } from '@/app/hooks/useLocalStorage';
import { useFilterStudies } from '@/app/hooks/useStudies';
import { MyStudyCount } from '@/app/recoil/atom';

const StudyItemTable = () => {
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  const setMyStudyCount = useSetRecoilState(MyStudyCount);
  const { data, isLoading } = useFilterStudies({ category, keyword });
  const { storedValue, addValue, removeValue } = useLocalStorage('myStudy');

  useEffect(() => {
    if (storedValue) setMyStudyCount(Object.keys(storedValue).length);
  }, [storedValue, setMyStudyCount]);

  if (isLoading) return <div>Loading</div>;
  return (
    <>
      <SearchItemContainer>
        <div>
          <select
            defaultValue={''}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>전체</option>
            <option value="FE">FE</option>
            <option value="BE">BE</option>
            <option value="APP">APP</option>
          </select>
        </div>
        <div>
          <input type="text" onChange={(e) => setKeyword(e.target.value)} />
        </div>
      </SearchItemContainer>
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
    </>
  );
};

export default StudyItemTable;

const SearchItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
