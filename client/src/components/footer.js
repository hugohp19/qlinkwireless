import React from 'react';
import '../style/components/footer/footer.scss';
import iLetter from '../assets/images/i-letter.png';
import notes from '../assets/images/notes.png';
import instagramLogo from '../assets/images/instagram.png';
import twitterLogo from '../assets/images/twitter.png';
import facebookLogo from '../assets/images/facebook.png';
import QLinkWhiteLogo from '../assets/images/QLink-whiteLogo.png';

const Footer = () => {
  return (
    <div className='footer-outer-container'>
      <div className='footer-container'>
        <div className='footer-leftContainer'>
          <div>
            <h4>Helpful Links</h4>
            <ul>
              <li>Home</li>
              <li>Support</li>
              <li>My Q Link / login</li>
              <li>Sign up</li>
              <li>Upload Proof</li>
              <li>Check Status</li>
              <li>Activate</li>
              <li>Coverage</li>
              <img src={QLinkWhiteLogo} alt='Q Link Logo'/>
            </ul>
          </div>
          <div>
            <h4>Lifeline Program</h4>
            <ul>
              <li>About Us</li>
              <li>About Lifeline</li>
              <li>Enroll for Lifeline</li>
              <li>Lifeline Plans</li>
              <li>Lifeline Features</li>
              <li>How Do I Qualify?</li>
              <li>FAQs/ Help Center</li>
            </ul>
          </div>
          <div>
            <h4>Get Connected</h4>
            <ul>
              <li><img src={facebookLogo} alt='facebook Logo'/> Like Us on Facebook!</li>
              <li><img src={twitterLogo} alt='Twitter Logo'/> Follow Us on Twitter!</li>
              <li><img src={instagramLogo} alt='Instagram Logo'/> Hang out with us on Instagram</li>
              <li><img src={notes} alt='notes Logo'/> See What We Have To Say</li>
              <li><img src={iLetter} alt='I letter Logo'/> Get Help Here</li>
            </ul>
          </div>
        </div>
        <div  className='footer-rightContainer'>
          <h4>Testimonials</h4>
          <p className='quote'>"Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Donec sollicitudin molestie malesuada."</p>
          <p className='author'>- Nikki M.</p>
          <p className='quote'>"Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Donec sollicitudin molestie malesuada."</p>
          <p className='author'>- Jackie C.</p>
        </div>
      </div>
      <div className='footer-rights'>
        <p>&#xa9; 2020 Q Link Wireless&#8482;. All Rights Reserved. Unsubscribe | Universal Forms | Privacy Policy | Terms & Conditions</p>
      </div>
    </div>
  )
}

export default Footer;
