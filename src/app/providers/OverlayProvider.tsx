"use client";
import { OverlayContext } from "@/shared/model/useOverlay";
import React, { useState, useCallback, ReactNode, ComponentType } from "react";

interface OverlayProviderProps {
  children: ReactNode;
}

export function OverlayProvider({ children }: OverlayProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [Component, setComponent] = useState<ComponentType | null>(null);

  const open = useCallback((Comp: ComponentType) => {
    setComponent(() => Comp);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setComponent(null);
  }, []);

  return (
    <OverlayContext.Provider value={{ isOpen, open, close }}>
      {children}

      {isOpen && (
        <div className="fixed inset-0 bg-[var(--color-background-modal)]/60 flex items-center justify-center backdrop-blur-[2px]">
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            {Component && <Component />}
          </div>
        </div>
      )}
    </OverlayContext.Provider>
  );
}
