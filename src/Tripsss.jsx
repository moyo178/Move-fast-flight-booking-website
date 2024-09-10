import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlaneDeparture, FaChair, FaDoorOpen } from 'react-icons/fa';
import deal from './image/palm.jpg';
import deall from './image/peak.jpg';
import deal1 from './image/amalfi.jpg';
import airicon from './image/plane-icon.png';

const Tripsss = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState({ departure: '', return: '' });
  const [passengers, setPassengers] = useState(1);
  const [flights, setFlights] = useState([]);

  const handleSearch = () => {
    const mockFlights = [
      {
        airline: 'Move Fast Airline',
        flightNumber: 'EK404',
        class: 'Business',
        departure: '10:00 AM',
        arrival: '12:00 PM',
        gate: 'A21',
        seat: '34', 
        price: 3000,
      },
      {
        airline: 'Move Fast Airline',
        flightNumber: 'BA203',
        class: 'Economy',
        departure: '10:00 AM',
        arrival: '12:00 PM',
        gate: 'B13',
        seat: '21',
        price: 1200,
      },
    ];
    setFlights(mockFlights);
  };

  return (
    <div className="tripsss">
      <section className="bg-sec">
        <header className="header1">
          <Link to="/" className='Link1'>Move Fast</Link> 
          <nav>
            <Link to="/about-us">About Us</Link>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        {/* Hero Section */}
        <div className="hero">
          <h1>Find Your Next Adventure</h1>
          <p>Discover amazing flight deals and book your next journey with ease.</p>
        </div>

        {/* Flight Search Form */}
        <div className="search-form">
            <div className='input-flex'>
            <h6 className="input-h1">Departure Airport</h6>
            <input
              type="text"
              placeholder="From"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
          </div>
          <div>
            <h6 className="input-h1">Arrival Airport</h6>
            <input
              type="text"
              placeholder="To"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
         
          <div>
            <h6 className="input-h1">Departure Date</h6>
            <input
              type="date"
              value={dates.departure}
              onChange={(e) => setDates({ ...dates, departure: e.target.value })}
            />
          </div>
          <div>
            <h6 className="input-h1">Return Date</h6>
            <input
              type="date"
              value={dates.return}
              onChange={(e) => setDates({ ...dates, return: e.target.value })}
            />
          </div>
          <div>
            <h6 className="input-h1">Passengers</h6>
            <input
              type="number"
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              min="1"
            />
          </div>
          <button onClick={handleSearch}>Search Flights</button>
        </div>
      </section>

      <div className="flight-results">
        <h2>Available Flights</h2>
        {flights.length === 0 ? (
          <p>No flights available. Adjust your search criteria.</p>
        ) : (
          flights.map((flight, index) => (
            <div key={index} className="flight-ticket">
              <div className="flight-info">
                <div className="airline">
                  <FaPlaneDeparture size={20} />
                  <h3>{flight.airline}</h3>
                </div>
                <div className="flight-details">
                  <p>
                    <span>Flight Number:</span> {flight.flightNumber}
                  </p>
                  <p>
                    <span>Departure:</span> {flight.departure}
                  </p>
                  <p>
                    <span>Arrival:</span> {flight.arrival}
                  </p>
                </div>
              </div>
              <div className="seat-info">
                <div className='flight-time'>
                  <div>
                    {origin}
                    <h1>10:00</h1>
                  </div>
                  <div>
                    <img src={airicon} alt="" />
                  </div>
                  <div className='seat-info-txt'>
                   {destination}
                    <h1>12:00</h1>
                  </div>
                </div>
                <div className='flight-icon'>
                  <p className='flight-info-icon'>
                    <FaChair /> Seat: {flight.seat}
                  </p>
                  <p className='flight-info-icon'>
                    <FaDoorOpen /> Gate: {flight.gate}
                  </p>
                  <p className='flight-info-icon'>Class: {flight.class}</p>
                </div>
              </div> 
              <span className='flight-price'>${flight.price}</span>
              <div className="book-now">
                <Link to="/BookingConfirmation">
                  <button>Book Now</button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Travel Deals */}
      <section className="travel-deals">
        <h2>Exclusive Travel Deals</h2>
        <div className="deal-cards">
          <div className="deal-card">
            <img src={deal} alt="Summer Sale" />
            <h3>Summer Sale</h3>
            <p>Up to 50% off on selected summer destinations. Book now!</p>
          </div>
          <div className="deal-card">
            <img src={deall} alt="Weekend Getaways" />
            <h3>Weekend Getaways</h3>
            <p>Special weekend rates available. Explore new places for less!</p>
          </div>
          <div className="deal-card">
            <img src={deal1} alt="Last-Minute Deals" />
            <h3>Last-Minute Deals</h3>
            <p>Grab fantastic last-minute offers on flights. Hurry up!</p>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="travel-tips">
        <h2>Travel Tips</h2>
        <ul>
          <li>Pack light and smart to make your travel hassle-free.</li>
                   <li>Always carry a portable charger for your devices.</li>
                  <li>Make copies of important documents, such as your passport and ID.</li>
                  <li>Learn basic phrases in the local language of your destination.</li>
                  <li>Pack a reusable water bottle to stay hydrated and reduce waste.</li>
                  <li>Research local customs and etiquette before your trip.</li>
                  <li>Keep your valuables in a secure, hidden place while exploring.</li>
                  <li>Download offline maps for navigation without relying on data.</li>
          <li>Learn basic phrases of the local language to enhance your trip.</li>
        </ul>
      </section>

    </div>
  );
};

export default Tripsss;
