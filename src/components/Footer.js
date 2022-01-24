import ReactDOM from "react-dom";
import React, { Component } from "react";

export default function Footer(props) {
  
var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "30px",
  width: "100%",
};
  return (
    <footer className="bg-dark text-center text-white">
    <div className="text-center p-3" style={style}>
      Linkedin:{" "}
      <a
        className="text-white"
        href="https://www.linkedin.com/in/guillermo-f-21035848/"
      >
        Guillermo Ferrer
      </a>
    </div>
  </footer>
  );
}
