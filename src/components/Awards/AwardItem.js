const AwardItem = (props) => {
  return (
    <div>
      <img src={props.source} />
      <p>props.description</p>
    </div>
  );
};

export default AwardItem;
