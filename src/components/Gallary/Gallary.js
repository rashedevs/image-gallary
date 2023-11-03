import React, { useEffect, useState } from "react";
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

const Gallary = () => {
  const [imageFilenames, setImageFilenames] = useState([]);
  const [showSelectBox, setShowSelectBox] = useState(false);
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

  useEffect(() => {
    //load images from the 'images' directory
    const loadImageFilenames = async () => {
      const imageContext = require.context(
        // "../../../public/assets/images",
        "../../assets/images",
        false,
        /\.(jpg|jpeg|png|gif|webp)$/
      );
      const filenames = imageContext.keys().map((key) => key.substring(2)); // Remove the './' prefix

      //   console.log(imageContext);
      setImageFilenames(filenames);
    };

    loadImageFilenames();
  }, []);

  return (
    <div className="gallary-container">
      {allImages.map(
        (imgPath, index) => (
          <>
            <img
              className={`grid-item${index === 0 ? " wide" : ""}`}
              src={imgPath}
              alt={`pic ${index + 1}`}
            />
          </>
        )
        // <div
        //   className={`grid-item${index === 0 ? " wide" : ""} ${
        //     showSelectBox ? "selected" : ""
        //   }`}
        //   onMouseEnter={() => setShowSelectBox(true)}
        //   onMouseLeave={() => setShowSelectBox(false)}
        //   key={index}
        // >
      )}
      {/* <div className="add-item">
        <img src="" alt={"Add New"} />
      </div> */}
    </div>
  );
};
export default Gallary;
