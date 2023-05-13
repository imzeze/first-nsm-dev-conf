import { Button } from "@/app/components/atoms";
import { MainLayout } from "@/app/components/layouts";

const MainPage = () => {
  return (
    <>
      <Button.Red size="small">1</Button.Red>
      <Button.Blue size="small">2</Button.Blue>
    </>
  );
};

MainPage.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default MainPage;
