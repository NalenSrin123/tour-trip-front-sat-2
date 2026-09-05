import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-background text-on-background min-h-screen">
      {/* Sidebar */}
      <AdminSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Header */}
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

      {/* Main Content */}
      <main className="md:ml-sidebar-width p-4 md:p-lg">
        <div className="max-w-[1200px] mx-auto">{children}</div>
      </main>
    </div>
  );
}
