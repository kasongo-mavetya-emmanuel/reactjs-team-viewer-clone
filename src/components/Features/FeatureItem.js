const FeatureItem = (props) => {
  return (
    <div>
      {props.icon}
      <h4>props.title</h4>
      <p>props.description</p>
    </div>
  );
};

export default FeatureItem;
