import spinner from "../../images/spinner.gif";
import "./spinner.scss";

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner_wrapper">
        <img src={spinner} alt="spinner" />
      </div>
    </div>
  );
};
export default Spinner;
