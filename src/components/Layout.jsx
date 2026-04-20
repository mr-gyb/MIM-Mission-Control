export function Layout({ sidebar, header, children }) {
  return (
    <div className="min-h-screen bg-ops-bg text-ops-text">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col lg:flex-row">
        <aside className="border-b border-ops-border bg-ops-panel/90 lg:min-h-screen lg:w-72 lg:border-b-0 lg:border-r">
          {sidebar}
        </aside>
        <div className="flex min-h-screen flex-1 flex-col">
          <header className="border-b border-ops-border bg-ops-panel/40 backdrop-blur">
            {header}
          </header>
          <main className="flex-1 p-4 sm:p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
