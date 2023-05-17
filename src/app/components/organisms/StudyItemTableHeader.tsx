import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import StudyItemTable from '@/app/components/organisms/StudyItemTable';

const StudyItemTableHeader = () => {
  const [category, setCategory] = useState('');
  const [keyword, setKeyword] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    timer = setTimeout(() => {
      setSearch(keyword);
    }, 250);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [keyword]);

  return (
    <>
      <SearchItemContainer>
        <div>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="">전체</option>
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
      <StudyItemTable category={category} search={search} />
    </>
  );
};

export default StudyItemTableHeader;

const SearchItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
