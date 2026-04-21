import { useMemo, useState } from 'react'
import { Layout } from './components/Layout'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { TaskBoardView } from './views/TaskBoardView'
import { AgentsView } from './views/AgentsView'
import { ActivityView } from './views/ActivityView'

const viewMeta = {
  board: {
    title: 'Task Board',
    subtitle: 'Trello-style operations board with local filters and dark ops styling.',
  },
  agents: {
    title: 'Agents',
    subtitle: 'Compact agent coverage view with filters, task state, and blockers.',
  },
  activity: {
    title: 'Activity Feed',
    subtitle: 'Placeholder shell for operational events and deployment notices.',
  },
}

export default function App() {
  const [view, setView] = useState('board')
  const [filters, setFilters] = useState({
    bucket: 'All',
    owner: 'All',
    priority: 'All',
  })

  const content = useMemo(() => {
    if (view === 'agents') return <AgentsView />
    if (view === 'activity') return <ActivityView />

    return <TaskBoardView filters={filters} onFilterChange={(key, value) => setFilters((current) => ({ ...current, [key]: value }))} />
  }, [filters, view])

  return (
    <Layout
      sidebar={<Sidebar view={view} onChange={setView} />}
      header={<Header title={viewMeta[view].title} subtitle={viewMeta[view].subtitle} />}
    >
      {content}
    </Layout>
  )
}
