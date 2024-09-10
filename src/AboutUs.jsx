/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import { FaRegSmile, FaPlane, FaHotel, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../src/image/brand.png';
import logo1 from '../src/image/brand1.png';
import logo2 from '../src/image/brand3.png';
import logo3 from '../src/image/brand4.png';
import profile from '../src/image/image-thomas.jpg' ; 
import profile1 from "../src/image/image-emily.jpg";
import profile2 from '../src/image/image-jennie.jpg' ;
import { Link } from 'react-router-dom';
const AboutUs = () => {



  return (

    <div className="about-us">

      
      <motion.div 
        className="hero1-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className='Link-1 '>
        <Link to="/" className='Link1'>MOVE FAST</Link>
        <div className='buttonss'>
          <button className='btnn'>Login</button>
          <button className='btnn1'>Sign up</button>
        </div>
           </div>

        <h1>About Us</h1>
        <p>Your journey begins with us. Discover the world like never before.</p>
        <Link to='/trips'>  <motion.button
          className="btn3"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
 
       Start Your Adventure
        </motion.button>
        </Link>
      </motion.div>

      <div className="content-section ">
        <motion.div
          className="about-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2>Who We Are</h2>
          <p>
            Move Fast Travel is your go-to travel agency for unforgettable experiences. Our team of travel experts is committed to providing you with personalized service and unparalleled travel planning. Whether you're seeking adventure, relaxation, or cultural exploration, we have the perfect trip for you.
          </p>
        </motion.div>

        <motion.div
          className="our-story"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2>Our Story</h2>
          <p>
            Founded in 2010, Move Fast Travel started with a simple idea: to make travel accessible and enjoyable for everyone. Over the years, we have grown into a full-service travel agency with a team of passionate travel enthusiasts who are dedicated to creating unforgettable experiences for our clients.
          </p>
        </motion.div>

        <motion.div
          className="what-we-offer hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <h2>What We Offer</h2>
          <div className="offer-items ">
            <div className="offer-item">
              <FaRegSmile size={50} />
              <h3>Personalized Itineraries</h3>
              <p>Tailor-made travel plans just for you.</p>
            </div>
            <div className="offer-item">
              <FaPlane size={50} />
              <h3>Exclusive Deals</h3>
              <p>Get the best travel deals and discounts.</p>
            </div>
            <div className="offer-item">
              <FaHotel size={50} />
              <h3>Comprehensive Travel Support</h3>
              <p>We're here to assist you at every step.</p>
            </div>
          </div>
        </motion.div>


        <motion.div
          className="meet-the-team"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src= {profile} alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src={profile1} alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Travel Specialist</p>
            </div>
            <div className="team-member">
              <img src={profile2} alt="Team Member 3" />
              <h3>Hames Taylor</h3>
              <p>Customer Support</p>
            </div>
          </div>
        </motion.div>

<motion.div
  className="our-partners"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 3 }}
>
  <h2>Our Partners</h2>
  <p>We are proud to partner with some of the best names in the travel industry to bring you the best experiences:</p>
  <div className="partner-logos">
        <img src={logo} alt="Partner 1"  />    
         <img src={logo1} alt="Partner 2" />
         <img src={logo2} alt="Partner 3" />
         <img src={logo3} alt="Partner 4" />
  </div>

</motion.div>

        <motion.div
          className="contact-us"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <h2>Contact Us</h2>
          <p>If you have any questions or need more information, feel free to reach out to us:</p>
          <div className="contact-details">
            <div>
              <FaPhone size={30} className='faphone'/>
              <p>(123) 456-56789-560-7890</p>
            </div>
            <div>
              <FaEnvelope size={30} className='faenvelope'/>
              <p>info@movefasttravel.com</p>
            </div>
            <div className='icons'>
              <FaFacebook size={30} />
              <FaTwitter size={30} />
              <FaInstagram size={30} />
              <FaLinkedin size={30} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
