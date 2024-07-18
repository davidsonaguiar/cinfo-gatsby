import React from "react";
import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {

  const classNameMerge = "w-full max-w-6xl mx-auto px-6 " + (className ? className : "");

  return (
      <div className={classNameMerge}>
        {children}
      </div>
  );
}