import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import { FiMapPin } from "react-icons/fi";
import { BiSolidChevronRight } from "react-icons/bi";
import { FaUserGroup } from "react-icons/fa6";
import { FiStar } from "react-icons/fi";
import { LuStarOff } from "react-icons/lu";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbClockHour3 } from "react-icons/tb";
import { IoMdHeartDislike } from "react-icons/io";
//
import Img from "../../assets/images/destinations/1.jpg";
import Img2 from "../../assets/images/destinations/2.jpg";
import Img3 from "../../assets/images/destinations/3.jpg";
import Img4 from "../../assets/images/destinations/4.jpg";
import Img5 from "../../assets/images/destinations/5.jpg";
import Img6 from "../../assets/images/destinations/6.jpg";
const IncludeMetting = (props) => {
  return (
    <body>
      <div className="hoem">
        <div className="tol">Home</div>
        <span className="tol1">
          <BiSolidChevronRight />
        </span>

        <div className="tol">Tours</div>
        <span className="tol1">
          <BiSolidChevronRight />
        </span>
        <div className="tol">Siem Reap</div>
        <span className="tol1">
          <BiSolidChevronRight />
        </span>
        <div className="tol">Angkor Wat Discovery</div>
      </div>
      {/*  */}
      <div className="container1">
        <div class="container ">
          <div className="item">
            <img src={Img2} alt="Destination" />
          </div>
          <div className="item">
            <img src={Img3} alt="Destination" />
          </div>
          <div className="item">
            <img src={Img4} alt="Destination" />
          </div>
          <div className="item">
            <img src={Img5} alt="Destination" />
          </div>
          <div className="item">
            <img src={Img6} alt="Destination" />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="order">
        <div className="item-in-order1">
          <h1 className="item-in-order1-1">Angkor Wat Discovery Tour</h1>
          <div className="item-in-order1-2">
            <div className="d">
              <FiStar />
              <FiStar />
              <FiStar />
              <FiStar />
              <LuStarOff />
            </div>
            <span> 4.9 </span>
            <span> (128 Reviews) </span>
            <span className="item-in-icon">
              <FaMapMarkerAlt />
            </span>
            <span>siem Reap Camdodia</span>
          </div>
          {/*  */}
          <section className="item-in-order1-3">
            <div className="item-in-order1-4">
              <span className="item-in-order1-5">
                <TbClockHour3 />
              </span>
              <div className="item-in-order1-6">
                <span className="text-order">Duration</span>
                <span>3 Days / 2 Nights</span>
              </div>
            </div>
            <div className="item-in-order1-4">
              <span className="item-in-order1-5">
                <TiDeleteOutline />
              </span>
              <div className="item-in-order1-6">
                <span className="text-order">Doffculty</span>
                <span>Easy</span>
              </div>
            </div>
            <div className="item-in-order1-4">
              <span className="item-in-order1-5">
                <FaUserGroup />
              </span>
              <div className="item-in-order1-6">
                <span className="text-order">Group size</span>
                <span>Up to 12 people</span>
              </div>
            </div>
          </section>

          {/*  */}
          <h1 className="text-bg-danger">Tour Overview</h1>
          <span>
            Embark on an unforgettable journey into the heart of the ancient
            Khmer Empire. This meticulously crafted 3-day adventure brings you
            face-to-face with the legendary temples of Siem Reap, Cambodia.
            Witness a majestic sunrise over Angkor Wat, walk under the enigmatic
            giant stone faces of Bayon Temple, and explore Ta Prohm-uniquely
            reclaimed by massive jungle tree roots. Beyond the temples, discover
            local life at a floating village on Tonle Sap Lake and enjoy
            Cambodia's warm hospitality, rich local culinary traditions, and
            vibrant cultural heritage.
          </span>
        </div>
        <div className="item-in-order2">
          <div className="item-in-order2-2">
            <h1>
              <span className="item-in-color">$150</span> / Person
            </h1>
            <hr></hr>
            <span>Select Date</span>
            <input type="date" className="item-in-order2-3" />

            <div className="item-in-numder-1">
              <div className="item-in-order2-4">
                <span>Adults</span>
                <div className="item-in-order2-5">
                  <button className="item-in-order2-6">-</button>
                  <span>1</span>
                  <button className="item-in-order2-6">+</button>
                </div>
              </div>

              <div className="item-in-order2-4">
                <span>Children</span>
                <div className="item-in-order2-5">
                  <button className="item-in-order2-6">-</button>
                  <span>1</span>
                  <button className="item-in-order2-6">+</button>
                </div>
              </div>
            </div>
            <div className="total">
              <h1>Total Price</h1>
              <h1 className="item-in-color-total">$150</h1>
            </div>
            <button className="item-in-order2-7">Book Now</button>
            <button className="item-in-order2-8">
              <IoMdHeartDislike />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
      {/*  */}

      <div class="tour-details">
        <section>
          <h2 class="section-title">Tour Highlights</h2>
          <div class="highlights-grid">
            <div class="highlight-card">
              <span class="highlight-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                </svg>
              </span>
              <h3 class="highlight-title">Visit Angkor Wat</h3>
              <p class="highlight-text">
                Experience the monumental UNESCO world heritage temple at its
                finest.
              </p>
            </div>

            <div class="highlight-card">
              <span class="highlight-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 17 5.5 21 7.5 13.5 2 9 9 9" />
                </svg>
              </span>
              <h3 class="highlight-title">Professional Tour Guide</h3>
              <p class="highlight-text">
                Gain insightful facts from certified local experts speaking
                fluent English.
              </p>
            </div>

            <div class="highlight-card">
              <span class="highlight-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect x="4" y="2" width="16" height="20" rx="1" />
                  <path d="M9 22v-4h6v4M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1" />
                </svg>
              </span>
              <h3 class="highlight-title">Hotel Included</h3>
              <p class="highlight-text">
                Relax in comfortable air-conditioned 4-star boutique hotels
                downtown.
              </p>
            </div>

            <div class="highlight-card">
              <span class="highlight-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11" />
                  <rect x="3" y="11" width="18" height="6" rx="1" />
                  <circle cx="7.5" cy="17.5" r="1.5" />
                  <circle cx="16.5" cy="17.5" r="1.5" />
                </svg>
              </span>
              <h3 class="highlight-title">Transportation Included</h3>
              <p class="highlight-text">
                Travel hassle-free between attractions in a private cool
                vehicle.
              </p>
            </div>

            <div class="highlight-card">
              <span class="highlight-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M6 2v8a2 2 0 0 0 2 2v10M6 2v20M10 2v8M18 2a4 4 0 0 0-4 4v4h4v10" />
                </svg>
              </span>
              <h3 class="highlight-title">Local Food Experience</h3>
              <p class="highlight-text">
                Savor gourmet authentic Khmer lunches prepared fresh daily.
              </p>
            </div>

            <div class="highlight-card">
              <span class="highlight-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                  <path d="M9 16l2 2 4-4" />
                </svg>
              </span>
              <h3 class="highlight-title">Free Cancellation</h3>
              <p class="highlight-text">
                Change plans securely with zero cancellation fees up to 24h
                prior.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 class="section-title">Tour Itinerary</h2>
          <div class="itinerary">
            <div class="itinerary-row">
              <div class="itinerary-dot-col">
                <span class="itinerary-dot"></span>
                <span class="itinerary-line"></span>
              </div>
              <div class="itinerary-card">
                <h3 class="itinerary-day">
                  <span class="day-label">DAY 1</span> – Arrival & Siem Reap
                  City Tour
                </h3>
                <ul class="itinerary-list">
                  <li>
                    <svg
                      class="check-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Airport pickup & smooth hotel transfer
                  </li>
                  <li>
                    <svg
                      class="check-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Check-in at boutique hotel & freshen up
                  </li>
                  <li>
                    <svg
                      class="check-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Explore local city artisan markets & lively pub street
                  </li>
                </ul>
              </div>
            </div>

            <div class="itinerary-row">
              <div class="itinerary-dot-col">
                <span class="itinerary-dot"></span>
                <span class="itinerary-line"></span>
              </div>
              <div class="itinerary-card">
                <h3 class="itinerary-day">
                  <span class="day-label">DAY 2</span> – Angkor Wat Discovery
                </h3>
                <ul class="itinerary-list">
                  <li>
                    <svg
                      class="check-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Unforgettable sunrise spectacle at Angkor Wat
                  </li>
                  <li>
                    <svg
                      class="check-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Guided walking tour through mysterious smiling faces of
                    Bayon Temple
                  </li>
                  <li>
                    <svg
                      class="check-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Explore Tomb Raider's Ta Prohm Temple embedded in giant
                    roots
                  </li>
                  <li>
                    <svg
                      class="check-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Authentic Khmer lunch included
                  </li>
                </ul>
              </div>
            </div>

            <div class="itinerary-row">
              <div class="itinerary-dot-col">
                <span class="itinerary-dot"></span>
              </div>
              <div class="itinerary-card">
                <h3 class="itinerary-day">
                  <span class="day-label">DAY 3</span> – Floating Village &
                  Depart
                </h3>
                <ul class="itinerary-list">
                  <li>
                    <svg
                      class="check-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Scenic Tonle Sap Lake cruise
                  </li>
                  <li>
                    <svg
                      class="check-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Observe traditional floating village houses & markets
                  </li>
                  <li>
                    <svg
                      class="check-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Transfer back to town & souvenir shopping
                  </li>
                  <li>
                    <svg
                      class="check-icon"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{" "}
                    Airport transfer for evening departure
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <h1 className="center">Include and Metting</h1>
      <div className="a1">
        <div className="a2">
          <h1 className="a-2">Included</h1>

          <div className="a3">
            <div className="item1">
              <div className="icon_aCheck">
                <FaCheck />
              </div>
              <span>Hotel accommodation (4-star boutique hotel)</span>
            </div>

            <div className="item1">
              <div className="icon_aCheck">
                <FaCheck />
              </div>
              <span>Daily fresh local organic breakfast</span>
            </div>

            <div className="item1">
              <div className="icon_aCheck">
                <FaCheck />
              </div>
              <span>Private air-conditioned transportation</span>
            </div>

            <div className="item1">
              <div className="icon_aCheck">
                <FaCheck />
              </div>
              <span>Certified professional English guide</span>
            </div>

            <div className="item1">
              <div className="icon_aCheck">
                <FaCheck />
              </div>
              <span>Angkor Archaeological Park passes</span>
            </div>
          </div>
        </div>

        <div className="a4">
          <h1 className="a-21">Excluded</h1>

          <div className="item1">
            <div className="icon_aCheck1">
              <TiDeleteOutline />
            </div>
            <span>Personal shopping expenses</span>
          </div>

          <div className="item1">
            <div className="icon_aCheck1">
              <TiDeleteOutline />
            </div>
            <span>Personal travel insurance</span>
          </div>

          <div className="item1">
            <div className="icon_aCheck1">
              <TiDeleteOutline />
            </div>
            <span>Main meals (lunches & dinners except Day 2)</span>
          </div>

          <div className="item1">
            <div className="icon_aCheck1">
              <TiDeleteOutline />
            </div>
            <span>Gratuities/Tips for guide and driver</span>
          </div>
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
