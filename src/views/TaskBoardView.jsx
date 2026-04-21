import tasks from '../data/tasks.json'
import { FilterBar } from '../components/FilterBar'
import { BoardColumn } from '../components/BoardColumn'
import { BOARD_COLUMNS, groupTasks, uniqueValues } from '../lib/taskBoard'

export function TaskBoardView({ filters, onFilterChange }) {
  const filteredTasks = tasks.filter((task) => {
    const bucketMatch = filters.bucket === 'All' || task.bucket === filters.bucket
    const ownerMatch = filters.owner === 'All' || task.owner === filters.owner
    const priorityMatch = filters.priority === 'All' || task.priority === filters.priority

    return bucketMatch && ownerMatch && priorityMatch
  })

  const groupedTasks = groupTasks(filteredTasks)
  const filterOptions = {
    bucket: uniqueValues(tasks, 'bucket'),
    owner: uniqueValues(tasks, 'owner'),
    priority: uniqueValues(tasks, 'priority'),
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
        <FilterBar filters={filters} options={filterOptions} onChange={onFilterChange} />
        <section className="rounded-2xl border border-ops-border bg-ops-panel p-4 shadow-panel">
          <p className="text-xs uppercase tracking-[0.2em] text-ops-muted">Board summary</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-ops-border bg-slate-950/70 p-3">
              <p className="text-xs text-ops-muted">Visible tasks</p>
              <p className="mt-1 text-2xl font-semibold text-white">{filteredTasks.length}</p>
            </div>
            <div className="rounded-xl border border-ops-border bg-slate-950/70 p-3">
              <p className="text-xs text-ops-muted">P0 tasks</p>
              <p className="mt-1 text-2xl font-semibold text-white">{filteredTasks.filter((task) => task.priority === 'P0').length}</p>
            </div>
          </div>
        </section>
      </div>

      <div className="grid gap-4 2xl:grid-cols-4 xl:grid-cols-2">
        {BOARD_COLUMNS.map((column) => (
          <BoardColumn key={column.key} column={column} tasks={groupedTasks[column.key] || []} />
        ))}
      </div>
    </div>
  )
}
