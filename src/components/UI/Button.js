import React from "react";

const Button = function(props) {
  return (
    <button
      style={{
        display: "block",
        backgroundColor: "#010123",
        color: "#fff",
        marginBottom: "1.6rem",
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;
