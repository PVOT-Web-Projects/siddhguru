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
          <div className="heading">
            Stay connected with Gurudev's blessings!
          </div>
          <div className="title">
            {
              "Subscribe to our monthly newsletters and open the gateway to a world of spiritual wisdom. Immerse yourself in stories of Vedic science, unravel the daily learning lessons from Gurudev, and discover the transformative power of divine knowledge."
            }
          </div>
          <div className="content">
            {
              "By subscribing, you join a community that cherishes holistic well-being and a deeper connection to the profound teachings of Siddhguru. Let the newsletter be your guide on this sacred journey, offering insights, inspiration, and a continuous flow of Gurudev's blessings right to your inbox. Subscribe now and embark on a path of spiritual growth and enlightenment."
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
