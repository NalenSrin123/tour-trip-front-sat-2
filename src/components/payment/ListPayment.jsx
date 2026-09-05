import { useState } from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaChevronDown,
  FaSlidersH,
  FaChevronLeft,
  FaChevronRight,
  FaWallet,
  FaCheckCircle,
  FaClock,
  FaUndo,
  FaArrowUp,
} from "react-icons/fa";

export default function ListPayment() {
  const [payments] = useState([
    {
      id: "PMT-9001",
      bookingId: "TB-1001",
      customer: "K'moew W",
      avatar:
        "https://i.pinimg.com/736x/d9/c6/84/d9c6844082eeda2186dccceb269b12c7.jpg",
      method: "ABA Pay",
      // Replace with your actual ABA Pay logo image URL
      methodIcon:
        "https://i.pinimg.com/1200x/e2/33/f5/e233f5b0c5a358449398f202b03f063a.jpg",
      amount: 240.0,
      date: "Aug 12, 2024",
      status: "Success",
    },
    {
      id: "PMT-9002",
      bookingId: "TB-1002",
      customer: "Heng Pitu",
      avatar:
        "https://i.pinimg.com/736x/20/22/86/202286c59a9d00988d566c6b8c18777c.jpg",
      method: "Credit Card",
      // Replace with your actual Credit Card logo image URL
      methodIcon:
        "https://i.pinimg.com/1200x/07/88/8e/07888e7d83e3ef33d1c71ead529adbba.jpg",
      amount: 180.0,
      date: "Aug 12, 2024",
      status: "Pending",
    },
    {
      id: "PMT-9003",
      bookingId: "TB-1003",
      customer: "Macha latte",
      avatar:
        "https://i.pinimg.com/736x/0d/28/ef/0d28ef3e2b5258cf2da62eaf23766625.jpg",
      method: "Bank Transfer",
      // Replace with your actual Bank Transfer logo image URL
      methodIcon:
        "https://i.pinimg.com/1200x/c1/35/da/c135daac6c3990dd64eda0752fa0c9ba.jpg",
      amount: 520.0,
      date: "Aug 11, 2024",
      status: "Refunded",
    },
  ]);

  return (
    <div className="p-8 bg-[#f8fafc] min-h-screen text-[#0f172a]">
      {/* Title Section */}
      <h2 className="text-2xl font-bold text-[#0f172a] mb-1">
        Payment Management
      </h2>
      <p className="text-sm text-slate-500 mb-6">
        Track transactions, manage payouts, and monitor financial health.
      </p>

      {/* Top 4 Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
        <SummaryCard
          icon={<FaWallet className="text-[#2563eb] text-base" />}
          iconBg="bg-blue-50"
          title="Total Revenue"
          value="$48,650"
          badge="+15.8%"
        />
        <SummaryCard
          icon={<FaCheckCircle className="text-[#10b981] text-base" />}
          iconBg="bg-emerald-50"
          title="Paid Amount"
          value="$42,120"
        />
        <SummaryCard
          icon={<FaClock className="text-[#8b5cf6] text-base" />}
          iconBg="bg-purple-50"
          title="Pending Payments"
          value="$5,230"
        />
        <SummaryCard
          icon={<FaUndo className="text-[#ef4444] text-base" />}
          iconBg="bg-red-50"
          title="Refunded / Failed"
          value="$1,300"
        />
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm">
        {/* Controls Bar */}
        <div className="flex flex-wrap gap-3 mb-5 items-center">
          <div className="relative flex-1 min-w-[280px]">
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
            <input
              type="text"
              placeholder="Search by Payment ID, Booking ID..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-[#f8fafc] border border-slate-200 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <FaCalendarAlt className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
            <input
              type="text"
              defaultValue="Aug 01 - Aug 31, 2024"
              className="pl-9 pr-4 py-2 text-xs bg-[#f8fafc] border border-slate-200 rounded-lg text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="relative">
            <select className="appearance-none pl-4 pr-9 py-2 text-xs bg-[#f8fafc] border border-slate-200 rounded-lg text-slate-700 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer">
              <option>Status: All</option>
              <option>Success</option>
              <option>Pending</option>
              <option>Refunded</option>
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-[10px] pointer-events-none" />
          </div>

          <button className="flex items-center gap-2 px-4 py-2 text-xs bg-[#f8fafc] border border-slate-200 rounded-lg text-slate-700 font-semibold hover:bg-slate-100 transition">
            <FaSlidersH className="text-slate-500 text-[10px]" />
            More Filters
          </button>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] font-bold tracking-wider text-slate-500 uppercase">
                <th className="py-3 px-3">Payment ID</th>
                <th className="py-3 px-3">Booking ID</th>
                <th className="py-3 px-3">Customer</th>
                <th className="py-3 px-3">Payment Method</th>
                <th className="py-3 px-3">Amount</th>
                <th className="py-3 px-3">Date</th>
                <th className="py-3 px-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/80">
              {payments.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-3 font-bold text-slate-900">{p.id}</td>
                  <td className="py-4 px-3 font-semibold text-blue-600 hover:underline cursor-pointer">
                    {p.bookingId}
                  </td>
                  <td className="py-4 px-3">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={p.avatar}
                        alt={p.customer}
                        className="w-7 h-7 rounded-full object-cover"
                      />
                      <span className="font-semibold text-slate-800">
                        {p.customer}
                      </span>
                    </div>
                  </td>

                  {/* Payment Method with Image URL */}
                  <td className="py-4 px-3">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={p.methodIcon}
                        alt={p.method}
                        className="w-6 h-6 object-contain rounded"
                      />
                      <span className="text-slate-700 font-medium text-xs">
                        {p.method}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 px-3 font-bold text-slate-900">
                    ${p.amount.toFixed(2)}
                  </td>
                  <td className="py-4 px-3 text-slate-500">{p.date}</td>
                  <td className="py-4 px-3 text-right">
                    <StatusBadge status={p.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-2 text-xs text-slate-500 gap-4">
          <p>Showing 1 to 3 of 1,240 entries</p>
          <div className="flex items-center gap-1 font-medium">
            <button className="w-7 h-7 flex items-center justify-center border border-slate-200 rounded-md text-slate-400 hover:bg-slate-50">
              <FaChevronLeft className="text-[10px]" />
            </button>
            <button className="w-7 h-7 rounded-md bg-blue-600 text-white font-bold flex items-center justify-center">
              1
            </button>
            <button className="w-7 h-7 rounded-md hover:bg-slate-100 text-slate-600 flex items-center justify-center">
              2
            </button>
            <button className="w-7 h-7 rounded-md hover:bg-slate-100 text-slate-600 flex items-center justify-center">
              3
            </button>
            <span className="px-1 text-slate-400">...</span>
            <button className="w-7 h-7 rounded-md hover:bg-slate-100 text-slate-600 flex items-center justify-center">
              42
            </button>
            <button className="w-7 h-7 flex items-center justify-center border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50">
              <FaChevronRight className="text-[10px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryCard({ icon, iconBg, title, value, badge }) {
  return (
    <div className="bg-white border border-slate-200/60 rounded-2xl p-4 shadow-sm relative">
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2.5 rounded-xl ${iconBg}`}>{icon}</div>
        {badge && (
          <span className="flex items-center gap-1 bg-emerald-50 text-emerald-600 text-[11px] font-bold px-2 py-0.5 rounded-full border border-emerald-100">
            <FaArrowUp className="text-[9px]" /> {badge}
          </span>
        )}
      </div>
      <div>
        <p className="text-xs font-medium text-slate-500 mb-0.5">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
          {value}
        </h3>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Success: "bg-[#e6f4ea] text-[#137333]",
    Pending: "bg-[#fef7e0] text-[#b06000]",
    Refunded: "bg-[#f1f3f4] text-[#5f6368]",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-[11px] font-medium ${
        styles[status] || "bg-slate-100 text-slate-600"
      }`}
    >
      {status}
    </span>
  );
}
