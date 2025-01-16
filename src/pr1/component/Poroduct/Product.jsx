import PropTypes from "prop-types";


export default function Product(props) {
  const defaultUrl =
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640";
  // console.log(props)
  const { name, url = defaultUrl, price=300 } = props;
  return (
    <div>
      <h2>Cookies</h2>
      <p>{name}</p>
      <img src={url} alt="Tacos With Lime" width="640" />
      <p>Price: {price} credits</p>
    </div>
  );
}


Product.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  price: PropTypes.number.isRequired,
};