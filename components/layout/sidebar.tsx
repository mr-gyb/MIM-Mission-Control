import Link from "next/link";
import { LayoutDashboard, KanbanSquare, Users2 } from "lucide-react";

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/board", label: "Task Board", icon: KanbanSquare },
  { href: "/agents", label: "Agents", icon: Users2 },
];

export function Sidebar() {
  return (
    <aside className="w-full border-b border-white/10 bg-[#0b1220] md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <div className="border-b border-white/10 px-5 py-5">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyan-400">
          Mateos in Motion
        </p>
        <h1 className="mt-2 text-xl font-semibold text-white">Mission Control</h1>
      </div>

      <nav className="flex gap-2 overflow-x-auto px-3 py-3 md:flex-col md:overflow-visible">
        {navItems.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className="flex min-w-fit items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
