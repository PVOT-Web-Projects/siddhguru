import ContactAddressItem from "./ContactAddressItem";
import "./contactAddress.scss";

const contactAddressData = [
  {
    heading: "Address",
    address: "Sri Siddeshwar Teerth Brahmrishi Ashram, Ravi, Gujarat",
  },
  {
    heading: "Contact",
    // address:
    //   "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
    number1: "918887776665",
    number2: "917776665554",
  },
  {
    heading: "Get in Touch",
    // address:
    //   "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
    mail1: "devotee@shribrahmarishi.org",
    mail2: "info@brahamarishi.org",
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
