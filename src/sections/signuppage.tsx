import React from 'react';

import card2 from '../../public/cardnav.png';
import google from '../../public/Discord.png';
import card3 from '../../public/Frame 47641.png';
import card4 from '../../public/Frame 47640.png';
import facebook from '../../public/Dribbble.png';
import card1 from '../../public/card game crafter 2.png';
import logo from '../../public/assets/icons/logos/mainlogo.svg';

export default function Signuppage() {
  return (
    <div className="signin-container">
      {/* Background Cards */}
      <img src={card1} alt="Card 1" className="card1" />
      <img src={card2} alt="Card 2" className="card2" />
      <img src={card3} alt="Card 3" className="card3" />
      <img src={card4} alt="Card 4" className="card4" />

      {/* Left and Right Side */}
      <div className="signin-content">
        {/* Left Side */}
        <div className="signin-left">
          <img src={logo} alt="Logo" className="signin-logo" />
          <h1 className="signin-heading">
      <span>Design Your <strong>Card</strong></span><br />
          <strong><span>Game</span></strong>
    </h1>
          <p className="signin-subheading">
            Design Your Cards Game: Craft Mechanics<br /> With <strong>AI</strong> to bring it to Life.
          </p>
        </div>

        {/* Right Side */}
        <div className="signin-right">
          <form className="form-bg">
            <h2 className="form-title">Sign In</h2>
            <p className="form-subtitle">Sign in to stay connected.</p>

            <label>Email</label>
            <input type="email" className="input" />

            <label>Password</label>
            <input type="password" className="input" />

            <div className="form-row">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember"> Remember me?</label>
              </div>
              <p className="forgot">Forgot Password</p>
            </div>

            <button type="submit" className="signin-btn">Sign in</button>
            <p className="alt-signin">or sign in with other accounts?</p>

            <div className="social-icons">
              <img src={google} alt="Google" />
              <img src={facebook} alt="Facebook" />
            </div>

            <p className="signup-link">
              Don’t have an account? <a href="/src/sections/signuppage.tsx">Click here to sign up.</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
