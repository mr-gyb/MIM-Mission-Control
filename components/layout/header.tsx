import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-white/10 bg-[#111827]/80 px-5 py-4 backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-slate-400">Operations dashboard</p>
          <h2 className="text-2xl font-semibold text-white">Mission Control v1</h2>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-400 md:w-72">
          <Search className="h-4 w-4" />
          <span>Search coming soon</span>
        </div>
      </div>
    </header>
  );
}
