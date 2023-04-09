import React from "react";

const H4Title = function(props) {
  return (
    <h4
      style={{
        fontSize: "3.2rem",
        marginBottom: "2.5rem",
        color: "#010123",
        fontWeight: "400",
        lineHeight: "1.3",
      }}
    >
      {props.title}
    </h4>
  );
};

export default H4Title;
