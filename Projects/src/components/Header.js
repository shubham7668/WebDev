import React from "react";

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em"
  };
  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "25px", textAlign:"center", marginBottom: "15px" }}>
        Sanusi Todo App
      </h1>
      <p style={{ fontSize: "19px", textAlign:"center" }}>
        Please add to-dos item(s) through the input field
      </p>
    </header>
  );
};

export default Header;
