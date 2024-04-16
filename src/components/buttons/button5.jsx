import { Link } from "react-router-dom";
import  "./button.scss";

const Button = (props) => {
  return (
    <div className="button5">
      <Link to="/Prāṇa_Vriddhi" className="button-60" target="_blank" role="button"><span className="text">{props.btn_text}</span><span>{props.btn_text}</span></Link>
    </div>
  )
}

export default Button