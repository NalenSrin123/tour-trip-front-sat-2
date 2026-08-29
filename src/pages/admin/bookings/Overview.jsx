import React, { useState } from "react";

import {
  MapPin,
  Ticket,
  Users,
  DollarSign,
  Plus,
  Calendar,
  X,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// =========================
// Revenue Data
// =========================

const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 19000 },
  { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 27000 },
  { month: "May", revenue: 22000 },
  { month: "Jun", revenue: 38000 },
  { month: "Jul", revenue: 31000 },
  { month: "Aug", revenue: 48650 },
];

// =========================
// Booking Status Data
// =========================

const statusData = [
  {
    name: "Confirmed",
    value: 750,
    color: "#2563eb",
  },
  {
    name: "Pending",
    value: 300,
    color: "#7c3aed",
  },
  {
    name: "Cancelled",
    value: 150,
    color: "#cbd5e1",
  },
];

export default function Dashboard() {
  // =========================
  // ADD TOUR STATE
  // =========================

  const [showModal, setShowModal] = useState(false);

  const [tourTitle, setTourTitle] = useState("");
  const [tourPrice, setTourPrice] = useState("");

  // =========================
  // DESTINATION STATE
  // =========================

  const [showDestination, setShowDestination] = useState(false);

  const [destinationName, setDestinationName] = useState("");
  const [destinationDescription, setDestinationDescription] = useState("");

  // =========================
  // SCHEDULE STATE
  // =========================

  const [showSchedule, setShowSchedule] = useState(false);

  const [scheduleTour, setScheduleTour] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");

  // =========================
  // ADD TOUR
  // =========================

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTour = {
      title: tourTitle,
      price: tourPrice,
    };

    console.log("New Tour:", newTour);

    alert("New tour added successfully!");

    setTourTitle("");
    setTourPrice("");

    setShowModal(false);
  };

  // =========================
  // DESTINATION
  // =========================

  const handleOpenDestination = () => {
    setShowDestination(true);
  };

  const handleCloseDestination = () => {
    setShowDestination(false);
  };

  const handleDestinationSubmit = (e) => {
    e.preventDefault();

    const newDestination = {
      name: destinationName,
      description: destinationDescription,
    };

    console.log("New Destination:", newDestination);

    alert("Destination added successfully!");

    setDestinationName("");
    setDestinationDescription("");

    setShowDestination(false);
  };

  // =========================
  // CREATE SCHEDULE
  // =========================

  const handleOpenSchedule = () => {
    setShowSchedule(true);
  };

  const handleCloseSchedule = () => {
    setShowSchedule(false);
  };

  const handleScheduleSubmit = (e) => {
    e.preventDefault();

    const newSchedule = {
      tour: scheduleTour,
      date: scheduleDate,
      time: scheduleTime,
    };

    console.log("New Schedule:", newSchedule);

    alert("Schedule created successfully!");

    setScheduleTour("");
    setScheduleDate("");
    setScheduleTime("");

    setShowSchedule(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
        padding: "32px",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      {/* =========================
          HEADER
      ========================= */}

      <div style={{ marginBottom: "24px" }}>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            margin: 0,
            color: "#0f172a",
          }}
        >
          Dashboard
        </h1>

        <p
          style={{
            color: "#64748b",
            marginTop: "4px",
          }}
        >
          Welcome back, Admin. Here's what's happening with your tour business.
        </p>
      </div>

      {/* =========================
          TOP STAT CARDS
      ========================= */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        {/* TOTAL TOURS */}

        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  margin: 0,
                }}
              >
                Total Tours
              </p>

              <h2
                style={{
                  fontSize: "24px",
                  margin: "8px 0 0 0",
                }}
              >
                128
              </h2>
            </div>

            <div
              style={{
                backgroundColor: "#eff6ff",
                padding: "10px",
                borderRadius: "50%",
                color: "#2563eb",
              }}
            >
              <MapPin size={20} />
            </div>
          </div>

          <span
            style={{
              fontSize: "12px",
              color: "#16a34a",
              backgroundColor: "#dcfce7",
              padding: "2px 8px",
              borderRadius: "12px",
              display: "inline-block",
              marginTop: "8px",
            }}
          >
            ↑ +12.3%
          </span>
        </div>

        {/* TOTAL BOOKINGS */}

        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  margin: 0,
                }}
              >
                Total Bookings
              </p>

              <h2
                style={{
                  fontSize: "24px",
                  margin: "8px 0 0 0",
                }}
              >
                1,248
              </h2>
            </div>

            <div
              style={{
                backgroundColor: "#f3e8ff",
                padding: "10px",
                borderRadius: "50%",
                color: "#9333ea",
              }}
            >
              <Ticket size={20} />
            </div>
          </div>

          <span
            style={{
              fontSize: "12px",
              color: "#16a34a",
              backgroundColor: "#dcfce7",
              padding: "2px 8px",
              borderRadius: "12px",
              display: "inline-block",
              marginTop: "8px",
            }}
          >
            ↑ +18.2%
          </span>
        </div>

        {/* TOTAL CUSTOMERS */}

        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  margin: 0,
                }}
              >
                Total Customers
              </p>

              <h2
                style={{
                  fontSize: "24px",
                  margin: "8px 0 0 0",
                }}
              >
                856
              </h2>
            </div>

            <div
              style={{
                backgroundColor: "#f0fdf4",
                padding: "10px",
                borderRadius: "50%",
                color: "#16a34a",
              }}
            >
              <Users size={20} />
            </div>
          </div>

          <span
            style={{
              fontSize: "12px",
              color: "#16a34a",
              backgroundColor: "#dcfce7",
              padding: "2px 8px",
              borderRadius: "12px",
              display: "inline-block",
              marginTop: "8px",
            }}
          >
            ↑ +8.4%
          </span>
        </div>

        {/* TOTAL REVENUE */}

        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  margin: 0,
                }}
              >
                Total Revenue
              </p>

              <h2
                style={{
                  fontSize: "24px",
                  margin: "8px 0 0 0",
                }}
              >
                $48,650
              </h2>
            </div>

            <div
              style={{
                backgroundColor: "#eff6ff",
                padding: "10px",
                borderRadius: "50%",
                color: "#2563eb",
              }}
            >
              <DollarSign size={20} />
            </div>
          </div>

          <span
            style={{
              fontSize: "12px",
              color: "#16a34a",
              backgroundColor: "#dcfce7",
              padding: "2px 8px",
              borderRadius: "12px",
              display: "inline-block",
              marginTop: "8px",
            }}
          >
            ↑ +15.8%
          </span>
        </div>
      </div>

      {/* =========================
          MAIN GRID
      ========================= */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "24px",
        }}
      >
        {/* =========================
            REVENUE CHART
        ========================= */}

        <div
          style={{
            backgroundColor: "#fff",
            padding: "24px",
            borderRadius: "12px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "18px",
              }}
            >
              Revenue Overview
            </h3>

            <span
              style={{
                fontSize: "12px",
                border: "1px solid #e2e8f0",
                padding: "4px 8px",
                borderRadius: "6px",
                color: "#64748b",
              }}
            >
              This Year (Jan-Aug)
            </span>
          </div>

          <div style={{ height: "280px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <XAxis dataKey="month" hide />
                <YAxis hide />

                <Tooltip />

                <Bar dataKey="revenue" fill="#60a5fa" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* =========================
            RIGHT SIDEBAR
        ========================= */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* BOOKING STATUS */}

          <div
            style={{
              backgroundColor: "#fff",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                margin: "0 0 16px 0",
                fontSize: "18px",
              }}
            >
              Booking Status
            </h3>

            <div
              style={{
                height: "160px",
                position: "relative",
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    color: "#64748b",
                    display: "block",
                  }}
                >
                  Total
                </span>

                <strong
                  style={{
                    fontSize: "18px",
                  }}
                >
                  1.2k
                </strong>
              </div>
            </div>

            {/* LEGEND */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "16px",
                fontSize: "12px",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#2563eb",
                  }}
                />
                Confirmed
              </span>

              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#7c3aed",
                  }}
                />
                Pending
              </span>

              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#cbd5e1",
                  }}
                />
                Cancelled
              </span>
            </div>
          </div>

          {/* =========================
              QUICK ACTIONS
          ========================= */}

          <div
            style={{
              backgroundColor: "#fff",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            <h4
              style={{
                margin: "0 0 16px 0",
                fontSize: "12px",
                color: "#64748b",
                textTransform: "uppercase",
              }}
            >
              Quick Actions
            </h4>

            {/* FIRST ROW */}

            <div
              style={{
                display: "flex",
                gap: "8px",
                marginBottom: "8px",
              }}
            >
              {/* ADD TOUR */}

              <button
                type="button"
                onClick={handleOpenModal}
                style={{
                  flex: 1,
                  backgroundColor: "#2563eb",
                  color: "#fff",
                  border: "none",
                  padding: "10px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                <Plus size={16} />
                Add Tour
              </button>

              {/* DESTINATION */}

              <button
                type="button"
                onClick={handleOpenDestination}
                style={{
                  flex: 1,
                  backgroundColor: "#fff",
                  color: "#2563eb",
                  border: "1px solid #e2e8f0",
                  padding: "10px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                <MapPin size={16} />
                Destination
              </button>
            </div>

            {/* CREATE SCHEDULE */}

            <button
              type="button"
              onClick={handleOpenSchedule}
              style={{
                width: "100%",
                backgroundColor: "#fff",
                color: "#2563eb",
                border: "1px solid #e2e8f0",
                padding: "10px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              <Calendar size={16} />
              Create Schedule
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================
          ADD TOUR MODAL
      ================================================== */}

      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              width: "400px",
              maxWidth: "90%",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
          >
            {/* HEADER */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "20px",
                  color: "#0f172a",
                }}
              >
                Add New Tour
              </h2>

              <button
                type="button"
                onClick={handleCloseModal}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#64748b",
                }}
              >
                <X size={22} />
              </button>
            </div>

            {/* FORM */}

            <form onSubmit={handleSubmit}>
              {/* TOUR TITLE */}

              <div
                style={{
                  marginBottom: "16px",
                }}
              >
                <label
                  style={{
                    display: "block",
                    marginBottom: "6px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#334155",
                  }}
                >
                  Tour Title
                </label>

                <input
                  type="text"
                  required
                  value={tourTitle}
                  onChange={(e) => setTourTitle(e.target.value)}
                  placeholder="e.g. Angkor Wat Sunrise Tour"
                  style={{
                    width: "100%",
                    padding: "11px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "7px",
                    boxSizing: "border-box",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              {/* PRICE */}

              <div
                style={{
                  marginBottom: "20px",
                }}
              >
                <label
                  style={{
                    display: "block",
                    marginBottom: "6px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#334155",
                  }}
                >
                  Price ($)
                </label>

                <input
                  type="number"
                  required
                  min="0"
                  value={tourPrice}
                  onChange={(e) => setTourPrice(e.target.value)}
                  placeholder="e.g. 50"
                  style={{
                    width: "100%",
                    padding: "11px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "7px",
                    boxSizing: "border-box",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              {/* BUTTONS */}

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <button
                  type="button"
                  onClick={handleCloseModal}
                  style={{
                    flex: 1,
                    padding: "11px",
                    borderRadius: "7px",
                    border: "1px solid #cbd5e1",
                    backgroundColor: "#fff",
                    color: "#475569",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: "11px",
                    borderRadius: "7px",
                    border: "none",
                    backgroundColor: "#2563eb",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Save Tour
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================================================
          DESTINATION MODAL
      ================================================== */}

      {showDestination && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              width: "400px",
              maxWidth: "90%",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
          >
            {/* HEADER */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "20px",
                  color: "#0f172a",
                }}
              >
                Add Destination
              </h2>

              <button
                type="button"
                onClick={handleCloseDestination}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#64748b",
                }}
              >
                <X size={22} />
              </button>
            </div>

            {/* FORM */}

            <form onSubmit={handleDestinationSubmit}>
              {/* NAME */}

              <div
                style={{
                  marginBottom: "16px",
                }}
              >
                <label
                  style={{
                    display: "block",
                    marginBottom: "6px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#334155",
                  }}
                >
                  Destination Name
                </label>

                <input
                  type="text"
                  required
                  value={destinationName}
                  onChange={(e) => setDestinationName(e.target.value)}
                  placeholder="e.g. Siem Reap"
                  style={{
                    width: "100%",
                    padding: "11px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "7px",
                    boxSizing: "border-box",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              {/* DESCRIPTION */}

              <div
                style={{
                  marginBottom: "20px",
                }}
              >
                <label
                  style={{
                    display: "block",
                    marginBottom: "6px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#334155",
                  }}
                >
                  Description
                </label>

                <textarea
                  value={destinationDescription}
                  onChange={(e) => setDestinationDescription(e.target.value)}
                  placeholder="Enter destination description"
                  style={{
                    width: "100%",
                    height: "100px",
                    padding: "11px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "7px",
                    boxSizing: "border-box",
                    fontSize: "14px",
                    outline: "none",
                    resize: "none",
                  }}
                />
              </div>

              {/* BUTTONS */}

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <button
                  type="button"
                  onClick={handleCloseDestination}
                  style={{
                    flex: 1,
                    padding: "11px",
                    borderRadius: "7px",
                    border: "1px solid #cbd5e1",
                    backgroundColor: "#fff",
                    color: "#475569",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: "11px",
                    borderRadius: "7px",
                    border: "none",
                    backgroundColor: "#2563eb",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Save Destination
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==================================================
          CREATE SCHEDULE MODAL
      ================================================== */}

      {showSchedule && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              width: "400px",
              maxWidth: "90%",
              padding: "24px",
              borderRadius: "12px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
          >
            {/* HEADER */}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "20px",
                  color: "#0f172a",
                }}
              >
                Create Schedule
              </h2>

              <button
                type="button"
                onClick={handleCloseSchedule}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#64748b",
                }}
              >
                <X size={22} />
              </button>
            </div>

            {/* FORM */}

            <form onSubmit={handleScheduleSubmit}>
              {/* SELECT TOUR */}

              <div
                style={{
                  marginBottom: "16px",
                }}
              >
                <label
                  style={{
                    display: "block",
                    marginBottom: "6px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#334155",
                  }}
                >
                  Select Tour
                </label>

                <select
                  required
                  value={scheduleTour}
                  onChange={(e) => setScheduleTour(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "11px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "7px",
                    boxSizing: "border-box",
                    fontSize: "14px",
                    outline: "none",
                    backgroundColor: "#fff",
                  }}
                >
                  <option value="">Select a tour</option>

                  <option value="Angkor Wat Tour">Angkor Wat Tour</option>

                  <option value="Phnom Penh City Tour">
                    Phnom Penh City Tour
                  </option>

                  <option value="Kampot Tour">Kampot Tour</option>

                  <option value="Koh Rong Tour">Koh Rong Tour</option>
                </select>
              </div>

              {/* DATE */}

              <div
                style={{
                  marginBottom: "16px",
                }}
              >
                <label
                  style={{
                    display: "block",
                    marginBottom: "6px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#334155",
                  }}
                >
                  Date
                </label>

                <input
                  type="date"
                  required
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "11px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "7px",
                    boxSizing: "border-box",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              {/* TIME */}

              <div
                style={{
                  marginBottom: "20px",
                }}
              >
                <label
                  style={{
                    display: "block",
                    marginBottom: "6px",
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#334155",
                  }}
                >
                  Time
                </label>

                <input
                  type="time"
                  required
                  value={scheduleTime}
                  onChange={(e) => setScheduleTime(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "11px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "7px",
                    boxSizing: "border-box",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </div>

              {/* BUTTONS */}

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <button
                  type="button"
                  onClick={handleCloseSchedule}
                  style={{
                    flex: 1,
                    padding: "11px",
                    borderRadius: "7px",
                    border: "1px solid #cbd5e1",
                    backgroundColor: "#fff",
                    color: "#475569",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  style={{
                    flex: 1,
                    padding: "11px",
                    borderRadius: "7px",
                    border: "none",
                    backgroundColor: "#2563eb",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Save Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
