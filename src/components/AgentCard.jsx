const statusTone = {
  active: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  paused: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  idle: 'border-slate-500/30 bg-slate-500/10 text-slate-300',
  blocked: 'border-rose-500/30 bg-rose-500/10 text-rose-300',
}

const taskStateTone = {
  in_progress: 'border-sky-500/30 bg-sky-500/10 text-sky-300',
  blocked: 'border-rose-500/30 bg-rose-500/10 text-rose-300',
  queued: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  done: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
}

const agentTone = {
  'Bread Master': 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  Barry: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  Atlas: 'border-violet-500/30 bg-violet-500/10 text-violet-300',
}

function formatLabel(value) {
  return value.replace(/_/g, ' ')
}

function formatTimestamp(value) {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/New_York',
  }).format(date)
}

export function AgentCard({ agent }) {
  return (
    <article className="rounded-2xl border border-ops-border bg-ops-panel p-4 shadow-panel">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xl">{agent.emoji}</span>
            <h3 className="truncate text-base font-semibold text-white">{agent.name}</h3>
          </div>
          <p className="mt-1 text-sm text-ops-muted">{agent.role}</p>
        </div>
        <span className={`rounded-full border px-2 py-1 text-xs font-medium ${statusTone[agent.status] || statusTone.idle}`}>
          {agent.status}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className={`rounded-full border px-2 py-1 text-xs font-medium ${agentTone[agent.name] || 'border-ops-border bg-slate-950/70 text-slate-300'}`}>
          {agent.label}
        </span>
        <span className={`rounded-full border px-2 py-1 text-xs font-medium ${taskStateTone[agent.taskState] || 'border-ops-border bg-slate-950/70 text-slate-300'}`}>
          {formatLabel(agent.taskState)}
        </span>
      </div>

      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="text-xs uppercase tracking-[0.18em] text-ops-muted">Current task</dt>
          <dd className="mt-1 text-sm text-white">{agent.currentTask}</dd>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-ops-muted">Task state</dt>
            <dd className="mt-1 text-ops-text">{formatLabel(agent.taskState)}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.18em] text-ops-muted">Last updated</dt>
            <dd className="mt-1 text-ops-text">{formatTimestamp(agent.lastUpdated)}</dd>
          </div>
        </div>
        {agent.blocker ? (
          <div className="rounded-xl border border-rose-500/20 bg-rose-500/10 px-3 py-2">
            <dt className="text-xs uppercase tracking-[0.18em] text-rose-300">Blocker</dt>
            <dd className="mt-1 text-sm text-rose-100">{agent.blocker}</dd>
          </div>
        ) : null}
      </dl>
    </article>
  )
}
