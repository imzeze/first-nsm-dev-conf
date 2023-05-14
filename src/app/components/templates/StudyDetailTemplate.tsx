/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { format, isSameDay, isSameMonth, isSameYear } from 'date-fns';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { Button } from '@/app/components/atoms';
import { useStudyItem } from '@/app/hooks/useStudyItem';

const StudyDetailTemplate = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useStudyItem(String(id));
  const payload = data?.payload;

  const time = useMemo(() => {
    if (!payload) return '';

    const startDate = new Date(payload.startDateTime);
    const endDate = new Date(payload.endDateTime);
    if (isSameDay(startDate, endDate)) {
      return `${format(startDate, 'MM.dd HH:mm')} ~ ${format(
        endDate,
        'HH:mm',
      )}`;
    } else if (
      isSameMonth(startDate, endDate) ||
      isSameYear(startDate, endDate)
    ) {
      return `${format(startDate, 'MM.dd HH:mm')} ~ ${format(
        endDate,
        'MM.dd HH:mm',
      )}`;
    }
    return `${format(startDate, 'YYYY. MM.dd HH:mm')} ~ ${format(
      endDate,
      'YYYY. MM.dd HH:mm',
    )}`;
  }, [payload]);

  if (isLoading) return <div>Loading</div>;
  return (
    <ListContainer>
      <h1>
        <p
          css={css`
            color: var(--pink);
          `}
        >
          {payload?.category}
        </p>
        <p
          css={css`
            color: var(--white);
          `}
        >
          {payload?.name}
        </p>
      </h1>
      <ButtonContainer>
        <Button.PinkPrimary size="big" space="basic" onClick={(e) => {}}>
          강의 담기
        </Button.PinkPrimary>
      </ButtonContainer>
      <div>
        <StudyDetailItemContainer>
          <CategoryText>소개</CategoryText>
          <div>{payload?.description}</div>
        </StudyDetailItemContainer>
        <StudyDetailItemContainer>
          <CategoryText>장소</CategoryText>
          <div>{payload?.location}</div>
        </StudyDetailItemContainer>
        <StudyDetailItemContainer>
          <CategoryText>시간</CategoryText>
          <div>{time}</div>
        </StudyDetailItemContainer>
        <StudyDetailItemContainer>
          <CategoryText>강사</CategoryText>
          <div>{payload?.speaker}</div>
        </StudyDetailItemContainer>
        <StudyDetailItemContainer>
          <CategoryText>기술스택</CategoryText>
          <div>{payload?.stack.join(', ')}</div>
        </StudyDetailItemContainer>
      </div>
    </ListContainer>
  );
};

export default StudyDetailTemplate;

const ListContainer = styled.div`
  padding: 60px 0;
`;

const ButtonContainer = styled.div`
  margin: 60px 0 12px;
`;

const StudyDetailItemContainer = styled.div`
  display: flex;
  align-items: flex-end;
  border-bottom: 1px dashed var(--white);
  padding: 10px;
  margin-top: 6px;
  color: var(--white);
  font-weight: 500px;
  font-size: 16px;
  line-height: 1.4;
`;

const CategoryText = styled.div`
  width: 100px;
  font-weight: 700px;
`;
