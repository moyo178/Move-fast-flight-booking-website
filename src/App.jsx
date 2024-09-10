import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from './image/search.svg'
import './App.css';
import Tab from './Tab';
import { trips } from "./trips";
import Trips from "./TripsCard";
import '@fortawesome/fontawesome-free/css/all.min.css';
import infoimg from "../src/image/new.png";
import mobile from "./image/new-mobile.png";
import stars from './image/grade.svg';
import noah from "./image/noah.png";
import noahs from "./image/noah-story.png";
import circle from "./image/man.png"
import circle1 from "./image/circle0.png"
import pretty from './image/image-thomas.jpg'
import taylor from './image/image-emily.jpg'
import jenny from './image/image-jennie.jpg'
import last from './image/girl.png';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutUs from './AboutUs';
import Joint from './Tripsss';
import Hotels from './Hotels';
import Contact from './Contact';
import Login from './Login';
import Sign from "./Sign";
import BookingConfirmation from './BookingConfirmation';
import facebook from './image/facebook.svg';
import insta from './image/insta.svg';
import twitter from './image/twitter.svg';
import youtube from './image/youtube.svg';
import phoneicon from './image/phone.svg';
import location from './image/location.svg';
import email from './image/email.svg';
function HomeContent() {
  useEffect(() => {
    const elements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, {
      threshold: 0.1
    });
    elements.forEach(element => observer.observe(element));
    return () => elements.forEach(element => observer.unobserve(element));
  }, []);

  const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    }   

    return (
    <>
      <section className="Header">
      <div className="container hidden">
          <div className='menu'>
            <div className='test-1'> 
           <div className='CT'>
                 <h1 className="header-title">MOVE FAST</h1> 
           </div>

      <div className='ct1'>
              <li className='dvs-header_trigger' onClick={toggleMenu}>
               <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}> 
               </i> 
            </li>
            </div>

          </div>
          <div className="search-bar">
            <input type="search" placeholder="Where to next, places, hotels..." />
            <img src={SearchIcon} alt="Search Icon" className="search-icon" />
          </div>
          

           <nav className={`nav-linkss hidden ${isOpen ? 'active' : ''}`}>
            <ul>
              
            <div className="flex self-center" id='nav-link_mobile-display'>

              <div>
              <i className='fas fa-info-circle custom-icon'></i>
              </div>
             
             <div className="self-center">
            <Link to="/about-us" className='Link-3'><li className="trying">About</li>
             </Link> 
                 </div>
             </div>
             <div className='line-1'></div>
          <div className='flex'  id='nav-link_mobile-display'>
            <div>
              <i className='fas fa-plane custom-icon'></i>
            </div>
            <div>
            <Link to='/Trips' className='Link-3' ><li className='trying'>Trips</li></Link>
            
            </div>
          </div>
              
          <div className='line-1'></div>
            <div className="flex"  id='nav-link_mobile-display'>
              <div>
          <i className='fas fa-hotel custom-icon'></i>        
              </div>

              <div>
              <Link to='/hotels' className='Link-3'> <li className='trying'>Hotels</li></Link> 
              </div>
            </div>
            
               <div className='line-1'></div>

               <div className='flex' id='nav-link_mobile-display'>
                <div>
                <i className='fas fa-comment custom-icon'></i>
                </div>

                <div>
              <Link to='/Contact'><li className='trying'>Contact Us</li></Link>  
                </div>
               </div>
              
              <div className='line-1'></div>
             
              <div className="search-barr">
                <i className='fas fa-search search-icon'></i>  
            <input type="search" placeholder="Where to next, places, hotels..." />
             
          </div>
            
            </ul>
          </nav>

           <nav className="nav-links">
          <ul>
            <li className='about-header'>
              <Link to="/about-us" className='Link-2'>About</Link>
            </li>
       <Link to="/Trips" className='Link-2'><li>Trips</li></Link> 
       <Link className="/hotel" className='Link-2'> <li>Hotels</li></Link>
          <Link to='/Contact' className='Link-2'><li>Contact Us</li></Link>  
          </ul>
        </nav> 

          <div className="buttons hidden">
          <Link to='/Login' className='Link-2'><button className="btn">Login</button></Link>  
            <button className="btn1">Sign up</button>
          </div>

           </div>
            </div>    

        <div className="header-body hidden">
          <h2>Explore Your Travel</h2>
          <h1>Discover Nigeria&apos;s Hidden Gem With Move Fast</h1>
          <h5  className="color-white">Experience the beauty of Nigeria through our curated trips that support local communities</h5>
          <div className="buttons1 hidden">
         <Link to="/about-us" className='Link-2'><button className="btn2">Learn More</button></Link>   
            <button className="btn3">Start Your Adventure</button>
          </div>
        </div>
        <div className="boxes">
          <div className="box hidden">
            <h1>01</h1>
            <h2>Personalized Itinerary</h2>
            <p>Let Us Create A Customized Itinerary Just For You, Tailored To Your Interests And Preferences.</p>
          </div>
          <div className="box hidden">
            <h1>02</h1>
            <h2>Personalized Itinerary</h2>
            <p>Let Us Create A Customized Itinerary Just For You, Tailored To Your Interests And Preferences.</p>
          </div>
          <div className="box hidden">
            <h1>03</h1>
            <h2>Personalized Itinerary</h2>
            <p>Let Us Create A Customized Itinerary Just For You, Tailored To Your Interests And Preferences.</p>
          </div>
        </div>
 </section>
      
        <section className='unimportant'> 
      <div className="App hidden">
          <Tab />
        </div>

        <div className='title'>
            <h1>Popular Trips</h1>
            <p>Discover handpicked adventures loved by fellow travelers</p>
          </div><div className='card-container hidden'>
            {trips.map((item) => (
              <Trips key={item.id} amount={item.amount} amounttag={item.amounttag} title={item.title} state={item.state} name={item.name} names={item.names} display={item.display} />
            ))}
          </div>
</section>

    <section className='Info-page hidden'>
    <img src={mobile} alt="" className='mobile-img'/>
    <div className='hope'>
      <div className='info-page_text'>
      <div>
      <h1>
      Unlock the Wonders of Nigeria with Move Fast
      </h1>

      <h4>
      At Move Fast. we believe that traveling is not about visiting new places, but about immersing yourself in the rich cultural tapestry of Nigeria. We curate immersive trips that showcase the country’s diverse attractions, foster sustainable tourism, and promote exploration.
      </h4>
      </div>

      <div className='info-page_text1'>
      <div>
      <h2>
      Immerse
      </h2>
      <p>
      Experiences the vibrant traditions, breath-taking landscapes, and warm hospitality of Nigeria.
      </p>
      </div>
      <div>
      <h2>
      Embark
      </h2>
      <p>
      Embark on unforgettable adventures to hidden gems and iconic landmark’s across Nigeria.
      </p>
      </div>
      </div>
    
<div className='CTI'>
<button className='info-page_button'>Learn More</button>
</div>
</div>

    <div className='images'>
    <img src={infoimg} alt="" className='info-img'/>
    </div>
  
</div>
  
    </section>

    <section className='reviews hidden'>
        <div className='reviews-title'>
        <h1>What Our Customers Say </h1>
        <h6>Read about the memorable travel experiences of our customers.</h6>
        </div>

        <div className='review-boxes hidden'>
          <div className='review-box1'>
            <img src={stars} alt="" className='review-stars'/>
            <p>
    Move Fast made my trip unforgettable! attention to detail and service. 
            </p>
       

              <div className='review-box_profile'>
               <img src={taylor} alt=""className='review-box_img4' />
              <div>
               <h3>Hames Taylor </h3>
               Tourist
              </div>
              
              </div>
          </div>
          <div className='review-box1'>
            <img src={stars} alt="" className='review-stars'/>
            <p>
                   Move Fast opened my eyes to the beauty&apos;s of nigeria&apos;s culture and landscapes. 
            </p>
       

              <div className='review-box_profile'>
               <img src={noahs} alt=""className='review-box_img' />
              <div>
               <h3>Noah Williams</h3>
               Traveller
              </div>
              
              </div>
          </div>
          <div className='review-box1'>
            <img src={stars} alt="" className='review-stars'/>
            <p>
            Move Fast made my vacation stress-free and enjoyable. 
            </p>
       

              <div className='review-box_profile'>
               <img src={jenny} alt=""className='review-box_img4' />
              <div>
               <h3>Isabella Grace Lee</h3>
               Tourist
              </div>
              
              </div>
          </div>
          <div className='review-box1'>
            <img src={stars} alt="" className='review-stars'/>
            <p>
          Great service and wonderful trip overall. Move Fast handled
            </p>
       

              <div className='review-box_profile'>
               <img src={pretty} alt=""className='review-box_img4' />
              <div>
               <h3>Noah Williams
               </h3>
               Traveller
              </div>
              
              </div>
          </div>
          <div className='review-box1'>
            <img src={stars} alt="" className='review-stars'/>
            <p>
                  Move Fast made my trip unforgettable! Everything was smooth .
            </p>
       

              <div className='review-box_profile'>
               <img src={noah} alt=""className='review-box_img' />
              <div>
               <h3>Gordon De Novak</h3>
               Traveller
              </div>
              
              </div>
          </div>
          <div className='review-box1'>
            <img src={stars} alt="" className='review-stars'/>
            <p>
                Fantastic experience with Move Fast! Well-organized tours and friendly guides.
            </p>
       

              <div className='review-box_profile'>
               <img src={last} alt=""className='review-box_img3' />
              <div>
               <h3>Liam Smith</h3>
               Traveller
              </div>
              
              </div>
          </div>
          <div className='review-box1'>
            <img src={stars} alt="" className='review-stars'/>
            <p>
                Wonderful service from Move Fast! The trip was perfectly planned.
            </p>
       

              <div className='review-box_profile'>
               <img src={circle} alt=""className='review-box_img1' />
              <div>
               <h3>Ethan Smith </h3>
               Traveller
              </div>
              
              </div>
          </div>
          <div className='review-box1'>
            <img src={stars} alt="" className='review-stars'/>
            <p>
                Move Fast made my travel memorable. Every aspect was well planned.
            </p>
       

              <div className='review-box_profile'>
               <img src={circle1} alt=""className='review-box_img2' />
              <div>
               <h3>Alex Moore</h3>
               Tourist
              </div>
              
              </div>
          </div>
        </div>

    </section>

    <section className='explore hidden'> 
            <h1>Discover Nigeria’s Cultural Wonders</h1>
            <p>Embark on immersive trips to experience the vibrant culture and breath-taking landscapes of Nigeria.</p>

          <div className="buttons1 hidden">
            <button className="btn2">Learn More</button>
            <button className="btn3">Start Your Adventure</button>
          </div>
    </section>

    <footer>
      <div className="footer">
        <div className='footer-1'>
          <h1>MOVE FAST</h1>
          <h5>At Move Fast, we offer a range of services to make yuor travel experience unforgettable. From personalized itineraries to guided tours and travel support, we have everything you need to explore Nigeria’s rich cultural tapestry.</h5>
          <div className='footer-icon'>
              <img src={facebook} alt="" />
              <img src={insta} alt="" />
              <img src={twitter} alt="" />
              <img src={youtube} alt="" />
          </div>
        </div>
        <div className='mob-dev'>
        <div className='footer-2'>
          <h1>Quick Links</h1>
          <div className='orange'> 
            
          <div className='orange-line1'></div>
          <div className='orange-line2'></div></div>
        <Link to="/about-us" className='Link-2'><li>About</li></Link>
            
       <Link to="/Trips" className='Link-2'><li>Trips</li></Link> 
       <Link className="/hotels" className='Link-2'> <li>Hotels</li></Link>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms Of Services</li>
        </div>
        <div className='footer-3'>
        <h1>Contact Us</h1>
          <div className='orange'> 
          <div className='orange-line1'></div>
          <div className='orange-line2'></div></div>
          <li>
            <img src={phoneicon} alt="" />
              <p>234 shagam Road, Lagos, Nigeria</p>
          </li>
          <li>
            <img src={location} alt="" />
              <p>+234(81002)7577, +234(04075)584953</p>
          </li>
          <li>
            <img src={email} alt="" />
              <p>MoveFastTravelCompany@gmail.com</p>
          </li>
        </div>
        </div>
      </div>
    </footer>

   
        </>
  );
}

function App () {
  return ( 
    <Router>
      <section className='bg'>
        <div>

          
          <Routes> 
            <Route path="/" element={<HomeContent />} />      
            <Route path="/about-us" element={ <AboutUs />} />
            <Route path="/Trips" element={< Joint />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/BookingConfirmation" element={<BookingConfirmation />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/sign-in/register" element={<Sign />} />
          </Routes>
        </div>
      </section>
    </Router>
  )
}


export default App     
