import { Link } from "react-router-dom";
import  "./button.scss";

const Button = (props) => {
  return (
    <div className="btn3">
      <Link to={props.link ? props.link : "#"} target="blank" className="button-59" role="button"><span className="text">{props.btn_text}</span><span>{props.btn_text}</span></Link>
    </div>
  )
}

export default Button