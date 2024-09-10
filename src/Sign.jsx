import { useState } from 'react';
import { FaFacebook, FaGoogle, FaTwitter, FaUser, FaEnvelope, FaLock, FaPhone, FaGlobe } from 'react-icons/fa';


const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-left">
        </div>
        <div className="signup-right">
          <div className="form-wrapper">
            <h1>Join the Adventure</h1>
            <p>Sign up and discover exclusive deals tailored just for you!</p>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <FaUser className="icon" />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="input-group">
                <FaEnvelope className="icon" id='change'/>
                <input 
                  type="emaill" 
                  placeholder="Email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="input-group">
                <FaLock className="icon" />
                <input 
                  type="password" 
                  placeholder="Password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="input-group">
                <FaLock className="icon" />
                <input 
                  type="password" 
                  placeholder="Confirm Password" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="input-group">
                <FaPhone className="icon" />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="input-group">
                <FaGlobe className="icon" />
                <select 
                  name="country" 
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                </select>
              </div>
              <div className="terms">
                <input type="checkbox" required />
                <label>I agree to the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a></label>
              </div>
              <button type="submit" className="signup-button">Create Account</button>
            </form>
            <div className="social-signup">
              <p>Or sign up with:</p>
              <div className="social-icons">
                <FaFacebook className="social-icon facebook" />
                <FaGoogle className="social-icon google" />
                <FaTwitter className="social-icon twitter" />
              </div>
            </div>
            <p className="login-link">Already have an account? <a href="#">Log in</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
