const navItems = [
  { id: 'board', label: 'Task Board', meta: 'Core ops' },
  { id: 'agents', label: 'Agents', meta: 'Coverage' },
  { id: 'activity', label: 'Activity Feed', meta: 'Shell' },
]

export function Sidebar({ view, onChange }) {
  return (
    <div className="flex h-full flex-col p-4 sm:p-5">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.3em] text-sky-300">Mission Control v1</p>
        <h1 className="mt-2 text-2xl font-semibold text-white">Operations shell</h1>
        <p className="mt-2 text-sm text-ops-muted">Static React frontend, local JSON data, ready for Netlify.</p>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const active = item.id === view
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onChange(item.id)}
              className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                active
                  ? 'border-sky-500/40 bg-sky-500/10 text-white shadow-panel'
                  : 'border-ops-border bg-transparent text-ops-text hover:border-slate-600 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-medium">{item.label}</span>
                <span className="text-xs text-ops-muted">{item.meta}</span>
              </div>
            </button>
          )
        })}
      </nav>

      <div className="mt-auto rounded-2xl border border-ops-border bg-ops-panelAlt p-4">
        <p className="text-xs uppercase tracking-[0.25em] text-ops-muted">Deployment</p>
        <p className="mt-2 text-sm text-ops-text">Build output is static, so Netlify can publish directly from <span className="font-mono text-sky-300">dist/</span>.</p>
      </div>
    </div>
  )
}
