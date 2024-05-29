import PropTypes from "prop-types"

const ContactAddressItem = ({
  heading,
  address,
  address2,
  number1,
  number2,
  number3,
  number4,
  mail1,
  mail2,
}) => {
  return (
    <div className="contactAddressItem">
      {heading && <div className="heading">{heading}</div>}
      {address && <div className="address">{address}</div>}
      {address2 && <div className="address">{address2}</div>}
      {number1 && (
        <div className="number">
          <a href={`tel:${number1}`}>+91 {number1}</a>
        </div>
      )}
      {number2 && (
        <div className="number">
          <a href={`tel:${number2}`}>+91 {number2}</a>
        </div>
      )}
       {number3 && (
        <div className="number">
          <a href={`tel:${number3}`}>+91 {number3}</a>
        </div>
      )}
       {number4 && (
        <div className="number">
          <a href={`tel:${number4}`}>+91 {number4}</a>
        </div>
      )}
      {mail1 && (
        <div className="number">
          <a href={`mailto:${mail1}`}>{mail1}</a>
        </div>
      )}
      {mail2 && (
        <div className="number">
          <a href={`mailto:${mail2}`}>{mail2}</a>
        </div>
      )}
    </div>
  );
};
export default ContactAddressItem;

ContactAddressItem.propTypes = {
  heading: PropTypes.string,
  address: PropTypes.string,
  address2: PropTypes.string,
  number1: PropTypes.string,
  number2:PropTypes.string,
  number3: PropTypes.string,
  number4:PropTypes.string,
  mail1: PropTypes.string,
  mail2: PropTypes.string,
}
