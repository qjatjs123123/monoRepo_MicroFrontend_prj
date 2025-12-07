import { Text } from "@monorepo/ui";
import Logo from "@monorepo/ui/public/logo.png";
import { Link, useLocation } from "react-router-dom";
import "./global.css";
import { setTitle } from "@monorepo/core";

export default function Headers() {
  const { pathname } = useLocation();
  const getWeight = (path: string) => (pathname === path ? "bold" : "normal");
  const handleClick = (title: string) => {
    setTitle(title);
  };

  return (
    <div className="header:flex header:justify-between header:w-full header:py-5">
      <img src={Logo} alt="회사 로고" width={117} height={24} />

      <div className="header:flex header:gap-5">
        <Link to="/" onClick={() => handleClick("관심기업 관리 서비스")}>
          <Text type="body" weight={getWeight("/")}>
            일반과제
          </Text>
        </Link>

        <Link to="/viewer" onClick={() => handleClick("기업 재무제표 조회")}>
          <Text type="body" weight={getWeight("/viewer")}>
            산업 전문화 과제
          </Text>
        </Link>
      </div>
    </div>
  );
}
