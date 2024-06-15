import { Link } from "react-router-dom";
import  "./button.scss";

const Button = (props) => {
  return (
    <div>
      <Link to={props.link} className="button-61" role="button" target="_blank"><span className="text">{props.btn_text}</span><span>{props.btn_text}</span></Link>
    </div>
  )
}

export default Button;