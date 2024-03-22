import "./map.scss";

const Map = () => {
  return (
    <div className="map">
      <div className="map_wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.5837872200036!2d79.39983117572932!3d13.56110510167877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4cc2af693b8f%3A0x52e51f46100d3090!2sShri%20Sidheshwar%20Tirth!5e0!3m2!1sen!2sin!4v1707232830206!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default Map;
