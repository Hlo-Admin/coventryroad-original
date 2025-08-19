import React, { useState, useRef, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  width?: number;
  height?: number;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeSrc,
  afterSrc,
  width = 600,
  height = 320,
}) => {
  const [sliderPos, setSliderPos] = useState(width / 2);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const startDrag = () => {
    isDragging.current = true;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  const onDrag = (e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    let rect = containerRef.current.getBoundingClientRect();
    let posX = e.clientX - rect.left;
    if (posX < 0) posX = 0;
    if (posX > width) posX = width;
    setSliderPos(posX);
  };

  useEffect(() => {
    const onMouseUp = () => stopDrag();
    const onMouseMove = (e: MouseEvent) => onDrag(e);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative select-none mx-auto"
      style={{ width, height }}
      onMouseDown={startDrag}
    >
      {/* After Image (Full) */}
      <img
        src={afterSrc}
        alt="After"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-2xl shadow-xl"
      />
      {/* Before Image (Clipped) */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden rounded-2xl shadow-xl border-2 border-gray-100"
        style={{ width: sliderPos }}
      >
        <img
          src={beforeSrc}
          alt="Before"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          Before
        </div>
      </div>
      {/* After Label */}
      <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
        After
      </div>
      {/* Slider handle */}
      <div
        className="absolute top-0 h-full bg-white border-2 border-gray-300 rounded-full cursor-ew-resize shadow-lg"
        style={{
          left: sliderPos - 12,
          width: 24,
        }}
      />
    </div>
  );
};

export default BeforeAfterSlider;
