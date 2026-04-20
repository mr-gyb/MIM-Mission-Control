export function AgentCard({ agent }) {
  const statusTone = {
    online: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    watching: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
    idle: 'border-slate-500/30 bg-slate-500/10 text-slate-300',
  }

  return (
    <article className="rounded-2xl border border-ops-border bg-ops-panel p-5 shadow-panel">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{agent.name}</h3>
          <p className="mt-1 text-sm text-ops-muted">{agent.role}</p>
        </div>
        <span className={`rounded-full border px-3 py-1 text-xs font-medium ${statusTone[agent.status] || statusTone.idle}`}>
          {agent.status}
        </span>
      </div>

      <dl className="mt-5 space-y-3 text-sm">
        <div>
          <dt className="text-ops-muted">Focus</dt>
          <dd className="text-ops-text">{agent.focus}</dd>
        </div>
        <div>
          <dt className="text-ops-muted">Last check-in</dt>
          <dd className="text-ops-text">{agent.lastCheckIn}</dd>
        </div>
      </dl>
    </article>
  )
}
