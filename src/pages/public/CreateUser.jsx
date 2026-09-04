import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Camera,
  Eye,
  EyeOff,
  FileText,
  ImagePlus,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRound,
} from 'lucide-react'
import AdminHeader from '../../components/layout/AdminHeader'
import AdminSidebar from '../../components/layout/AdminSidebar'

const roles = [
  { name: 'Admin', icon: ShieldCheck },
  { name: 'Editor', icon: FileText },
  { name: 'Viewer', icon: Eye },
]

export default function CreateUser() {
  const navigate = useNavigate()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState('Editor')
  const [showPassword, setShowPassword] = useState(false)
  const [avatar, setAvatar] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => () => avatar && URL.revokeObjectURL(avatar), [avatar])

  function handleAvatarChange(event) {
    const file = event.target.files?.[0]
    if (!file) return
    const nextAvatar = URL.createObjectURL(file)
    setAvatar((currentAvatar) => {
      if (currentAvatar) URL.revokeObjectURL(currentAvatar)
      return nextAvatar
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background text-on-background">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

      <main className="p-4 md:ml-sidebar-width md:p-lg">
        <div className="mx-auto max-w-280">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="mb-1 text-label-md uppercase tracking-[0.08em] text-primary">Customers</p>
              <h1 className="text-headline-xl text-on-surface">Add New User</h1>
              <p className="mt-1 text-body-md text-on-surface-variant">Create an account and assign access for your TourBook team.</p>
            </div>
            <button type="button" onClick={() => navigate(-1)} className="hidden items-center gap-2 rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2 text-label-lg text-on-surface-variant transition-colors hover:border-primary hover:text-primary sm:flex">
              <ArrowLeft size={16} />
              Back
            </button>
          </div>

          <section className="rounded-xl border border-outline-variant bg-surface-container-lowest shadow-sm">
            <div className="border-b border-outline-variant px-5 py-4 md:px-7">
              <h2 className="text-headline-md text-on-surface">User details</h2>
              <p className="mt-1 text-body-md text-on-surface-variant">Add the profile information and permissions for this user.</p>
            </div>

            <form onSubmit={handleSubmit} className="px-5 py-6 md:px-7 md:py-8">
              <div className="grid gap-8 lg:grid-cols-[180px_1fr]">
                <div className="flex flex-col items-center">
                  <label className="group relative block h-28 w-28 cursor-pointer rounded-full bg-surface-container ring-4 ring-surface-container-high">
                    {avatar ? <img src={avatar} alt="Profile preview" className="h-full w-full rounded-full object-cover" /> : <UserRound className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-primary-fixed-dim" size={43} strokeWidth={1.5} />}
                    <span className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border-4 border-surface-container-lowest bg-primary text-on-primary shadow-sm transition-transform group-hover:scale-105">
                      {avatar ? <Camera size={15} /> : <ImagePlus size={15} />}
                    </span>
                    <input type="file" accept="image/*" className="sr-only" onChange={handleAvatarChange} />
                  </label>
                  <p className="mt-4 text-center text-label-md text-on-surface-variant">Profile photo<br />Optional</p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-label-md text-on-surface">Full name</span>
                    <span className="flex h-11 items-center gap-3 rounded-lg border border-outline-variant bg-surface px-3 transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                      <UserRound size={17} className="text-on-surface-variant" />
                      <input required name="name" type="text" placeholder="e.g. Jane Doe" className="min-w-0 flex-1 bg-transparent text-body-md text-on-surface outline-none placeholder:text-on-surface-variant" />
                    </span>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-label-md text-on-surface">Email address</span>
                    <span className="flex h-11 items-center gap-3 rounded-lg border border-outline-variant bg-surface px-3 transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                      <Mail size={17} className="text-on-surface-variant" />
                      <input required name="email" type="email" placeholder="jane.doe@company.com" className="min-w-0 flex-1 bg-transparent text-body-md text-on-surface outline-none placeholder:text-on-surface-variant" />
                    </span>
                  </label>

                  <fieldset className="md:col-span-2">
                    <legend className="mb-2 text-label-md text-on-surface">Role</legend>
                    <div className="grid grid-cols-3 gap-3">
                      {roles.map(({ name, icon: Icon }) => (
                        <button key={name} type="button" onClick={() => setSelectedRole(name)} className={`flex h-16 items-center justify-center gap-2 rounded-lg border text-label-lg transition-colors ${selectedRole === name ? 'border-primary-fixed-dim bg-primary-fixed text-on-primary-fixed' : 'border-outline-variant bg-surface text-on-surface-variant hover:border-primary-fixed-dim hover:bg-surface-container'}`}>
                          <Icon size={17} strokeWidth={1.9} />
                          {name}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <label className="block md:col-span-2">
                    <span className="mb-2 block text-label-md text-on-surface">Password</span>
                    <span className="flex h-11 items-center gap-3 rounded-lg border border-outline-variant bg-surface px-3 transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
                      <LockKeyhole size={17} className="text-on-surface-variant" />
                      <input required minLength={8} name="password" type={showPassword ? 'text' : 'password'} placeholder="Create a password" className="min-w-0 flex-1 bg-transparent text-body-md text-on-surface outline-none placeholder:text-on-surface-variant" />
                      <button type="button" aria-label={showPassword ? 'Hide password' : 'Show password'} onClick={() => setShowPassword(!showPassword)} className="text-on-surface-variant hover:text-primary">
                        {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                      </button>
                    </span>
                  </label>
                </div>
              </div>

              {submitted && <p className="mt-6 rounded-lg bg-secondary-fixed px-3 py-2 text-body-md text-on-secondary-fixed">User details are ready to create.</p>}
              <div className="mt-8 flex flex-col-reverse gap-3 border-t border-outline-variant pt-5 sm:flex-row sm:justify-end">
                <button type="button" onClick={() => navigate(-1)} className="rounded-lg border border-outline-variant px-5 py-2.5 text-label-lg text-on-surface-variant transition-colors hover:border-primary hover:text-primary">Cancel</button>
                <button type="submit" className="rounded-lg bg-primary px-5 py-2.5 text-label-lg text-on-primary transition-colors hover:bg-primary-container focus:outline-none focus:ring-2 focus:ring-primary/30">Create User</button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  )
}