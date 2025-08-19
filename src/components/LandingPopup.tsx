import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const LandingPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds of page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 pt-16">
      <div className="relative bg-white rounded-lg max-w-md w-full mx-4 overflow-hidden shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Popup Content */}
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            £1000 OFF INVISALIGN WITH FREE TEETH-WHITENING
          </h2>

          <div className="bg-blue-100 rounded-lg p-4 mb-4">
            <p className="text-sm text-gray-700">
              Simply send us your smile photos using your smartphone and receive
              a £1000 discount on Invisalign with FREE Teeth-Whitening.
            </p>
          </div>

          {/* Image Placeholder - you can replace with actual image */}
          <div className=" h-64 flex items-center justify-center mb-4 rounded-lg">
            <img
              src="/popup.JPG"
              alt="Smile Consultation"
              className="max-h-full max-w-full object-cover"
            />
          </div>

          {/* CTA Button */}
          <Button
            onClick={handleClose}
            className="w-full bg-[#63316b] hover:bg-green-700 text-white font-bold py-3 rounded-lg"
          >
            YES, I WANT TO SAVE ON INVISALIGN
          </Button>

          <p className="mt-4 text-sm text-gray-500">
            Make 2025 the year in which you smile confidently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPopup;
