/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const MainTemplate = () => {
  return (
    <TextContainer>
      <h1>
        <p
          css={css`
            color: var(--white);
          `}
        >
          MEET
        </p>
        <p
          css={css`
            color: var(--pink);
          `}
        >
          NEW
        </p>
        <p
          css={css`
            color: var(--white);
          `}
        >
          DEVELOP
        </p>
      </h1>
      <InfoTextContainer>
        <h3>
          <p>NSM</p>
          <p>23.05.14 16:00</p>
          <br />
          <p>상금 100,000원</p>
        </h3>
      </InfoTextContainer>
    </TextContainer>
  );
};

const TextContainer = styled.div`
  padding: 100px 0;
`;

const InfoTextContainer = styled.div`
  margin-top: 72px;
  color: var(--white);
`;

export default MainTemplate;
