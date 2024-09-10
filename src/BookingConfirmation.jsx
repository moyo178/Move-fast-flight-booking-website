import { Link } from 'react-router-dom';
const BookingConfirmation = () => {
  return (
    <>
  <div className="confirmation-container">
    <div className="animation-wrapper">
        <div className="circle"></div>
        <div className="tick">&#10004;</div>
    </div>
    <p className="confirmation-message">It&apos;s booked!</p>
    <p className='message-p'>Your Flight Has Been Booked,<Link to='/trips'> Return home</Link></p>
</div>



    
    </>
  );
};

export default BookingConfirmation;
