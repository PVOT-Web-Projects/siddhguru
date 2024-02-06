import "./map.scss";

const Map = () => {
  return (
    <div className="map">
      <div className="map_wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.9130008929383!2d72.23578497591512!3d24.557668357305797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cb49dc2e2fa0d%3A0x639cfee7d733715d!2sBrahmrishi%20Ashram%20Ravidham!5e0!3m2!1sen!2sin!4v1707216828695!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default Map;
