import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom"; // import this for navigation

const LandingPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // initialize the navigate function

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  // This is the handler for the CTA button
  const handleButtonClick = () => {
    setIsOpen(false);
    window.open("https://invisalign.coventryroaddental.co.uk/", "_blank");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 pt-8">
      <div
        className="
          relative bg-white rounded-lg mx-2
          w-full max-w-[320px]
          sm:max-w-[350px]
          md:max-w-[400px]
          shadow-2xl overflow-auto p-3 sm:p-4
        "
        style={{ maxHeight: "90vh" }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Popup Content */}
        <div className="text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-primary">
            Save up to £1000 with FREE iTero scan, FREE 3D Simulation, FREE Whitening and FREE Retainers
          </h2>

          <div className="bg-blue-100 rounded-lg p-2 mb-3">
            <p className="text-xs sm:text-sm text-gray-700">
              Share your smile photos and save up to £1000 on Invisalign with free scan, whitening & retainers.
            </p>
          </div>

          {/* Responsive Image */}
          <div className="w-full h-28 sm:h-32 md:h-36 flex items-center justify-center mb-3 rounded-lg bg-gray-100">
            <img
              src="/popup.JPG"
              alt="Smile Consultation"
              className="h-full w-auto max-w-full object-cover rounded-lg"
            />
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleButtonClick}
            className="w-full bg-[#63316b] hover:bg-green-700 text-white font-bold py-2 rounded-lg"
          >
            YES, I WANT TO SAVE ON INVISALIGN
          </Button>

          <p className="mt-3 text-xs sm:text-sm text-gray-500">
            Make 2025 the year in which you smile confidently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPopup;
