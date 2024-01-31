import InnerPageCommonHeading from "../../components/innerPageCommonHeading/InnerPageCommonHeading";
import image from "../../images/siddhasanaImage.png";
import "./siddhasana.scss";

const Siddhasana = () => {
  return (
    <div className="siddhasana">
      <InnerPageCommonHeading
        heading={"The Power of Soul: Siddhasana Retreats"}
      />
      <div className="siddhasana_wrapper">
        <div className="siddhasana_wrapper_content">
          Embark on a transformative journey with Siddhasana, a flagship
          lifestyle programme guiding you through self-discovery and connection
          to your authentic self using the profound power of silence. Progress
          through seven carefully curated levels of this residential silence
          retreat, leaving each stage with heightened satisfaction and
          happiness. Experience Siddhasana through residential and international
          retreats, in-person sessions, and online workshops, making the
          programme accessible worldwide. This transformative journey not only
          releases emotional burdens but also fosters a life of freedom,
          emphasising the art of 'live and let live.' Open to participants over
          the age of 25, Siddhasana promotes overall health, empowering
          individuals to become their best selves. Join us in the serenity of
          silence, unlocking inner potential, and embracing a life filled with
          peace, joy, and self-empowerment.
        </div>
        <div className="siddhasana_wrapper_image">
          <img src={image} alt="siddhasana" />
        </div>
      </div>
    </div>
  );
};
export default Siddhasana;
