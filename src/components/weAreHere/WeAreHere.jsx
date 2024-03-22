import Button from "../buttons/button4";
import "./weAreHere.scss";

const WeAreHere = () => {
  return (
    <div className="weAreHere">
      <div className="weAreHere_wrapper">
        <div className="weAreHere_wrapper_heading">WE ARE HERE TO HELP YOU</div>
        <div className="weAreHere_wrapper_content">
          <p>
            We are living such a stressful life that taking a retreat has become
            a necessity. And trust us it is quite beneficial. We can relax and
            understand others and ourselves better. A retreat is an ideal way of
            relaxation amidst nature.
          </p>
          <div className="boldText">
            In the era of 5G lets get connected to 5E
          </div>
        </div>
        <ul>
          <li>
            <div className="index">1</div>
            <div className="text">Exploring Self</div>
          </li>
          <li>
            <div className="index">2</div>
            <div className="text">Energizing the Form</div>
          </li>
          <li>
            <div className="index">3</div>
            <div className="text">Elevating Thoughts</div>
          </li>
          <li>
            <div className="index">4</div>
            <div className="text">Empowering Soul</div>
          </li>
          <li>
            <div className="index">5</div>
            <div className="text">Experience of Silence</div>
          </li>
        </ul>
        <Button btn_text={"Contact Us"} link={"https://app.sribrahmrishiashram.org/devotee/login"} />
      </div>
    </div>
  );
};
export default WeAreHere;
