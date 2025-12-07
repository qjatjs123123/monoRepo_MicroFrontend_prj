import { useEffect, useState } from "react";
import { subscribeTitle } from "@monorepo/core";
import { useLocation } from "react-router-dom";

const TITLE_MAP: Record<string, string> = {
  "/": "관심기업 관리 서비스",
  "/viewer": "기업 재무제표 조회",
};

export function useTitleSync() {
  const { pathname } = useLocation();

  const [title, setTitle] = useState(() => TITLE_MAP[pathname] || "");

  useEffect(() => {
    setTitle(TITLE_MAP[pathname] || "");
  }, [pathname]);

  useEffect(() => {
    const unsubscribe = subscribeTitle((newTitle) => {
      setTitle(newTitle);
    });

    return () => unsubscribe();
  }, []);

  return title;
}
