import React from "react";
import "./App.css";

const customers = [
  {
    name: "Eleanor Richards",
    email: "eleanor.r@example.com",
    phone: "+1 (555) 123-4567",
    bookings: 12,
    spent: "$4,250.00",
    status: "Active",
    joined: "Mar 12,\n2023",
    avatar: "ER",
  },
  {
    name: "Marcus Webb",
    email: "m.webb89@example.com",
    phone: "+44 7700 900077",
    bookings: 3,
    spent: "$850.50",
    status: "Inactive",
    joined: "Jun 05,\n2022",
    avatar: "MW",
  },
  {
    name: "Sophia Chen",
    email: "schen.travels@example.com",
    phone: "+1 (555) 987-6543",
    bookings: 24,
    spent: "$12,400.00",
    status: "Active",
    joined: "Jan 18,\n2021",
    avatar: "SC",
  },
];

function App() {
  return (
    <div className="app">

      {/* ================= TOP BAR ================= */}
      <header className="topbar">

        <div className="top-search">
          <span className="search-icon">⌕</span>
          <input type="text" placeholder="Search..." />
        </div>

        <div className="top-divider"></div>

        <div className="top-actions">

          <button className="icon-btn">
            ♧
          </button>

          <button className="icon-btn">
            ✉
          </button>

          <div className="vertical-line"></div>

          <div className="admin-profile">
            <div className="admin-avatar">
              A
            </div>

            <span>Admin Profile</span>

            <span className="profile-arrow">⌄</span>
          </div>

        </div>
      </header>


      {/* ================= MAIN CONTENT ================= */}
      <main className="main-content">

        {/* Page Header */}
        <section className="page-header">

          <div>
            <h1>Manage Customers</h1>
            <p>
              View and manage user accounts, booking history, and status.
            </p>
          </div>

          <div className="header-buttons">

            <button className="export-btn">
              <span>⇩</span>
              Export
            </button>

            <button className="add-btn">
              <span>＋</span>
              Add Customer
            </button>

          </div>

        </section>


        {/* ================= FILTER BOX ================= */}
        <section className="filter-box">

          <div className="customer-search">
            <span className="filter-search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search customers by name, email or phone..."
            />
          </div>


          <div className="status-select">
            <span>All Statuses</span>
            <span className="select-arrow">⌄</span>
          </div>


          <button className="filter-button">
            <span className="filter-icon">☷</span>
            More Filters
          </button>

        </section>


        {/* ================= CUSTOMER TABLE ================= */}
        <section className="table-card">

          <table>

            <thead>
              <tr>
                <th className="customer-column">
                  CUSTOMER
                </th>

                <th>
                  CONTACT
                </th>

                <th>
                  BOOKINGS
                </th>

                <th className="spent-column">
                  TOTAL
                  <br />
                  SPENT
                </th>

                <th>
                  STATUS
                </th>

                <th>
                  JOINED
                </th>

                <th className="actions-column">
                  ACTIONS
                </th>
              </tr>
            </thead>


            <tbody>

              {customers.map((customer, index) => (

                <tr key={index}>

                  {/* Customer */}
                  <td>
                    <div className="customer-info">

                      <div
                        className={`customer-avatar ${
                          index === 1 ? "purple-avatar" : ""
                        }`}
                      >
                        {customer.avatar}
                      </div>

                      <span className="customer-name">
                        {customer.name}
                      </span>

                    </div>
                  </td>


                  {/* Contact */}
                  <td>
                    <div className="contact-info">
                      <div>{customer.email}</div>
                      <small>{customer.phone}</small>
                    </div>
                  </td>


                  {/* Bookings */}
                  <td>
                    {customer.bookings}
                  </td>


                  {/* Total spent */}
                  <td>
                    {customer.spent}
                  </td>


                  {/* Status */}
                  <td>
                    <span
                      className={
                        customer.status === "Active"
                          ? "status active"
                          : "status inactive"
                      }
                    >
                      {customer.status}
                    </span>
                  </td>


                  {/* Joined */}
                  <td>
                    <span className="joined-date">
                      {customer.joined.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i === 0 && <br />}
                        </React.Fragment>
                      ))}
                    </span>
                  </td>


                  {/* Actions */}
                  <td className="actions-cell">
                    <button className="action-btn">⋮</button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>


          {/* ================= PAGINATION ================= */}
          <div className="pagination">

            <div className="showing">
              Showing 1 to 3 of 156 customers
            </div>

            <div className="pagination-buttons">

              <button className="page-arrow">
                ‹
              </button>

              <button className="page active-page">
                1
              </button>

              <button className="page">
                2
              </button>

              <button className="page">
                3
              </button>

              <button className="page dots">
                ...
              </button>

              <button className="page-arrow">
                ›
              </button>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;