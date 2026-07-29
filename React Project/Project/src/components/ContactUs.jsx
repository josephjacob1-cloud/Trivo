import React from "react";

const ContactUs = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold " style={{color:'teal'}}>Contact Us</h2>
          <p className="lead text-muted">
            We'd love to hear from you. Get in touch with Trivo World.
          </p>
        </div>

        <div className="row">

          {/* Contact Information */}
          <div className="col-lg-5 mb-4">
            <div className="card shadow border-0 h-100">
              <div className="card-body p-4">

                <h4 className="mb-4">Get In Touch</h4>

                <div className="mb-4">
                  <h6 className="" style={{color:'teal'}}>📍 Address</h6>
                  <p className="text-muted mb-0">
                    Trivo World Travels<br />
                    Thrissur, Kerala<br />
                    India - 680001
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="" style={{color:'teal'}}>📞 Phone</h6>
                  <p className="text-muted mb-0">
                    +91 98765 43210
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="" style={{color:'teal'}}>✉ Email</h6>
                  <p className="text-muted mb-0">
                    info@trivoworld.com
                  </p>
                </div>

                <div>
                  <h6 className="" style={{color:'teal'}}>🕒 Office Hours</h6>
                  <p className="text-muted mb-0">
                    Monday - Saturday<br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div className="card shadow border-0">
              <div className="card-body p-4">

                <h4 className="mb-4">Send a Message</h4>

                <form>

                  <div className="row">

                    <div className="col-md-6 mb-3">
                      <label className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>

                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn text-white px-4"
                    style={{backgroundColor:'teal'}}
                  >
                    Send Message
                  </button>

                </form>

              </div>
            </div>
          </div>

        </div>

        {/* Google Map Placeholder */}
        <div className="mt-5">
          <div className="card border-0 shadow">
            <div className="card-body p-0">

              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Thrissur,Kerala&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;