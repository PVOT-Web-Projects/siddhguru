import ContactForm from "../../components/ContactForm/ContactForm";
import ContactAddress from "../../components/contactAddress/ContactAddress";
import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import Map from "../../map/Map";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <InnerPageCommonHeading heading={"Contact"} />
      <div className="contact_wrapper">
        <div className="contact_wrapper_left">
          <div className="heading">Connection & Devotion</div>
          <div className="title">
            {
              "Whether you seek guidance, have questions, or wish to share your experiences, we welcome you with open hearts."
            }
          </div>
          <div className="content">
            {
              "Feel free to reach out to us using the contact form below. Our dedicated team is here to assist you on your spiritual journey. Please allow us some time to respond, as we receive a significant volume of messages from our beloved devotees."
            }
          </div>
        </div>
        <div className="contact_wrapper_right">
          {/* <FormCommon /> */}
          <ContactForm />
        </div>
      </div>
      <ContactAddress />
      <Map />
    </div>
  );
};
export default Contact;
