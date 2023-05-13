import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <Link href="/">메인</Link>
      <Link href={`/class/${1}`}>클래스 상세</Link>
      <Link href="/class/list">클래스 리스트</Link>
      <Link href="/profile">마이페이지</Link>
    </div>
  );
};

export default NavBar;
