import { ReactNode } from "react";
import "./Layout.css";

interface ContainerProps {
  children: ReactNode;
}

export function Layout({ children }: ContainerProps) {
  return <div className="container">{children}</div>;
}
