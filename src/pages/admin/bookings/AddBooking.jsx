import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminSidebar from '../../../components/layout/AdminSidebar'
import AdminHeader from '../../../components/layout/AdminHeader'

const tourOptions = [
  'Grand Canyon South Rim Dr',
  'Eiffel Tower Summit Access',
  'Kyoto Temples Walking Tour',
]

function AddBooking() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const [form, setForm] = useState({
    customer: '',
    email: '',
    phone: '',
    tour: '',
    travelDate: '',
    pax: 1,
    pricePerPax: '',
    payment: 'PENDING',
    status: 'PENDING',
    notes: '',
  })

  const total = (Number(form.pricePerPax) || 0) * (Number(form.pax) || 0)

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'number' ? e.target.valueAsNumber : e.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)

    const newBooking = {
      ...form,
      total: total.toFixed(2),
    }

    // TODO: replace with real API call, e.g.
    // await api.post('/bookings', newBooking)
    console.log('Creating booking:', newBooking)

    setSubmitting(false)
    navigate('/bookings')
  }

  return (
    <div className="bg-[#f4f6fb] min-h-screen text-slate-800">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

      <main className="md:ml-sidebar-width p-4 md:p-6 lg:p-8">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <h1 className="text-[42px] font-black leading-none tracking-[-0.04em] text-[#1f2a44]">New Booking</h1>
              <p className="mt-2 text-sm text-slate-500">Create a booking on behalf of a customer.</p>
            </div>

            <button
              type="button"
              onClick={() => navigate('/bookings')}
              className="inline-flex items-center gap-2 rounded-lg border border-[#cfd6e4] bg-white px-5 py-2 text-sm font-medium text-[#2a3348] shadow-sm transition hover:bg-slate-100"
            >
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Back to Bookings
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <section className="rounded-2xl border border-[#dfe5f0] bg-[#f2f5fa] p-5 shadow-sm">
              <h2 className="mb-5 text-[22px] font-bold text-[#1f2a44]">Customer Details</h2>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Full Name</label>
                  <div className="flex items-center rounded-xl border border-[#d3dae7] bg-white px-3 py-3 text-slate-500 shadow-sm focus-within:border-[#1a52ce]">
                    <span className="material-symbols-outlined mr-2 text-lg">person</span>
                    <input
                      required
                      value={form.customer}
                      onChange={handleChange('customer')}
                      className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                      placeholder="e.g. John Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Email</label>
                  <div className="flex items-center rounded-xl border border-[#d3dae7] bg-white px-3 py-3 text-slate-500 shadow-sm focus-within:border-[#1a52ce]">
                    <span className="material-symbols-outlined mr-2 text-lg">mail</span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange('email')}
                      className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                      placeholder="john@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Phone</label>
                  <div className="flex items-center rounded-xl border border-[#d3dae7] bg-white px-3 py-3 text-slate-500 shadow-sm focus-within:border-[#1a52ce]">
                    <span className="material-symbols-outlined mr-2 text-lg">call</span>
                    <input
                      value={form.phone}
                      onChange={handleChange('phone')}
                      className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                      placeholder="+855 12 345 678"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-[#dfe5f0] bg-[#f2f5fa] p-5 shadow-sm">
              <h2 className="mb-5 text-[22px] font-bold text-[#1f2a44]">Tour &amp; Schedule</h2>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Tour</label>
                  <div className="flex items-center rounded-xl border border-[#d3dae7] bg-white px-3 py-3 text-slate-500 shadow-sm focus-within:border-[#1a52ce]">
                    <select
                      required
                      value={form.tour}
                      onChange={handleChange('tour')}
                      className="w-full appearance-none bg-transparent pr-7 text-sm text-slate-700 focus:outline-none"
                    >
                      <option value="" disabled>Select a tour</option>
                      {tourOptions.map((tour) => (
                        <option key={tour} value={tour}>{tour}</option>
                      ))}
                    </select>
                    <span className="material-symbols-outlined text-base">expand_more</span>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Travel Date</label>
                  <div className="flex items-center rounded-xl border border-[#d3dae7] bg-white px-3 py-3 text-slate-500 shadow-sm focus-within:border-[#1a52ce]">
                    <span className="material-symbols-outlined mr-2 text-lg">calendar_month</span>
                    <input
                      type="date"
                      required
                      value={form.travelDate}
                      onChange={handleChange('travelDate')}
                      className="w-full bg-transparent text-sm text-slate-700 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Pax</label>
                  <div className="flex items-center rounded-xl border border-[#d3dae7] bg-white px-3 py-3 text-slate-500 shadow-sm focus-within:border-[#1a52ce]">
                    <span className="material-symbols-outlined mr-2 text-lg">group</span>
                    <input
                      type="number"
                      min={1}
                      required
                      value={form.pax}
                      onChange={handleChange('pax')}
                      className="w-full bg-transparent text-sm text-slate-700 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-[#dfe5f0] bg-[#f2f5fa] p-5 shadow-sm">
              <h2 className="mb-5 text-[22px] font-bold text-[#1f2a44]">Payment &amp; Status</h2>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Price / Pax</label>
                  <div className="flex items-center rounded-xl border border-[#d3dae7] bg-white px-3 py-3 text-slate-500 shadow-sm focus-within:border-[#1a52ce]">
                    <span className="mr-2 text-sm">$</span>
                    <input
                      type="number"
                      min={0}
                      step="0.01"
                      required
                      value={form.pricePerPax}
                      onChange={handleChange('pricePerPax')}
                      className="w-full bg-transparent text-sm text-slate-700 focus:outline-none"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Payment Status</label>
                  <div className="flex items-center rounded-xl border border-[#d3dae7] bg-white px-3 py-3 text-slate-500 shadow-sm focus-within:border-[#1a52ce]">
                    <select
                      value={form.payment}
                      onChange={handleChange('payment')}
                      className="w-full appearance-none bg-transparent pr-7 text-sm text-slate-700 focus:outline-none"
                    >
                      <option value="PAID">Paid</option>
                      <option value="PENDING">Pending</option>
                      <option value="REFUNDED">Refunded</option>
                    </select>
                    <span className="material-symbols-outlined text-base">expand_more</span>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Booking Status</label>
                  <div className="flex items-center rounded-xl border border-[#d3dae7] bg-white px-3 py-3 text-slate-500 shadow-sm focus-within:border-[#1a52ce]">
                    <select
                      value={form.status}
                      onChange={handleChange('status')}
                      className="w-full appearance-none bg-transparent pr-7 text-sm text-slate-700 focus:outline-none"
                    >
                      <option value="CONFIRMED">Confirmed</option>
                      <option value="PENDING">Pending</option>
                      <option value="CANCELLED">Cancelled</option>
                    </select>
                    <span className="material-symbols-outlined text-base">expand_more</span>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-slate-600">Notes</label>
                <textarea
                  value={form.notes}
                  onChange={handleChange('notes')}
                  rows={3}
                  className="w-full rounded-xl border border-[#d3dae7] bg-white px-3 py-3 text-sm text-slate-700 placeholder:text-slate-400 shadow-sm focus:outline-none focus-within:border-[#1a52ce]"
                  placeholder="Optional notes about this booking..."
                />
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-[#f7f9fd] px-4 py-3">
                <span className="text-sm font-medium text-slate-600">Total</span>
                <span className="text-lg font-bold text-[#1f2a44]">${total.toFixed(2)}</span>
              </div>
            </section>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => navigate('/bookings')}
                className="inline-flex items-center gap-2 rounded-lg border border-[#cfd6e4] bg-white px-5 py-2 text-sm font-medium text-[#2a3348] shadow-sm transition hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-lg bg-[#1a52ce] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1f5fe8] disabled:opacity-60"
              >
                <span className="material-symbols-outlined text-base">add</span>
                {submitting ? 'Saving...' : 'Create Booking'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default AddBooking