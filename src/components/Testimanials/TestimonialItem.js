const TestimonialItem = (props) => {
  return (
    <div>
      <div>
        <div>{props.icon}</div>
        <img src={props.source} />
        <a>&rarr;</a>
      </div>
      <p>{props.description}</p>
    </div>
  );
};

export default TestimonialItem;
