import React from "react";
import Navbar from "./Navbar";

const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: "#333",
    borderBottom: `1px solid ${styles.black(0.1)}`,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box",
    color: "#fff"
  };

  return (
    <div style={topBarStyle}>
      <span> < Navbar /> </span>
      App
      <span>{`⚙️`}</span>
    </div>
  );
};

export default TopBar;