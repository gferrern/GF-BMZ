import ReactDOM from "react-dom";
import React, { Component } from "react";

export default function SearchBar(props) {
  
var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "50px",
  position: "fixed",
  zIndex: 7,
  right: '0px',
  bottom: '0px',
  top: '0px',
  left: '0px',
  top: "0",
  height: "0px",
  width: "100%",
};
  return (
    <div className="bg-dark text-center text-white" style={style}>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search "
            name="s" 
        />
        <button type="submit">Search</button>
    </div>
  );
}
