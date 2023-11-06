import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import "./DraggableImage.css";

const DraggableImage = ({
  imgPath,
  index,
  onDrop,
  onCheckboxClick,
  isChecked,
}) => {
  // State for tracking hover and drag
  const [isHovered, setIsHovered] = useState(false);

  // Define the item type for drag-and-drop
  const ItemType = "IMAGE";

  // Setup the drag-and-drop handler for dragging the image
  const [{ isDragging }, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  // Handle mouse hover events
  const handleHover = (hovered) => {
    setIsHovered(hovered);
  };

  // Setup the drop target for image reordering
  const [, drop] = useDrop({
    accept: ItemType,
    drop: (draggedItem) => onDrop(draggedItem.index, index),
  });

  // Handle checkbox click and update the checked state
  const handleCheckboxClicked = () => {
    onCheckboxClick(!isChecked, index);
  };

  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      ref={(node) => ref(drop(node))}
      className={`grid-item${index === 0 ? " wide" : ""} ${
        isChecked ? "checked-true" : ""
      }`}
    >
      <img
        src={imgPath}
        alt={`pic ${index + 1} ${isDragging ? "dragging" : ""}`}
      />

      {/* Display the checkbox if hovered or checked */}
      {(isHovered || isChecked) && (
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxClicked}
            className="check-box"
          />
        </div>
      )}
    </div>
  );
};

export default DraggableImage;
