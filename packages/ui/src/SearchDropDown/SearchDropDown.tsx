import { createContext, useContext, useState } from "react";
import { css } from "@emotion/react";

interface DropDownContextType {
  isExist: boolean;
  setIsExist: (v: boolean) => void;
  showList: boolean;
  setShowList: (v: boolean) => void;
}

const DropDownContext = createContext<DropDownContextType | null>(null);

function useDropDownContext() {
  const ctx = useContext(DropDownContext);
  if (!ctx)
    throw new Error(
      "SearchDropDown.* components must be used inside <SearchDropDown>"
    );
  return ctx;
}

export function SearchDropDown({ children }: { children: React.ReactNode }) {
  const [showList, setShowList] = useState(false);
  const [isExist, setIsExist] = useState(false);

  return (
    <DropDownContext.Provider
      value={{ isExist, setIsExist, showList, setShowList }}
    >
      <div
        css={css`
          position: relative;
          width: 100%;
        `}
      >
        {children}
      </div>
    </DropDownContext.Provider>
  );
}

/* ------------------------------------------
   Input Slot
------------------------------------------- */
SearchDropDown.Input = function Input({
  children,
}: {
  children: (ctx: DropDownContextType) => React.ReactNode;
}) {
  const ctx = useDropDownContext();

  return (
    <div
      css={css`
        position: relative;
        width: 100%;
      `}
    >
      {children(ctx)}
    </div>
  );
};

/* ------------------------------------------
   Dropdown Slot
------------------------------------------- */
SearchDropDown.Dropdown = function Dropdown({
  children,
}: {
  children: (ctx: DropDownContextType) => React.ReactNode;
}) {
  const ctx = useDropDownContext();

  return (
    ctx.showList && (
      <div
        css={css`
          position: absolute;
          width: 100%;
          left: 0;
          visibility: ${ctx.isExist ? "visible" : "hidden"};
          border-radius: 0.375rem;
          background: var(--color-background-default);
          overflow: hidden;
          box-shadow: 0 10px 25px -2px rgba(0, 0, 0, 0.15);
          z-index:10;
        `}
      >
        {children(ctx)}
      </div>
    )
  );
};
