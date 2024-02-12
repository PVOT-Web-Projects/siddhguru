import ContactAddressItem from "./ContactAddressItem";
import "./contactAddress.scss";

const contactAddressData = [
  {
    heading: "Address",
    address: "Sri Sidheshwar Tirth R.C Road, C. Ramapuram, ",
    address2: " RC puram (Mandalam, Tirupati, Andhra Pradesh 517561",
  },
  {
    heading: "Contact",
    // address:
    //   "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
    number1: "08772247056",
    number2: "08772247056",
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
