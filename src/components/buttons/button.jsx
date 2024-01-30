import { Link } from "react-router-dom";
import "./button.scss";

const Button = (props) => {
  return (
    <div>
      <Link
        to={props.link ? props.link : "#"}
        className="button-57"
        role="button"
      >
        <span className="text">{props.btn_text}</span>
        <span>{props.btn_text}</span>
      </Link>
    </div>
  );
};

export default Button;
