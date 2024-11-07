import React from "react";
import illustrate from "../assets/illustrate.jpeg"; // Import your image
import RajshreeTungare from "../assets/document/RajshreeTungare.pdf"; // Import the PDF
export default function Hero() {

  const openResume = () => {
    window.open(RajshreeTungare, "_blank");
  };

  return (
    <section>
      <div className="container bg-linear">
        <div className="row d-flex justify-content-center align-items-center">
          {/* Left Column - Profile Info */}
          <div className="col text-center">
            <img
              src={illustrate}
              className="circle-image"
              alt="Rajshree Tungare"
            />
            <h1>Rajshree Tungare</h1>
            <h2>Web Developer</h2>
            <div>
              <button
                className="btn"
                onClick={() =>
                  (window.location.href =
                    "mailto:tungare.rajshree@gmail.com?subject=Are%20You%20Ready%20for%20the%20Best%20Email%20of%20Your%20Day%3F")
                }
              >
                Get in touch
              </button>
              <button className="btn" onClick={openResume}>
                Download Resume
              </button>
            </div>
          </div>

          <div className="col">
            <div className="border p-1">
              <div className="border-bottom button-container">
                <span className="button-red"></span>
                <span className="button-yellow"></span>
                <span className="button-green"></span>
              </div>
              <div className="row container">ju</div>
            </div>
          </div>
        </div>
      </div>
      <div className="construction-tape">
        <span>Under Construction</span>
      </div>
    </section>
  );
}
