export default function AdminHeader({ onMenuClick }) {
  return (
    <header className="bg-surface sticky top-0 z-30 flex justify-between items-center h-16 px-4 md:px-lg md:ml-sidebar-width border-b border-outline-variant">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center mr-4">
        <button
          type="button"
          className="p-2 text-on-surface-variant hover:text-primary transition-colors duration-200 rounded-full hover:bg-surface-container-high"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {/* Search Bar on Left */}
      <div className="hidden lg:flex items-center w-72 xl:w-80 mr-4">
        <div className="relative w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">
            search
          </span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-surface rounded-lg border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary text-body-md text-on-surface placeholder-on-surface-variant transition-colors duration-200"
            placeholder="Search..."
            type="text"
          />
        </div>
      </div>

      {/* Compact Search Icon (shown below the lg breakpoint, where the full bar would get squeezed) */}
      <div className="lg:hidden flex-1 flex justify-end pr-2">
        <button
          type="button"
          className="p-2 text-on-surface-variant hover:text-primary transition-colors duration-200 rounded-full hover:bg-surface-container-high"
          aria-label="Search"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>

      {/* Trailing Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        <button
          type="button"
          className="hidden sm:block p-2 text-on-surface-variant hover:text-primary transition-colors duration-200 rounded-full hover:bg-surface-container-high"
          aria-label="Notifications"
        >
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button
          type="button"
          className="hidden sm:block p-2 text-on-surface-variant hover:text-primary transition-colors duration-200 rounded-full hover:bg-surface-container-high"
          aria-label="Messages"
        >
          <span className="material-symbols-outlined">mail</span>
        </button>
        <div className="flex items-center gap-2 pl-2 md:pl-4 sm:border-l border-outline-variant">
          <img
            alt="Admin User Avatar"
            className="w-8 h-8 rounded-full object-cover border border-outline-variant"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3StFmito_2yAYidUKQGX515ZS_D_N2EWhfLdAoNm4SgvxFsBawVfE8qBMORlMSymT4x1nmnUMRvNp5AnbyJV0E0G4IARR9Dgw6OO_WaBmkOfHWoNEgWPnWsqZIRgc02pf0zqaXGTWqSvJoZtNfaI5LnRumnnijNkVzLPHI2snPmgVxTKcQwwVMbjcvkwXlD9WQdyJnYNMyKf0FNnX1Y-KhYQRtgV9JS5B8GAFgPonm5dYIc6Oe3w-PA"
          />
          <span className="hidden md:flex items-center gap-1 text-label-lg text-on-surface">
            Admin Profile
            <span className="material-symbols-outlined text-[18px] text-on-surface-variant">expand_more</span>
          </span>
        </div>
      </div>
    </header>
  )
}