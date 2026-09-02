import "./list.css";

import { FaThList, FaChevronLeft, FaChevronRight, FaPen } from "react-icons/fa";

import { MdDelete, MdCalendarViewMonth } from "react-icons/md";

function ListUser() {
  return (
    <div>
      {/* Header */}
      <div className="container">
        <div className="c">
          <h1>Tour Schedules Management</h1>
          <p>Manage upcoming tour account booking history and status</p>
        </div>

        <div className="a1">
          <button className="addButton">+ Add Schedule</button>
        </div>
      </div>

      {/* Filter */}
      <div className="a2">
        <div className="a3">
          <div className="a4">
            <select>
              <option value="">Select Category</option>
              <option value="food">Food</option>
              <option value="drink">Drink</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>

          <div className="d"></div>

          <div className="a4">
            <input type="date" className="date-input" />
          </div>
        </div>

        {/* View buttons */}
        <div className="a5">
          <div className="a6">
            <div className="icon">
              <FaThList />
            </div>
            <span>List</span>
          </div>

          <div className="a7">
            <div className="icon">
              {" "}
              <MdCalendarViewMonth />
            </div>

            <span>Calendar</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="schedules-table-wrapper">
        <table className="schedules-table">
          <thead className="a7-1">
            <tr className="a8">
              <th className="a9">ID</th>
              <th className="a9">Role</th>
              <th className="a9">full name</th>
              <th className="a9">Phone</th>
              <th className="a9">Password</th>
              <th className="a9">Email</th>
              <th className="a9">created at</th>
              <th className="a9">Is Active</th>
              <th className="a9">Active</th>
            </tr>
          </thead>

          <tbody>
            {/* Row 1 */}
            <tr className="a10">
              <td className="a11 ">
                <p>1</p>
              </td>
              <td className="a11">
                <p
                  style={{
                    backgroundColor: "#c4d52b",
                    padding: "5px",
                    borderRadius: "5px",
                    color: "#fff",
                  }}
                >
                  Management
                </p>
              </td>
              <td className="a11">
                <p>Schedules Management</p>
              </td>

              <td className="a11a">
                <p>+885 33434 34343</p>
              </td>

              <td className="a11">23rgergerg</td>

              <td className="a11">dsdf@ssfg.com</td>

              <td>
                <span className="a102">active</span>
              </td>

              <td className="a11w">07/29/2026</td>

              <td className="a11">
                <div className="aq1">
                  <MdDelete />
                  <FaPen />
                </div>
              </td>
            </tr>
            <tr className="a10w">
              <td className="a11 ">
                <p>1</p>
              </td>
              <td className="a11">
                <p
                  style={{
                    backgroundColor: "#d5722b",
                    padding: "5px",
                    borderRadius: "5px",
                    color: "#fff",
                  }}
                >
                  {" "}
                  guest
                </p>
              </td>
              <td className="a11">
                <p>Schedules Management</p>
              </td>

              <td className="a11a">
                <p>+885 33434 34343</p>
              </td>

              <td className="a11">23rgergerg</td>

              <td className="a11">dsdf@ssfg.com</td>

              <td>
                <span className="a1021">not active</span>
              </td>

              <td className="a11w">07/29/2026</td>

              <td className="a11">
                <div className="aq1">
                  <MdDelete />
                  <FaPen />
                </div>
              </td>
            </tr>
            <tr className="a10w">
              <td className="a11 ">
                <p>2</p>
              </td>
              <td className="a11">
                <p
                  style={{
                    backgroundColor: "#2b50d5",
                    padding: "5px",
                    borderRadius: "5px",
                    color: "#fff",
                  }}
                >
                  customer
                </p>
              </td>
              <td className="a11">
                <p>Schedules Management</p>
              </td>

              <td className="a11a">
                <p>+885 33434 34343</p>
              </td>

              <td className="a11">23rgergerg</td>

              <td className="a11">dsdf@ssfg.com</td>

              <td>
                <span className="a102">active</span>
              </td>

              <td className="a11w">07/29/2026</td>

              <td className="a11">
                <div className="aq1">
                  <MdDelete />
                  <FaPen />
                </div>
              </td>
            </tr>

            {/* Pagination - outside table */}
            <div className="a12">
              <p>Lorem ipsum dolor sit</p>

              <div className="a13">
                <div className="a14">
                  <FaChevronLeft />
                </div>

                <div className="a14">1</div>
                <div className="a14">2</div>
                <div className="a14">3</div>
                <div className="a14">...</div>

                <div className="a14">
                  <FaChevronRight />
                </div>
              </div>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListUser;
