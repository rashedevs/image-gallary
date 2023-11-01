import React, { useEffect, useState } from "react";
import Image from "./../Image/Image";
import "./Gallary.css";

const Gallary = () => {
  const [imageFilenames, setImageFilenames] = useState([]);

  useEffect(() => {
    //load images from the 'images' directory
    const loadImageFilenames = async () => {
      const imageContext = require.context(
        "../../../public/assets/images",
        false,
        /\.(jpg|jpeg|png|gif|webp)$/
      );
      const filenames = imageContext.keys().map((key) => key.substring(2)); // Remove the './' prefix
      setImageFilenames(filenames);
    };

    loadImageFilenames();
  }, []);

  console.log(imageFilenames);

  return (
    <div>
      <div className="gallary-container">
        <div className="image-container">
          <p>I will pass props here</p>
        </div>
      </div>
    </div>
  );
};
export default Gallary;
