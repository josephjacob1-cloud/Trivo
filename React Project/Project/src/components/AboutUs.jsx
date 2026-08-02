import React from "react";
import abt from '../assets/abt.jpg'
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate()
  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold " style={{color:'teal'}}>About Trivo World</h2>
          <p className="lead text-muted">
            Explore the world with confidence. We make every journey memorable.
          </p>
        </div>

        {/* About Section */}
        <div className="row align-items-center">

          {/* Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={abt}
              alt="About Trivo World"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Content */}
          <div className="col-lg-6">
            <h3 className="fw-bold mb-3">
              Your Trusted Travel Companion
            </h3>

            <p className="text-secondary">
              <strong>Trivo World</strong> is your trusted travel partner,
              helping you discover amazing destinations, unique experiences,
              and unforgettable adventures around the globe.
            </p>

            <p className="text-secondary">
              Whether you're planning a relaxing beach vacation, a thrilling
              mountain trek, a cultural heritage tour, or an international
              holiday, our platform connects you with carefully selected travel
              packages designed to suit every budget and travel style.
            </p>

            <p className="text-secondary">
              Our mission is to make travel planning simple, enjoyable, and
              affordable through an easy-to-use booking platform and reliable
              travel information.
            </p>

            <button className="btn btn-primary mt-3" onClick={(e)=>navigate('/packages')}>
              Explore Packages
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="row text-center mt-5">

          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h1>🌍</h1>
                <h5>100+ Destinations</h5>
                <p className="text-muted">
                  Explore famous places across the world.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h1>🛡️</h1>
                <h5>Trusted Service</h5>
                <p className="text-muted">
                  Reliable travel partners and secure bookings.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h1>💰</h1>
                <h5>Affordable Packages</h5>
                <p className="text-muted">
                  Budget-friendly tours with great experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h1>📞</h1>
                <h5>24/7 Support</h5>
                <p className="text-muted">
                  Assistance whenever you need it.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;