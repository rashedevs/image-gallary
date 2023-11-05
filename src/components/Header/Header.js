import React from "react";
import "./Header.css";

const Header = ({ value, checked }) => {
  const handleDeleteClick = () => {
    if (checked) {
      const elements = document.getElementsByClassName("checked-true");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
    }
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <div></div>
        <div>
          {value > 0 ? (
            <React.Fragment>
              <input type="checkbox" checked />
              <span>{`${value} Files Selected`}</span>
            </React.Fragment>
          ) : (
            <span>Gallery</span>
          )}
        </div>
      </div>
      <div className="header-right">
        {value > 0 ? (
          <React.Fragment>
            <span onClick={handleDeleteClick}>Delete Files</span>
          </React.Fragment>
        ) : (
          <span></span>
        )}
      </div>
    </header>
  );
};

export default Header;
