import  "./button.scss";

const Button = (props) => {
  return (
    <div>
      <a href="#" className="button-58" role="button"><span className="text">{props.btn_text}</span><span>{props.btn_text}</span></a>
    </div>
  )
}

export default Button