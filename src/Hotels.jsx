import { useState } from 'react';
import { motion } from 'framer-motion';
import room from './image/room.jpg';
import room1 from './image/room1.jpg';
import room2 from './image/room2.jpg';
const Hotels = () => {
  const [formData, setFormData] = useState({
    name: '',
    checkInDate: '',
    checkOutDate: '',
    guests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Request:\nName: ${formData.name}\nCheck-In: ${formData.checkInDate}\nCheck-Out: ${formData.checkOutDate}\nGuests: ${formData.guests}`);
  };

  return (
    <div className="hotels-wrapper">
      {/* Header */}
     

      {/* Hero Section */}
      <motion.div 
        className="hero-section" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      > 
      <header className="header">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          MoveFast
        </motion.div>
        <nav className="nav">
          <motion.a href="#rooms" whileHover={{ scale: 1.1 }}>Rooms</motion.a>
          <motion.a href="#booking" whileHover={{ scale: 1.1 }}>Booking</motion.a>
        </nav>
      </header>
        <motion.h1 
          className="hero-title"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          Discover Luxury Like Never Before
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Book your dream stay with Move Fast
        </motion.p>
        <motion.button 
          className="hero-button"
          onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.1, backgroundColor: '#555' }}
          transition={{ duration: 0.3 }}
        >
          Explore Now
        </motion.button>
      </motion.div>

      {/* Rooms Section */}
      <motion.div 
        className="rooms-section"
        id="rooms"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        <h2 className="section-title">Our Rooms</h2>
        <div className="rooms-grid">
          <motion.div 
            className="room-card"
            whileHover={{ scale: 1.05, boxShadow: '0px 5px 15px rgba(0,0,0,0.3)' }}
            onClick={() => alert('Luxury Suite Details')}
          >
            <img src={room} alt="Luxury Room" className="room-image" />
            <h3 className="room-title">Luxury Suite</h3>
            <p className="room-description">Experience the ultimate luxury with a view.</p>
            <motion.button 
              className="room-button"
              whileHover={{ scale: 1.1, backgroundColor: '#333' }}
              onClick={() => alert('Indulge in elegance with a spacious living area, stunning views, and a marble bathroom. Your perfect luxurious escape.')}
            >
              View Details
            </motion.button>
          </motion.div>
          <motion.div 
            className="room-card"
            whileHover={{ scale: 1.05, boxShadow: '0px 5px 15px rgba(0,0,0,0.3)' }}
            onClick={() => alert('Enjoy refined comfort with a stylish design, plush furnishings, and a well-appointed bathroom. Ideal for a sophisticated stay.')}
          >
            <img src={room1} alt="Deluxe Room" className="room-image" />
            <h3 className="room-title">Deluxe Room</h3>
            <p className="room-description">Comfort and elegance combined.</p>
            <motion.button 
              className="room-button"
              whileHover={{ scale: 1.1, backgroundColor: '#333' }}
              onClick={() => alert('Enjoy refined comfort with a stylish design, plush furnishings, and a well-appointed bathroom. Ideal for a sophisticated stay.')}
            >
              View Details
            </motion.button>
          </motion.div>
          <motion.div 
            className="room-card"
            whileHover={{ scale: 1.05, boxShadow: '0px 5px 15px rgba(0,0,0,0.3)' }}
            onClick={() => alert('Enjoy refined comfort with a stylish design, plush furnishings, and a well-appointed bathroom. Ideal for a sophisticated stay.')}
          >
            <img src={room2} alt="Single Room" className="room-image" />
            <h3 className="room-title">Single Room</h3>
            <p className="room-description">Perfect for solo travelers.</p>
            <motion.button 
              className="room-button"
              whileHover={{ scale: 1.1, backgroundColor: '#333' }}
              onClick={() => alert('Single Room Details')}
            >
              View Details
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Booking Section */}
      <motion.div 
        className="booking-section"
        id="booking"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <h2 className="section-title">Book Your Stay</h2>
        <motion.form 
          className="booking-form"
          onSubmit={handleSubmit}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            className="form-input" 
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input 
            type="date" 
            name="checkInDate"
            placeholder="Check-In Date" 
            className="form-input" 
            value={formData.checkInDate}
            onChange={handleChange}
            required
          />
          <input 
            type="date" 
            name="checkOutDate"
            placeholder="Check-Out Date" 
            className="form-input" 
            value={formData.checkOutDate}
            onChange={handleChange}
            required
          />
          <input 
            type="number" 
            name="guests"
            placeholder="Number of Guests" 
            className="form-input" 
            value={formData.guests}
            onChange={handleChange}
            required
          />
          <motion.button 
            className="form-button"
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: '#444' }}
          >
            Check Availability
          </motion.button>
        </motion.form>
      </motion.div>

    </div>
  );
}

export default Hotels;
