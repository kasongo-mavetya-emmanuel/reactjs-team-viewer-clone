import React from "react";

const H3Title = function(props) {
  return (
    <h3
      style={{
        fontSize: "1.4rem",
        fontWeight: "700",
        textTransform: "uppercase",
        color: ` ${props.color || "#fff"}`,
        marginBottom: "3rem",
        lineHeight: "1.14",
      }}
    >
      {props.title}
    </h3>
  );
};

export default H3Title;
