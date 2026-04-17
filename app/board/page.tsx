import { Shell } from "@/components/layout/shell";

const columns = ["To Do", "In Progress", "Waiting", "Done"];

export default function BoardPage() {
  return (
    <Shell>
      <section className="space-y-6">
        <div>
          <p className="text-sm text-slate-400">Task board</p>
          <h2 className="text-2xl font-semibold text-white">Board shell</h2>
        </div>

        <div className="grid gap-4 xl:grid-cols-4">
          {columns.map((column) => (
            <div key={column} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                  {column}
                </h3>
                <span className="rounded-full bg-white/10 px-2 py-1 text-xs text-slate-400">0</span>
              </div>
              <div className="mt-4 rounded-xl border border-dashed border-white/10 bg-[#0f172a] p-4 text-sm text-slate-500">
                Empty state for v1 shell
              </div>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
