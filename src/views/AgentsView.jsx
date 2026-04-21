import { useMemo, useState } from 'react'
import agents from '../data/agents.json'
import { AgentCard } from '../components/AgentCard'

function uniqueValues(items, key) {
  return ['All', ...new Set(items.map((item) => item[key]))]
}

function formatLabel(value) {
  return value.replace(/_/g, ' ')
}

export function AgentsView() {
  const [filters, setFilters] = useState({
    status: 'All',
    role: 'All',
    taskState: 'All',
  })

  const filterOptions = useMemo(
    () => ({
      status: uniqueValues(agents, 'status'),
      role: uniqueValues(agents, 'role'),
      taskState: uniqueValues(agents, 'taskState'),
    }),
    [],
  )

  const filteredAgents = useMemo(
    () =>
      agents.filter((agent) => {
        const statusMatch = filters.status === 'All' || agent.status === filters.status
        const roleMatch = filters.role === 'All' || agent.role === filters.role
        const taskStateMatch = filters.taskState === 'All' || agent.taskState === filters.taskState

        return statusMatch && roleMatch && taskStateMatch
      }),
    [filters],
  )

  const summary = useMemo(
    () => ({
      activeAgents: filteredAgents.filter((agent) => agent.status === 'active').length,
      inProgressTasks: filteredAgents.filter((agent) => agent.taskState === 'in_progress').length,
      blockedAgents: filteredAgents.filter((agent) => agent.blocker || agent.taskState === 'blocked' || agent.status === 'blocked').length,
    }),
    [filteredAgents],
  )

  const fields = [
    { key: 'status', label: 'Status' },
    { key: 'role', label: 'Role' },
    { key: 'taskState', label: 'Task state' },
  ]

  return (
    <div className="space-y-4">
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
        <section className="grid gap-3 rounded-2xl border border-ops-border bg-ops-panel p-4 shadow-panel md:grid-cols-3">
          {fields.map((field) => (
            <label key={field.key} className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.2em] text-ops-muted">{field.label}</span>
              <select
                value={filters[field.key]}
                onChange={(event) => setFilters((current) => ({ ...current, [field.key]: event.target.value }))}
                className="w-full rounded-xl border border-ops-border bg-slate-950 px-3 py-2 text-sm text-ops-text outline-none transition focus:border-sky-500"
              >
                {filterOptions[field.key].map((value) => (
                  <option key={value} value={value}>
                    {field.key === 'taskState' && value !== 'All' ? formatLabel(value) : value}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </section>

        <section className="rounded-2xl border border-ops-border bg-ops-panel p-4 shadow-panel">
          <p className="text-xs uppercase tracking-[0.2em] text-ops-muted">Agents summary</p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-ops-border bg-slate-950/70 p-3">
              <p className="text-xs text-ops-muted">Active agents</p>
              <p className="mt-1 text-2xl font-semibold text-white">{summary.activeAgents}</p>
            </div>
            <div className="rounded-xl border border-ops-border bg-slate-950/70 p-3">
              <p className="text-xs text-ops-muted">In progress</p>
              <p className="mt-1 text-2xl font-semibold text-white">{summary.inProgressTasks}</p>
            </div>
            <div className="rounded-xl border border-ops-border bg-slate-950/70 p-3">
              <p className="text-xs text-ops-muted">Blocked</p>
              <p className="mt-1 text-2xl font-semibold text-white">{summary.blockedAgents}</p>
            </div>
          </div>
        </section>
      </div>

      <section className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {filteredAgents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </section>
    </div>
  )
}
