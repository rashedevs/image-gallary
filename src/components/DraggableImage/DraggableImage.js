import { useDrag, useDrop } from "react-dnd";
import React, { useState } from "react";
import "./DraggableImage.css";

const DraggableImage = ({ imgPath, index, onDrop, onCheckboxClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const ItemType = "IMAGE";

  const [{ isDragging }, ref] = useDrag({
    type: ItemType,
    item: { index },
  });

  const handleHover = (hovered) => {
    setIsHovered(hovered);
  };

  const [, drop] = useDrop({
    accept: ItemType,
    drop: (draggedItem) => onDrop(draggedItem.index, index),
  });

  const handleCheckboxClicked = () => {
    setIsSelected(!isSelected);
    onCheckboxClick(!isSelected);
  };

  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      ref={(node) => ref(drop(node))}
      className={`grid-item${index === 0 ? " wide" : ""} ${
        isSelected ? "checked-true" : ""
      }`}
    >
      <img
        src={imgPath}
        alt={`pic ${index + 1} ${isDragging ? "dragging" : ""}`}
      />

      {(isHovered || isSelected) && (
        <div className="checkbox-container">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={handleCheckboxClicked}
            className="check-box"
          />
        </div>
      )}
    </div>
  );
};

export default DraggableImage;
