/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import StudyItemTableHeader from '@/app/components/organisms/StudyItemTableHeader';

const StudyListTemplate = () => {
  return (
    <ListContainer>
      <h1>
        <p
          css={css`
            color: var(--white);
          `}
        >
          CONF.
        </p>
        <p
          css={css`
            color: var(--pink);
          `}
        >
          LIST
        </p>
      </h1>
      <div
        css={css`
          margin-top: 60px;
        `}
      >
        <StudyItemTableHeader />
      </div>
    </ListContainer>
  );
};

export default StudyListTemplate;

const ListContainer = styled.div`
  padding: 60px 0;
`;
