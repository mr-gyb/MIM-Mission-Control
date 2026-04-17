import { Shell } from "@/components/layout/shell";

const stats = [
  { label: "Open Tasks", value: "24" },
  { label: "In Progress", value: "8" },
  { label: "Waiting", value: "5" },
  { label: "Done This Week", value: "13" },
];

export default function HomePage() {
  return (
    <Shell>
      <section className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-3 text-3xl font-semibold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Primary view</p>
                <h3 className="text-xl font-semibold text-white">Operations snapshot</h3>
              </div>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                UI shell
              </span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-[#0f172a] p-4">
                <p className="text-sm text-slate-400">Business buckets</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  <li>Daily Operations</li>
                  <li>Financial System</li>
                  <li>People / HR</li>
                  <li>Growth / Sales</li>
                  <li>Infrastructure / Compliance</li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#0f172a] p-4">
                <p className="text-sm text-slate-400">What this shell includes</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  <li>Dark responsive layout</li>
                  <li>Sidebar navigation</li>
                  <li>Top header</li>
                  <li>Dashboard home</li>
                  <li>Empty board and agents pages</li>
                </ul>
              </div>
            </div>
          </section>

          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Activity feed</p>
            <h3 className="mt-1 text-xl font-semibold text-white">Recent movement</h3>
            <div className="mt-5 space-y-3">
              {["Board shell created", "Agent page ready", "Dashboard home ready"].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-[#0f172a] px-4 py-3 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </Shell>
  );
}
