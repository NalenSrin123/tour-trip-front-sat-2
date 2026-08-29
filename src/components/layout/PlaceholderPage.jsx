import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'

export default function PlaceholderPage({ title, description, actionTo, actionLabel }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="bg-background text-on-background min-h-screen">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

      <main className="md:ml-sidebar-width p-4 md:p-lg">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-8 md:p-16 text-center">
            <h2 className="text-headline-xl text-on-surface mb-2">{title}</h2>
            <p className="text-body-lg text-on-surface-variant">
              {description ?? 'This section is coming soon.'}
            </p>
            {actionTo && (
              <Link
                to={actionTo}
                className="inline-block mt-6 px-4 py-2 rounded-lg bg-primary text-on-primary text-label-lg hover:bg-primary-container transition-colors"
              >
                {actionLabel ?? 'Go'}
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}