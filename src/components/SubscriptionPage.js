import React, { useState } from 'react';
import './SubscriptionPage.css';
import blogImage from '../assets/blog-image.jpg';

const SubscriptionPage = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [freeAccess, setFreeAccess] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSubscribe = () => {
    if (validateForm() && termsChecked) {
      setSubscribed(true);
      showSuccessMessage('You have successfully subscribed!');
    }
  };

  const handleUnsubscribe = () => {
    setSubscribed(false);
    showSuccessMessage('You have successfully unsubscribed.');
  };

  const handleFreeAccess = () => {
    if (validateForm() && termsChecked) {
      setFreeAccess(true);
      showSuccessMessage('You now have free access to the content!');
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (name.trim() === '') {
      setNameError('Please enter your name.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (email.trim() === '') {
      setEmailError('Please enter your email.');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email.');
      isValid = false;
    } else {
      setEmailError('');
    }

    return isValid;
  };

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const showSuccessMessage = (message) => {
    alert(message);
  };

  return (
    <div className="subscription-page">
      <nav className="navbar">
        <h1>The Nomadic Pen</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <header className="header">Voyage Luxuria: The Elite Wanderlust Club</header>
      <div>
          <img src={blogImage} alt="Blog" className="blog-image" />

          </div>
      <div className="content">
        <div className="blog-container">
          
          <div className="blog-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque diam, ultrices eu arcu sed, congue volutpat
              massa. Sed interdum velit sed luctus maximus. Fusce volutpat, urna et gravida feugiat, elit neque volutpat
              lacus, id consectetur sapien eros a dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque diam, ultrices eu arcu sed, congue volutpat
              massa. Sed interdum velit sed luctus maximus. Fusce volutpat, urna et gravida feugiat, elit neque volutpat
              lacus, id consectetur sapien eros a dolor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque diam, ultrices eu arcu sed, congue volutpat
              massa. Sed interdum velit sed luctus maximus. Fusce volutpat, urna et gravida feugiat, elit neque volutpat
              lacus, id consectetur sapien eros a dolor.
            </p>
          </div>
        </div>
        {!subscribed ? (
          <div className="form-container">
            <input
              type="text"
              placeholder=" Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p className="error">{nameError}</p>}
            <input
              type="email"
              placeholder=" Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error">{emailError}</p>}
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="terms"
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
              />
              <label htmlFor="terms">I agree to the Terms and Conditions</label>
            </div>
            <button onClick={handleSubscribe} className="subscribe-btn">
              Subscribe
            </button>
            <button onClick={handleFreeAccess} className="free-access-btn">
              Get Free Access
            </button>
          </div>
        ) : (
          <button onClick={handleUnsubscribe} className="unsubscribe-btn">
            Unsubscribe
          </button>
        )}
        {freeAccess && <p>You have free access to the content.</p>}
      </div>
      <footer className="footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SubscriptionPage;