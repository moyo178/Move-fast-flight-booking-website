import{ useState } from 'react';
import './App.css';
import languages from './languages';
import google from './image/google.svg';  
import eyeIcon from './image/eye.svg';
import eyeSlashIcon from './image/eyeslash.svg';
import { Link } from 'react-router-dom';

function Login() {
  const [selectedOption, setSelectedOption] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    const { name, value } = event.target;
    if (name === 'Email') setEmail(value);
    else if (name === 'pass') setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
    } else {
      setError('');
    }
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <section className='content'>
      <section className='content-2'>
          <div className='dropdown-container'>
            <select className='dropdown' value={selectedOption} onChange={handleChange}>
              {languages.map((language, index) => (
                <option key={index} value={language}>{language}</option>
              ))}
            </select>
          </div>

          <div className='sign-in'>
            <h3>Log in to Manage Your Bookings</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <h2>Email</h2>
                <input 
                  type="email" 
                  name="Email" 
                  id="input" 
                  value={email} 
                  onChange={handleChange} 
                  placeholder='name@gmail.com' 
                />
              </div>
              <div>
                <h2>Password</h2>
                <div className="password-input-container">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    name="pass" 
                    id="input" 
                    value={password} 
                    onChange={handleChange} 
                    placeholder='Password' 
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={togglePasswordVisibility}
                  >
                    <img 
                      src={showPassword ?eyeIcon  :eyeSlashIcon } 
                      alt={showPassword ? "Show password" : "Hide password"} 
                      className="eye-icon" 
                    />
                  </button>
                </div>

              </div>
              {error && <p className="error">{error}</p>}
              <button className='sign'>Sign In</button>
            </form>
          </div>
              
                <a href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1392336832%3A1710939478991131&theme=glif&ddm=0" className='no-line'>
                <button className='signG'>
             <img src={google} alt="" className='google'/>
               <h2>Sign up with Google</h2>
                 </button>
                </a>



          <div>
          </div>
        </section>
        <section className='content-1'> 
          <h2>NOT A MEMBER ? </h2>
          <h4>Not a member yet? Sign up now to access exclusive travel deals, personalized flight and hotel recommendations, and seamless booking management. 
        Join our community to keep track of your travel history, save your favorite destinations, and receive special offers tailored just for you. Start your journey with us and make every trip unforgettable!</h4>
        <Link to='/sign-in/register'>  <button className='Register'> Register/Sign in</button></Link>
        </section>

      
      </section>
    </>
  );
}

export default Login;
