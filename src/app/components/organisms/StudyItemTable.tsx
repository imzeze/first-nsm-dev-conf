import styled from '@emotion/styled';
import { useState } from 'react';

import { StudyItem } from '@/app/components/molecules';
import { useLocalStorage } from '@/app/hooks/useLocalStorage';
import { useFilterStudies } from '@/app/hooks/useStudies';

const StudyItemTable = () => {
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  const { data, isLoading } = useFilterStudies({ category, search: keyword });
  const { storedValue, addValue, removeValue } = useLocalStorage('myStudy');

  if (isLoading) return <div>Loading</div>;
  return (
    <>
      <SearchItemContainer>
        <div>
          <select
            value={category}
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
          <input
            value={keyword}
            type="text"
            onChange={(e) => setKeyword(e.target.value)}
          />
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
