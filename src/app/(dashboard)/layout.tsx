import Header from "@/components/header/Header";
import { Sidebar } from "@/components/sidebar/Sidebar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="w-full mt-[100px] p-8">
            {children}
        </div>
      </div>
    </>
  );
}

export default layout;
