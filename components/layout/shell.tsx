import { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100">
      <div className="md:flex md:min-h-screen">
        <Sidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <Header />
          <main className="flex-1 p-5 md:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
