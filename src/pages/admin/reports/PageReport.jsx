import React, { useEffect, useState } from "react";
import {
  CalendarDaysIcon,
  ArrowDownTrayIcon,
  BanknotesIcon,
  TicketIcon,
  ShoppingCartIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import "./PageReport.css";

const ReportsAnalytics = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    Promise.all([fetch("/api/stats").then(res => res.json())])
      .then(([statsData]) => {
        setStats(
          statsData.map(item => ({
            title: item.name || "Unknown",
            value: item.amount ? `$${item.amount}` : "N/A",
            change: item.growth ? `${item.growth}%` : "0%",
            positive: (item.growth ?? 0) >= 0,
            icon:
              item.name === "Revenue"
                ? BanknotesIcon
                : item.name === "Bookings"
                ? TicketIcon
                : item.name === "Order Value"
                ? ShoppingCartIcon
                : StarIcon,
          }))
        );
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setStats([]);
      });
  }, []);

  return (
    <div className="reports-container">
      <div className="reports-wrapper">
        {/* Header */}
        <div className="reports-header">
          <div className="reports-header-left">
            <h1 className="reports-title">Reports & Analytics</h1>
            <p className="reports-subtitle">
              Performance overview and operational metrics.
            </p>
          </div>
          <div className="reports-header-right">
            <button className="btn-outline">
              <CalendarDaysIcon className="icon-sm" />
              Last 30 Days <span className="dropdown-arrow">⌄</span>
            </button>
            <button className="btn-primary">
              <ArrowDownTrayIcon className="icon-sm" />
              Export
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card">
                <div className="stat-header">
                  <div>
                    <p className="stat-label">{stat.title}</p>
                    <h2 className="stat-value">{stat.value}</h2>
                  </div>
                  <div className="stat-icon">
                    {Icon && <Icon className="icon-md" />}
                  </div>
                </div>
                <div className="stat-footer">
                  <span
                    className={`stat-change ${
                      stat.positive ? "positive" : "negative"
                    }`}
                  >
                    {stat.positive ? "↗️" : "↘️"} {stat.change}
                  </span>
                  <span className="stat-compare">vs last month</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;
