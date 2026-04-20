import agents from '../data/agents.json'
import { AgentCard } from '../components/AgentCard'

const activityItems = [
  'Dispatch Monitor flagged a route staffing risk.',
  'Finance Watch is reviewing fuel spend variance.',
  'Growth Queue is waiting for a refreshed lead export.',
]

export function AgentsView() {
  return (
    <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
      <section className="space-y-4">
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>

      <aside className="rounded-2xl border border-ops-border bg-ops-panel p-4 shadow-panel">
        <p className="text-xs uppercase tracking-[0.2em] text-ops-muted">Activity feed shell</p>
        <div className="mt-4 space-y-3">
          {activityItems.map((item) => (
            <div key={item} className="rounded-xl border border-ops-border bg-slate-950/70 p-3 text-sm text-slate-300">
              {item}
            </div>
          ))}
        </div>
      </aside>
    </div>
  )
}
