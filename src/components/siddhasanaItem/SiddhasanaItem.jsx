import "./siddhasanaItem.scss";

const SiddhasanaItem = ({
  heading,
  text1,
  text2,
  text3,
  text4,
  text5,
  image,
}) => {
  return (
    <div className="SiddhasanaItem">
      <div className="SiddhasanaItem_wrapper">
        <h2>{heading}</h2>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{text4}</p>
        <p>{text5}</p>
      </div>
      <div className="SiddhasanaItem_image">
        <img src={image} alt="siddhasana" />
      </div>
    </div>
  );
};
export default SiddhasanaItem;
