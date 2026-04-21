import { PRIORITY_STYLES } from '../lib/taskBoard'

export function TaskCard({ task }) {
  return (
    <article className="rounded-2xl border border-ops-border bg-slate-950/80 p-4 shadow-panel">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-ops-muted">{task.id}</p>
          <h4 className="mt-2 text-sm font-semibold text-white">{task.title}</h4>
        </div>
        <span className={`rounded-full border px-2 py-1 text-xs font-medium ${PRIORITY_STYLES[task.priority] || PRIORITY_STYLES.P2}`}>
          {task.priority}
        </span>
      </div>

      <div className="mt-4 space-y-2 text-sm text-ops-muted">
        <p><span className="text-ops-text">Bucket:</span> {task.bucket}</p>
        <p><span className="text-ops-text">Owner:</span> {task.owner}</p>
        <p><span className="text-ops-text">Updated:</span> {task.updatedAt}</p>
      </div>

      <p className="mt-4 rounded-xl border border-ops-border bg-ops-panel px-3 py-2 text-sm text-slate-300">{task.notes}</p>
    </article>
  )
}
