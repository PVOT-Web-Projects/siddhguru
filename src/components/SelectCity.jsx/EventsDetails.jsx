import { Link } from "react-router-dom";
import Button from "../buttons/button4";
import PropTypes from "prop-types";

    const EventsDetails = ({
        place,
        date,
        time,
        schedule1,
        schedule2,
        schedule3,
        schedule4,
        address1,
        address2,
        address3,
        address4,
        contactInfo,
        link,
      }) => {
        return (
          <div className="eventsDetails">
            <div className="eventsDetails_wrapper">
              <div className="placeDateTime">
                {place && <div className="eventPlace">Place : {place}</div>}
                {date && <div className="eventDate">Date : {date}</div>}
                {time && <div className="eventTime">Time : {time}</div>}
              </div>
              {(schedule1 || schedule2 || schedule3 || schedule4) && (
                <div className="schedule">
                  <div className="label">Schedule</div>
                  {schedule1 && <div className="schedule_wrap">{schedule1}</div>}
                  {schedule2 && <div className="schedule_wrap">{schedule2}</div>}
                  {schedule3 && <div className="schedule_wrap">{schedule3}</div>}
                  {schedule4 && <div className="schedule_wrap">{schedule4}</div>}
                </div>
              )}
              {(address1 || address2 || address3 || address4) && (
                <div className="address">
                  <div className="label">Address</div>
                  {address1 && <div className="address_wrap">{address1}</div>}
                  {address2 && <div className="address_wrap">{address2}</div>}
                  {address3 && <div className="address_wrap">{address3}</div>}
                  {address4 && <div className="address_wrap">{address4}</div>}
                </div>
              )}
              {contactInfo && (
                <div className="contactInfo">
                  <div className="label">Contact</div>
                  {contactInfo.map((item, index) => (
                    <div className="contactInfo_wrap" key={index}>
                      <div className="contactPerson">{item.contactPerson} : </div>
                      <div className="contactNumber">
                        <Link
                          to={`tel:${item.contactNumber}`}
                        >{`${item.countryCode} ${item.contactNumber}`}</Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {link && (
              <div className="register">
                <Button link={link} btn_text="Register Now" />
              </div>
            )}
          </div>
        );
      };
    export default EventsDetails
    EventsDetails.propTypes = {
      date: PropTypes.string,
      place: PropTypes.string,
      time: PropTypes.string,
      schedule1: PropTypes.string,
      schedule2: PropTypes.string,
      schedule3: PropTypes.string,
      schedule4: PropTypes.string,
      address1: PropTypes.string,
      address2: PropTypes.string,
      address3: PropTypes.string,
      address4: PropTypes.string,
      contactInfo: PropTypes.array,
      link: PropTypes.any,
    };