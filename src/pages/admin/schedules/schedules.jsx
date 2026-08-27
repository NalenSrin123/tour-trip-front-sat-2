import React from "react";
import "./module.css";

import {
  FaThList,
  FaChevronLeft,
  FaChevronRight,
  // MdDelete,
} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdCalendarViewMonth } from "react-icons/md";
import { FaPen } from "react-icons/fa";

import img from "./images.jpg";
function Schedules() {
  return (
    //
    //
    <body>
      <div className="container">
        <div className="c">
          <h1>Tour Schedules Management</h1>
          <p>Manage upcoming tour accoun booking history and status</p>
        </div>
        <div className="a1">
          <button className="addButton">+ Add Schedule</button>
        </div>
      </div>
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
        <div className="a5">
          <div className="a6">
            <FaThList />
            list
          </div>
          <div className="a7">
            <MdCalendarViewMonth />
            caleender
          </div>
        </div>
      </div>

      <div className="schedules-table-wrapper">
        <table className="schedules-table">
          <thead className="a7-1">
            <tr className="a8">
              <th className="a9">CUSTOMER</th>
              <th className="a9">CONTACT</th>
              <th className="a9">BOOKINGS</th>
              <th className="a9">TOTAL SPENT</th>
              <th className="a9">STATUS</th>
              <th className="a9">JOINED</th>
              <th className="a9">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="a10">
              <td className="a11">
                <img src={img} alt="" />
                <p>Schedules Management</p>
              </td>
              <td className="a11a">
                <div>dsdf@ssfg.com</div>
                <p>+885 33434 34343</p>
              </td>
              <td className="a11">23</td>
              <td className="a11">885$</td>
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
            <tr className="a101">
              <td className="a11">
                <img src={img} alt="" />
                <p>Schedules Management</p>
              </td>
              <td className="a11a">
                <div>dsdf@ssfg.com</div>
                <p>+885 33434 34343</p>
              </td>
              <td className="a11">23</td>
              <td className="a11">885$</td>
              <td>
                <span className="a103">inactive</span>
              </td>
              <td className="a11w">07/29/2026</td>
              <td className="a11">
                <div className="aq1">
                  <MdDelete />
                  <FaPen />
                </div>
              </td>
            </tr>
          </tbody>{" "}
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
        </table>
      </div>
    </body>

    //
    //
  );
}

export default Schedules;
