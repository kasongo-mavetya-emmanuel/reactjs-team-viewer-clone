const PatnerItem = (props) => {
  return (
    <div>
      {props.icon}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href="#">&rarr;</a>
    </div>
  );
};

export default PatnerItem;
