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

// Define the image paths
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
  // Initialize state variables
  const [imageOrder, setImageOrder] = useState(imagePaths);
  const [value, setValue] = useState(0);
  const [checkedIndices, setCheckedIndices] = useState([]);

  // Handle checkbox click and update checked indices
  const handleCheckboxClick = (isSelected, index) => {
    const updatedCheckedIndices = [...checkedIndices];
    if (isSelected) {
      updatedCheckedIndices.push(index);
    } else {
      const indexToRemove = updatedCheckedIndices.indexOf(index);
      if (indexToRemove !== -1) {
        updatedCheckedIndices.splice(indexToRemove, 1);
      }
    }
    setCheckedIndices(updatedCheckedIndices);
    setValue(updatedCheckedIndices.length);
  };

  // Handle the delete action
  const handleDelete = () => {
    // Filter out checked items from the imageOrder
    const updatedOrder = imageOrder.filter(
      (_, index) => !checkedIndices.includes(index)
    );
    setImageOrder(updatedOrder);
    setCheckedIndices([]);
    setValue(0);
    confirmDelete();
  };

  // Handle image reordering
  const handleDrop = (fromIndex, toIndex) => {
    const updatedOrder = [...imageOrder];
    const [movedImage] = updatedOrder.splice(fromIndex, 1);
    updatedOrder.splice(toIndex, 0, movedImage);
    setImageOrder(updatedOrder);

    // Update checked indices after reordering
    const updatedCheckedIndices = checkedIndices.map((index) => {
      if (index === fromIndex) return toIndex;
      if (fromIndex < toIndex && index > fromIndex && index <= toIndex)
        return index - 1;
      if (fromIndex > toIndex && index >= toIndex && index < fromIndex)
        return index + 1;
      return index;
    });
    setCheckedIndices(updatedCheckedIndices);
  };

  // Notify user about actions
  const notify = () =>
    toast("Coming Soon. Stay with Ollyo", {
      style: {
        backgroundColor: "#27b82e",
        color: "#fff",
      },
    });

  // Confirm deletion to the user
  const confirmDelete = () =>
    toast("Successfully deleted", {
      style: {
        backgroundColor: "#cf2819",
        color: "#fff",
      },
    });

  return (
    <DndProvider backend={HTML5Backend}>
      <Header
        value={value}
        checked={checkedIndices.length > 0}
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
            isChecked={checkedIndices.includes(index)}
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
