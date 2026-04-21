export const BOARD_COLUMNS = [
  { key: 'todo', label: 'To Do' },
  { key: 'in-progress', label: 'In Progress' },
  { key: 'waiting', label: 'Waiting' },
  { key: 'done', label: 'Done' },
]

export const PRIORITY_STYLES = {
  P0: 'text-rose-300 border-rose-500/30 bg-rose-500/10',
  P1: 'text-amber-300 border-amber-500/30 bg-amber-500/10',
  P2: 'text-sky-300 border-sky-500/30 bg-sky-500/10',
}

export function groupTasks(tasks) {
  return BOARD_COLUMNS.reduce((acc, column) => {
    acc[column.key] = tasks.filter((task) => task.status === column.key)
    return acc
  }, {})
}

export function uniqueValues(tasks, key) {
  return ['All', ...new Set(tasks.map((task) => task[key]))]
}
