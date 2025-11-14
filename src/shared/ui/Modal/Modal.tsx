import { PortalConsumer } from "@/app/providers/PortalProvider";
import { useOverlay } from "@/shared/model/useOverlay";
import { ReactNode } from "react";

export function Modal({ children }: { children: ReactNode }) {
  const { close } = useOverlay();
  return (
    <PortalConsumer>
      <div
        className="fixed inset-0 bg-[var(--color-background-modal)]/60 flex items-center justify-center backdrop-blur-[2px]"
        onClick={close}
      >
        <div className="bg-white p-6 rounded-2xl shadow-xl">{children}</div>
      </div>
    </PortalConsumer>
  );
}
