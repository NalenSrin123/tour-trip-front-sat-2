import { useState } from 'react'
import AdminSidebar from '../../../components/layout/AdminSidebar'
import AdminHeader from '../../../components/layout/AdminHeader'

const navItems = [
  { label: 'General Settings', icon: 'settings', active: true },
  { label: 'Payment Settings', icon: 'payments', active: false },
  { label: 'Notification Settings', icon: 'notifications', active: false },
  { label: 'Booking Rules & Policies', icon: 'gavel', active: false },
]

export default function Setting() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="bg-[#f5f7fb] text-[#1f2937] min-h-screen">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

      <main className="md:ml-[240px] p-4 md:p-6 xl:p-8">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-6">
            <h1 className="m-0 text-[2.1rem] font-semibold tracking-[-0.03em] text-[#1f2937]">
              System Settings
            </h1>
            <p className="mt-2 text-[15px] text-[#6b7280]">
              Manage global configuration, integrations, and operational policies.
            </p>
          </div>

          <div className="flex flex-col gap-6 rounded-[18px] bg-transparent">
            <div className="flex flex-col md:flex-row gap-6">
              <aside className="w-full md:w-[280px] rounded-[16px] bg-[#f4f7fb] p-2 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.12)]">
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      className={
                        item.active
                          ? 'flex w-full items-center gap-3 rounded-xl bg-white px-4 py-3 text-left text-[15px] font-medium text-[#1f2937] shadow-[0_1px_2px_rgba(15,23,42,0.08),inset_0_0_0_1px_rgba(148,163,184,0.18)]'
                          : 'flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-[15px] text-[#4b5563] transition hover:bg-white hover:text-[#1f2937]'
                      }
                    >
                      <span className="material-symbols-outlined text-[18px] text-[#4b5563]">
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
              </aside>

              <section className="flex-1 rounded-[16px] bg-[#f9fafb] p-5 md:p-6 shadow-[inset_0_0_0_1px_rgba(148,163,184,0.12)]">
                <div className="mb-6">
                  <h2 className="m-0 flex items-center gap-2 text-[1.05rem] font-semibold text-[#111827]">
                    <span className="material-symbols-outlined text-[18px] text-[#4b5563]">apartment</span>
                    Organization Details
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="block text-[13px] font-medium text-[#374151]">Website Name</label>
                    <input
                      className="w-full rounded-xl border border-[#d0d7e2] bg-white px-3 py-3 text-[15px] text-[#111827] outline-none ring-0 transition placeholder:text-[#9ca3af] focus:border-[#4f86ff]"
                      defaultValue="TourBook"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[13px] font-medium text-[#374151]">Contact Email</label>
                    <input
                      className="w-full rounded-xl border border-[#d0d7e2] bg-white px-3 py-3 text-[15px] text-[#111827] outline-none ring-0 transition placeholder:text-[#9ca3af] focus:border-[#4f86ff]"
                      defaultValue="admin@tourbook.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[13px] font-medium text-[#374151]">Phone Support</label>
                    <input
                      className="w-full rounded-xl border border-[#d0d7e2] bg-white px-3 py-3 text-[15px] text-[#111827] outline-none ring-0 transition placeholder:text-[#9ca3af] focus:border-[#4f86ff]"
                      defaultValue="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[13px] font-medium text-[#374151]">Base Currency</label>
                    <div className="relative">
                      <select className="w-full appearance-none rounded-xl border border-[#d0d7e2] bg-white px-3 py-3 pr-10 text-[15px] text-[#111827] outline-none focus:border-[#4f86ff]">
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                        <option>KHR</option>
                      </select>
                      <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6b7280] text-[18px]">
                        expand_more
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-[13px] font-medium text-[#374151]">Brand Assets</label>
                    <div className="mt-2 rounded-[14px] border border-dashed border-[#c5d3ee] bg-[#f3f6fd] p-5 text-center">
                      <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-[#dfe8fb] bg-[#eff5ff] text-[#1d4ed8]">
                        <span className="material-symbols-outlined text-[42px]">upload_file</span>
                      </div>
                      <p className="m-0 text-[14px] text-[#64748b]">
                        Upload your organization's logo. Recommended size: 256×256px.
                      </p>
                      <p className="mt-1 text-[13px] text-[#94a3b8]">
                        Supported formats: PNG, JPG, SVG.
                      </p>
                      <div className="mt-4 flex flex-wrap justify-center gap-3">
                        <button
                          type="button"
                          className="rounded-xl bg-[#1f6feb] px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_6px_16px_rgba(31,111,235,0.24)] transition hover:bg-[#185ad4]"
                        >
                          Upload New Logo
                        </button>
                        <button
                          type="button"
                          className="rounded-xl border border-[#d1d9e6] bg-white px-5 py-2.5 text-[14px] font-medium text-[#374151] transition hover:bg-[#f8fafc]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                className="rounded-xl border border-[#d1d9e6] bg-white px-5 py-2.5 text-[14px] font-medium text-[#374151] transition hover:bg-[#f8fafc]"
              >
                Discard Changes
              </button>
              <button
                type="button"
                className="rounded-xl bg-[#1f6feb] px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_8px_20px_rgba(31,111,235,0.2)] transition hover:bg-[#185ad4]"
              >
                Save Configuration
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
