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

import Image from "./../Image/Image";
import "./Gallary.css";

const Gallary = () => {
  const [imageFilenames, setImageFilenames] = useState([]);
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

  //   console.log("image filenames", imageFilenames);

  return (
    <div>
      <div className="gallary-container">
        <div className="image-container">
          {/* <p>Feature Image Here</p> */}
          {allImages.map((filename, index) => (
            <Image key={index} filename={filename}></Image>
          ))}
          {/* {imageFilenames.map((filename, index) => (
            <Image key={index} filename={filename}></Image>
          ))} */}
        </div>
      </div>
    </div>
  );
};
export default Gallary;
