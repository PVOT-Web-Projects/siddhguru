import FormCommon from "../../components/formCommon/FormCommon";
import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <InnerPageCommonHeading heading={"Contact"} />
      <div className="contact_wrapper">
        <div className="contact_wrapper_left">
          <div className="heading">Keep in Touch</div>
          <div className="title">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="content">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </div>
        </div>
        <div className="contact_wrapper_right">
          <FormCommon />
        </div>
      </div>
    </div>
  );
};
export default Contact;
