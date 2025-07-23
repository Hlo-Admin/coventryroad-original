import React from "react";

const Marquee: React.FC = () => {
  const marqueeItems = Array.from({ length: 8 }); // Adjust the number for more/less repetition

  const marqueeContent = (
    <>
      {marqueeItems.map((_, idx) => (
        <React.Fragment key={idx}>
          <img
            src="/logo.png"
            alt="Coventry Road Dental Care Logo"
            className="h-10 w-40 mr-4"
          />
          <span className="text-2xl font-bold text-[#63316b] tracking-wide mr-8">
            Welcome to Coventry Road Dental Care
          </span>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div className="relative w-full overflow-hidden bg-[#ffffff] py-8">
      <div className="animate-marquee whitespace-nowrap flex">
        {marqueeContent}
        {marqueeContent} {/* Duplicate for seamless infinite scroll */}
      </div>
    </div>
  );
};

export default Marquee;
