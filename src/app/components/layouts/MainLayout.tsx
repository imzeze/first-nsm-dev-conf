import styled from '@emotion/styled';

import { Header } from '@/app/components/molecules';
import { LayoutProps } from '@/app/types/LayoutProps';

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <LayoutTemplate>
      <Header />
      {children}
    </LayoutTemplate>
  );
};

export default MainLayout;

const LayoutTemplate = styled.div`
  background: var(--blue);
  width: 100vw;
  min-width: 1200px;
  height: 100%;
  min-height: 100vh;
  padding: 0 156px;
`;
