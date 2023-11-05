import DraggableImage from "../DraggableImage/DraggableImage";
import { HTML5Backend } from "react-dnd-html5-backend";
import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { AiFillPicture } from "react-icons/ai";

import Header from "../Header/Header";
import "./Gallary.css";

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
import toast, { Toaster } from "react-hot-toast";

const imagePaths = [
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
const Gallary = () => {
  const [imageOrder, setImageOrder] = useState(imagePaths);
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleCheckboxClick = (isSelected) => {
    if (isSelected) {
      setValue(value + 1);
    } else {
      setValue(value - 1);
    }
    setChecked(isSelected);
  };

  const handleDelete = (val) => {
    setValue(0);
  };

  const handleDrop = (fromIndex, toIndex) => {
    const updatedOrder = [...imageOrder];
    const [movedImage] = updatedOrder.splice(fromIndex, 1);
    updatedOrder.splice(toIndex, 0, movedImage);
    setImageOrder(updatedOrder);
  };
  const notify = () =>
    toast("Coming Soon, Thanks for being with Ollyo", {
      style: {
        backgroundColor: "#13a113",
        color: "#fff",
      },
    });
  return (
    <DndProvider backend={HTML5Backend}>
      <Header
        value={value}
        checked={checked}
        handleDelete={handleDelete}
      ></Header>
      <div className="image-grid">
        {imageOrder.map((imgPath, index) => (
          <DraggableImage
            key={index}
            imgPath={imgPath}
            index={index}
            onDrop={handleDrop}
            onCheckboxClick={handleCheckboxClick}
          ></DraggableImage>
        ))}
        <div className="simple-card">
          <button onClick={notify}>
            <AiFillPicture className="add-image" />
            <Toaster />
          </button>
          <h4>Add Images</h4>
        </div>
      </div>
    </DndProvider>
  );
};

export default Gallary;
