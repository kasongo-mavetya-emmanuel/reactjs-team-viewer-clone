const SponsorShipItem = (props) => {
  return (
    <figure>
      <img src={props.logo}></img>
      <h2>props.title</h2>
      <a href="#">Learn more</a>
    </figure>
  );
};

export default SponsorShipItem;
