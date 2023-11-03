import img1 from "../../assets/images/image-1.webp";
import img2 from "../../assets/images/image-2.webp";
import img3 from "../../assets/images/image-3.webp";
import img4 from "../../assets/images/image-4.webp";
import img5 from "../../assets/images/image-5.webp";
import img6 from "../../assets/images/image-6.webp";
import img7 from "../../assets/images/image-7.webp";
import img8 from "../../assets/images/image-8.webp";
import img9 from "../../assets/images/image-9.webp";
import img10 from "../../assets/images/image-10.jpeg";
import img11 from "../../assets/images/image-11.jpeg";

import "./Gallary.css";
import { useState } from "react";

const Gallary = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const allImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="gallary-container">
      {allImages.map((imgPath, index) => (
        <div
          key={index}
          className={`grid-item${index === 0 ? " wide" : ""}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img src={imgPath} alt={`pic ${index + 1}`} />
          {hoveredIndex === index && (
            <div className="overlay">
              <input type="checkbox" className="checkbox" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Gallary;
