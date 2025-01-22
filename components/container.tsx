import React from "react";
import { cn } from "@/lib/utils";

interface Component {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Component) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto py-4 px-4 ", className)}>
      {children}
    </div>
  );
};

export default Container;
