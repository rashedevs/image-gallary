import React from "react";
import "./Header.css";

const Header = ({ value, checked, handleDelete }) => {
  const handleDeleteClick = () => {
    if (checked) {
      const elements = document.getElementsByClassName("checked-true");

      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
    }
    handleDelete(0);
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <div></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {value > 0 ? (
            <React.Fragment>
              <input
                type="checkbox"
                checked
                style={{ height: "22px", width: "22px", marginRight: "10px" }}
              />
              {/* <span>{`   ${value}  "Files Selected"`}</span> */}
              <span>{`    ${value} File${value > 1 ? "s" : ""} Selected`}</span>
            </React.Fragment>
          ) : (
            <span>Gallery</span>
          )}
        </div>
      </div>
      <div className="header-right">
        {value > 0 ? (
          <React.Fragment>
            <span onClick={handleDeleteClick}>{`Delete file${
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
