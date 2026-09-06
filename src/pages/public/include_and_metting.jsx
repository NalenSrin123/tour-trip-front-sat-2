import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import { FiMapPin } from "react-icons/fi";
import Img from "../../assets/images/destinations/1.jpg";
const IncludeMetting = (props) => {
  return (
    <body>
      <h1 className="center">Include and Metting</h1>
      <div className="a1">
        <div className="a2">
          <h1 className="a-2 ">Included</h1>
          <div className="a3">
            <tr>
              <td>
                <div className="icon_aCheck">
                  <FaCheck />
                </div>
                Hotel accommodation (4-star boutique hotel)
              </td>
              <td>
                <div className="icon_aCheck">
                  <FaCheck />
                </div>
                Daily fresh local organic breakfast
              </td>
              <td>
                <div className="icon_aCheck">
                  <FaCheck />
                </div>
                Private air-conditioned transportation
              </td>
              <td>
                <div className="icon_aCheck">
                  <FaCheck />
                </div>
                Certified professional English guide
              </td>
              <td>
                <div className="icon_aCheck">
                  <FaCheck />
                </div>
                Angkor Archaeological Park passes
              </td>
            </tr>
          </div>
        </div>

        <div className="a4">
          <h1 className="a-21">Included</h1>
          <tr>
            <td>
              <div className="icon_aCheck1">
                <TiDeleteOutline />
              </div>
              Personal shopping expenses
            </td>
            <td>
              <div className="icon_aCheck1">
                <TiDeleteOutline />
              </div>
              Personal travel insurance
            </td>
            <td>
              <div className="icon_aCheck1">
                <TiDeleteOutline />
              </div>
              Main meals (lunches & dinners except Day 2)
            </td>
            <td>
              <div className="icon_aCheck1">
                <TiDeleteOutline />
              </div>
              Gratuities/Tips for guide and driver
            </td>
          </tr>
        </div>
      </div>

      <h1 className="center">Meeting & Pickup</h1>
      <div className="b">
        <div className="b1">
          <img className="b2" src={Img} alt="Destination" />
          <p className="b3">
            <FiMapPin />
            Main Office Pickup Point
          </p>
        </div>
        <div className="b-3">
          <h1 className="b-4">Meeting Address</h1>
          <div className="">
            TripGo Hub Siem Reap, 128 Pokambor Avenue, Riverside, Siem Reap,
            Cambodia.
          </div>
          <h1 className="b-4">Meeting Address</h1>
          <div className="">
            Complementary hotel pickup is available from all centrally located
            Siem Reap hotels. Please list your hotel name when booking. Pickup
            commences daily at 7:30 AM.
          </div>
          <button className="b-5">Get Directions</button>
        </div>
      </div>
    </body>
  );
};
export default IncludeMetting;
