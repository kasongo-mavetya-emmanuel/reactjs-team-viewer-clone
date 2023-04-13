import React from "react";

const Container = (props) => {
  return (
    <div style={{ maxWidth: "130rem", margin: "auto" }}>{props.children}</div>
  );
};

export default Container;
