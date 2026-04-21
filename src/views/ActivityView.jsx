const events = [
  {
    title: 'Route assignment sync',
    detail: 'Shell placeholder for live operational events.',
  },
  {
    title: 'Agent check-ins',
    detail: 'Future home for background worker and handoff status.',
  },
  {
    title: 'Deployment notices',
    detail: 'Static frontend today, activity stream later.',
  },
]

export function ActivityView() {
  return (
    <section className="rounded-2xl border border-ops-border bg-ops-panel p-5 shadow-panel">
      <p className="text-xs uppercase tracking-[0.2em] text-ops-muted">Activity feed shell</p>
      <div className="mt-4 space-y-3">
        {events.map((event) => (
          <div key={event.title} className="rounded-xl border border-ops-border bg-slate-950/70 p-4">
            <h3 className="text-sm font-semibold text-white">{event.title}</h3>
            <p className="mt-1 text-sm text-ops-muted">{event.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
