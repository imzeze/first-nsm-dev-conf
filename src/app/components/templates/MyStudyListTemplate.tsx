/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';

import MyStudyItemTable from '@/app/components/organisms/MyStudyItemTable';
import { MyStudy } from '@/app/recoil/atom';

const MyStudyListTemplate = () => {
  const myStudy = useRecoilValue(MyStudy);
  const myStudyCount = myStudy ? Object.keys(myStudy).length : 0;

  return (
    <ListContainer>
      <h1>
        <p
          css={css`
            color: var(--white);
          `}
        >
          MY
        </p>
        <p
          css={css`
            color: var(--pink);
          `}
        >
          CONF &#123;{myStudyCount}&#125;
        </p>
      </h1>
      <div
        css={css`
          margin-top: 60px;
        `}
      >
        <MyStudyItemTable />
      </div>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  padding: 60px 0;
`;

export default MyStudyListTemplate;
