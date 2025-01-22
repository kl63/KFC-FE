import React from 'react';
import './About.css';
import { assets } from '../../assets/assets'

const AboutUs = () => {
  return (
    <>
      
      <section className="about-us-section">
        <div className="about-us-container">
          <h1 className="about-us-title">About Us</h1>
          <p className="about-us-description">
            Welcome to Kevin's Fried Creations! Our mission is to deliver an exceptional dining experience by
            connecting food lovers with the best dishes in town. Whether you're craving comfort food,
            healthy options, or gourmet delights, we've got something for everyone.
          </p>
          <h2 className="about-us-subtitle">Our Mission</h2>
          <p className="about-us-description">
            At Kevin's Fried Creations, we aim to make exploring and enjoying food easier, more accessible, and
            fun. We are passionate about creating a platform that celebrates culinary diversity and
            brings people together through great food.
          </p>
          <h2 className="about-us-subtitle">Meet the Team</h2>
          <p className="about-us-description">
            Our team is composed of food enthusiasts, tech experts, and creative minds, all working
            together to bring you the ultimate food experience. We believe in innovation, quality, and
            a deep love for all things food.
          </p>
          <div className="team-cards">
            {/* CEO Card */}
            <div className="team-card ceo-card">
              <img src={assets.profile_icon} alt="Kevin Lin" className="team-card-image" />
              <h3 className="team-card-name">Kevin Lin</h3>
              <p className="team-card-role">Founder & CEO</p>
              <p className="team-card-bio">
                Passionate food lover and visionary, bringing people together through the joy of food.
              </p>
            </div>
            {/* Team Members Row */}
            <div className="team-row">
              <div className="team-card">
                <img src={assets.profile_icon} alt="Jessica Brown" className="team-card-image" />
                <h3 className="team-card-name">Jessica Brown</h3>
                <p className="team-card-role">Culinary Expert</p>
                <p className="team-card-bio">
                  Master chef with a love for creating unforgettable dishes that tantalize your taste buds.
                </p>
              </div>
              <div className="team-card">
                <img src={assets.profile_icon} alt="Mike Johnson" className="team-card-image" />
                <h3 className="team-card-name">Mike Johnson</h3>
                <p className="team-card-role">Tech Lead</p>
                <p className="team-card-bio">
                  Innovative tech guru, ensuring our platform is as smooth and delightful as our food.
                </p>
              </div>
              <div className="team-card">
                <img src={assets.profile_icon} alt="Sophia Martinez" className="team-card-image" />
                <h3 className="team-card-name">Sophia Martinez</h3>
                <p className="team-card-role">Marketing Specialist</p>
                <p className="team-card-bio">
                  Creative marketer, spreading the word about our passion for food far and wide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
