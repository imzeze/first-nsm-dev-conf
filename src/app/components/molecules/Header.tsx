import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import { MyStudy } from '@/app/recoil/atom';

const Header = () => {
  const myStudy = useRecoilValue(MyStudy);
  const myStudyCount = myStudy ? Object.keys(myStudy).length : 0;

  return (
    <div>
      <HeaderTemplate>
        <Image src="/images/logo.png" width={72} height={72} alt="logo" />
        <LinkTemplate>
          <Link href="/study/item?id=1">
            <CustomLink type="pink">
              내 강의 &#123;{myStudyCount}
              &#125;
            </CustomLink>
          </Link>
          <Link href="/study/list">
            <CustomLink type="white">강의 목록</CustomLink>
          </Link>
        </LinkTemplate>
      </HeaderTemplate>
      <Line />
    </div>
  );
};

export default Header;

const HeaderTemplate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px;
`;

const LinkTemplate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const CustomLink = styled.div<{ type: 'pink' | 'white' }>`
  background: ${({ type }) => (type === 'pink' ? 'var(--pink)' : '')};
  border: 2px solid
    ${({ type }) => (type === 'pink' ? 'var(--pink)' : 'var(--white)')};
  color: white;
  padding: 10px 16px;
`;

const Line = styled.hr`
  background: var(--pink);
  height: 1px;
`;
