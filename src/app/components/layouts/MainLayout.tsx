import { NavBar } from "@/app/components/molecules";
import { LayoutProps } from "@/app/types/LayoutProps";

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <p>헤더</p>
      <NavBar />
      {children}
      <p>푸터</p>
    </>
  );
};

export default MainLayout;
