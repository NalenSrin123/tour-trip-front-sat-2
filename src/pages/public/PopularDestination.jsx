import { ArrowRight } from "lucide-react";
import "./PopularDestination.css";

const destinations = [
  {
    id: 1,
    name: "Siem Reap",
    tours: 12,
    image:
      "https://i.pinimg.com/236x/f5/93/4a/f5934a7e66ca9c031cd094018a36823d.jpg",
  },
  {
    id: 2,
    name: "Phnom Penh",
    tours: 8,
    image:
      "https://i.pinimg.com/1200x/5a/7a/cf/5a7acfb329a0269d48cb529b3020c12e.jpg",
  },
  {
    id: 3,
    name: "Kampot",
    tours: 6,
    image:
      "https://i.pinimg.com/1200x/95/04/b6/9504b6f4f1d6aad923e1fb144af627a5.jpg",
  },
  {
    id: 4,
    name: "Koh Rong",
    tours: 10,
    image:
      "https://i.pinimg.com/736x/65/3d/df/653ddf1e883d5bdcfb9e86f2bbc96b6b.jpg",
  },
  {
    id: 5,
    name: "Battambang",
    tours: 5,
    image:
      "https://i.pinimg.com/1200x/61/5b/62/615b62be14283acabf903e9287ef4818.jpg",
  },
  {
    id: 6,
    name: "Mondulkiri",
    tours: 4,
    image:
      "https://i.pinimg.com/736x/d4/cc/04/d4cc04eb7db0e155cc6313b8bdc892ac.jpg",
  },
];

function PopularDestination() {
  return (
    <section className="destinations-section">
      <div className="destinations-container">
        {/* Heading */}
        <div className="destinations-heading">
          <h2>Popular Destinations</h2>
          <p>Explore the most beautiful places in Cambodia</p>
        </div>

        {/* Destination Cards */}
        <div className="destinations-grid">
          {destinations.map((destination) => (
            <div className="destination-card" key={destination.id}>
              <img
                src={destination.image}
                alt={destination.name}
                className="destination-image"
              />

              <div className="destination-overlay"></div>

              <div className="destination-content">
                <div>
                  <h3>{destination.name}</h3>

                  <span className="tour-count">{destination.tours} Tours</span>
                </div>

                <button
                  className="destination-button"
                  aria-label={`View ${destination.name}`}
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDestination;
