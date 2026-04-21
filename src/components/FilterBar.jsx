export function FilterBar({ filters, options, onChange }) {
  const fields = [
    { key: 'bucket', label: 'Bucket' },
    { key: 'owner', label: 'Owner' },
    { key: 'priority', label: 'Priority' },
  ]

  return (
    <div className="grid gap-3 rounded-2xl border border-ops-border bg-ops-panel p-4 shadow-panel md:grid-cols-3">
      {fields.map((field) => (
        <label key={field.key} className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-ops-muted">{field.label}</span>
          <select
            value={filters[field.key]}
            onChange={(event) => onChange(field.key, event.target.value)}
            className="w-full rounded-xl border border-ops-border bg-slate-950 px-3 py-2 text-sm text-ops-text outline-none transition focus:border-sky-500"
          >
            {options[field.key].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </label>
      ))}
    </div>
  )
}
