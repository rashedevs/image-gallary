import React from "react";
import "./Header.css";

const Header = ({ value, checked, handleDelete }) => {
  return (
    <header className="app-header">
      <div className="header-left">
        <div className="inner-content">
          {/* Display a checkbox and selected file count if value is greater than 0, otherwise display "Gallery" */}
          {value > 0 ? (
            <React.Fragment>
              <input type="checkbox" checked className="input-box" />
              <span>{`    ${value} File${value > 1 ? "s" : ""} Selected`}</span>
            </React.Fragment>
          ) : (
            <span>Gallery</span>
          )}
        </div>
      </div>
      <div className="header-right">
        {/* Display "Delete files" if value is greater than 0, otherwise display an empty span */}
        {value > 0 ? (
          <React.Fragment>
            <span onClick={handleDelete}>{`Delete file${
              value > 1 ? "s" : ""
            }`}</span>
          </React.Fragment>
        ) : (
          <span></span>
        )}
      </div>
    </header>
  );
};

export default Header;
