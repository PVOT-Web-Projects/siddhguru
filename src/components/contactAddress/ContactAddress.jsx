import ContactAddressItem from "./ContactAddressItem";
import "./contactAddress.scss";

const contactAddressData = [
  {
    heading: "Address",
    address:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
  },
  {
    heading: "Address",
    address:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
  },
  {
    heading: "Address",
    address:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
  },
];

const ContactAddress = () => {
  return (
    <div className="contactAddress">
      <div className="contactAddress_wrapper">
        {contactAddressData.map((item, index) => (
          <ContactAddressItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
export default ContactAddress;
