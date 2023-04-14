import React from "react";

const H2Title = (props) => {
  return (
    <h2
      style={{
        fontSize: "4.8rem",
        color: `${props.color || "#010123"}`,
        fontWeight: "400",
        lineHeight: "1.3",
        marginBottom: "2.4rem",
      }}
    >
      {props.title}
    </h2>
  );
};

export default H2Title;
