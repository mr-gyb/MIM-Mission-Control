import { Shell } from "@/components/layout/shell";

const agents = ["Operations", "Finance", "People", "Growth", "Infrastructure"];

export default function AgentsPage() {
  return (
    <Shell>
      <section className="space-y-6">
        <div>
          <p className="text-sm text-slate-400">Agent overview</p>
          <h2 className="text-2xl font-semibold text-white">Agents shell</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {agents.map((agent) => (
            <div key={agent} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{agent}</h3>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Ready
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-400">
                Empty overview card for the Mission Control v1 shell.
              </p>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
