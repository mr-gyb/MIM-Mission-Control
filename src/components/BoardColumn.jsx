import { TaskCard } from './TaskCard'

export function BoardColumn({ column, tasks }) {
  return (
    <section className="min-w-[280px] rounded-2xl border border-ops-border bg-ops-panel p-4 shadow-panel">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">{column.label}</h3>
        <span className="rounded-full border border-ops-border px-2 py-1 text-xs text-ops-muted">{tasks.length}</span>
      </div>

      <div className="space-y-3">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <div className="rounded-2xl border border-dashed border-ops-border px-4 py-8 text-center text-sm text-ops-muted">
            No tasks in this lane.
          </div>
        )}
      </div>
    </section>
  )
}
