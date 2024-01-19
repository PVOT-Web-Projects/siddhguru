import "./devotee.scss";
import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import InnerPageCommonText from "../../components/innerPageCommonText/InnerPageCommonText";
import IconWithText from "../../components/iconWithText/IconWithText";
import Button from "../../components/buttons/button";
const Devotee = () => {
  return (
    <div className="devotee">
      <InnerPageCommonHeading heading={"Devotee"} />
      <InnerPageCommonText
        text1={
          "Step into the heartwarming realm of a digital celebration of the dedicated community of seekers. A virtual gathering of like-minded individuals, each thread of the community weaves a unique tale of their divine journey. Whether you're a seasoned devotee or just beginning your journey, it is an invitation to connect, find inspiration, and foster a sense of unity with fellow seekers."
        }
      />
      <IconWithText />
      <Button btn_text="Login" />
    </div>
  );
};
export default Devotee;
