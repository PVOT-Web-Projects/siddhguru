import "./button.scss";

const SubmitButton = (props) => {
  return (
    <div>
      <button type="submit" className="submitButton" role="button">
        <span className="text">{props.btn_text}</span>
        <span>{props.btn_text}</span>
      </button>
    </div>
  );
};

export default SubmitButton;
