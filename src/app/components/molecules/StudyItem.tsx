/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/app/components/atoms';
import { StudyItemProps } from '@/app/types/StudyItemProps';

const StudyItem = ({
  data,
  storedValue,
  addValue,
  removeValue,
}: StudyItemProps) => {
  const [isMyStudy, setMyStudy] = useState(
    storedValue &&
      Object.keys(storedValue).findIndex((id) => id === `${data.id}`) > 0,
  );

  return (
    <Link href={`/study/item?id=${data.id}`}>
      <StudyItemContainer>
        <TextContainer>
          <TitleText>
            <h2>
              <span
                css={css`
                  color: var(--pink);
                `}
              >
                {data.category}&nbsp;
              </span>
              <span
                css={css`
                  color: var(--white);
                `}
              >
                {data.name}
              </span>
            </h2>
          </TitleText>
          <DescriptionText>{data.description}</DescriptionText>
        </TextContainer>
        <div>
          <Button.PinkPrimary
            size="small"
            space="square"
            onClick={(e) => {
              e.preventDefault();

              if (isMyStudy) {
                removeValue(`${data.id}`);
              } else {
                addValue({ [`${data.id}`]: true });
              }
              setMyStudy(!isMyStudy);
            }}
          >
            <Image
              src={isMyStudy ? '/images/minus.svg' : '/images/plus.png'}
              alt="plus"
              width={14}
              height={14}
            />
          </Button.PinkPrimary>
        </div>
      </StudyItemContainer>
    </Link>
  );
};

export default StudyItem;

const StudyItemContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1px dashed var(--white);
  padding: 10px;
  margin-top: 6px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 20px;
`;

const TitleText = styled.div`
  width: 500px;
`;

const DescriptionText = styled.div`
  color: var(--white);
  word-break: keep-all;
  flex: 1;
`;
