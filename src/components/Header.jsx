export function Header({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div>
        <h2 className="text-xl font-semibold text-white sm:text-2xl">{title}</h2>
        <p className="mt-1 text-sm text-ops-muted">{subtitle}</p>
      </div>
      <div className="flex items-center gap-3 text-xs text-ops-muted">
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300">Static frontend</span>
        <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-sky-300">Local JSON</span>
      </div>
    </div>
  )
}
