import PropTypes from "prop-types";

const ContactAddressItem = ({ heading, address }) => {
  return (
    <div className="contactAddressItem">
      <div className="heading">{heading}</div>
      <div className="address">{address}</div>
    </div>
  );
};
export default ContactAddressItem;

ContactAddressItem.propTypes = {
  heading: PropTypes.string,
  address: PropTypes.string,
};
