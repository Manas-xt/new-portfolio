import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Contact from "./Contact";
export function BackgroundLinesDemo() {
  return (
    (<BackgroundLines className="flex items-center  relative justify-center w-full flex-col px-4">
      <Contact/>
    </BackgroundLines>)
  );
}
