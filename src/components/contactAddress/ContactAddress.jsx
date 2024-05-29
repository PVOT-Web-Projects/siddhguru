import { useContext } from "react";
import ContactAddressItem from "./ContactAddressItem";
import "./contactAddress.scss";
import LanguageContext from "../language/Language";

const contactAddressData = [
  {
    heading: "Address",
    address: "Sri Sidheshwar Tirth R.C Road, C. Ramapuram, ",
    address2: " RC puram Mandal, Near Tirupati, Andhra Pradesh 517561",
  },
  {
    heading: "Contact",
    // address:
    //   "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
    number1: "9866622049",
    number2: "8772247056",
    number3: "7207811011",
    number4: "8772247669",
  },
  {
    heading: "Get in Touch",
    // address:
    //   "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
    // mail1: "devotee@shribrahmarishi.org",
    // mail2: "info@brahamarishi.org",
    mail1: " enquiry.sbashram@gmail.com",
    mail2: "eesystem.sbashram@gmail.com",
  },
];

const contactAddressHindiData = [
  {
    heading: "पता:",
    address:
      "श्री सिद्धेश्वर तीर्थ, ब्रह्मर्षि आश्रम, आर. सी. रोड, सी. रामपुरम,",
    address2:
      "रामचंद्रपुरम मंडलम, तिरुपति के पास, आन्ध्र प्रदेश - 517561, भारत।",
  },
  {
    heading: "फोन:",
    // address:
    //   "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
    number1: "9866622049",
    number2: "8772247056",
  },
  {
    heading: "ई-मेल:",
    // address:
    //   "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
    mail1: "devotee@shribrahmarishi.org",
    mail2: "info@brahamarishi.org",
  },
];

const ContactAddress = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="contactAddress">
      <div className="contactAddress_wrapper">
        {(language === "en" ? contactAddressData : contactAddressHindiData).map(
          (item, index) => (
            <ContactAddressItem key={index} {...item} />
          )
        )}
      </div>
    </div>
  );
};
export default ContactAddress;
