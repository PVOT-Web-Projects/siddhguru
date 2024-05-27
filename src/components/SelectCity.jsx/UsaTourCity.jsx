import { Dropdown } from "primereact/dropdown";
import { useFormik } from "formik";
import "./selectCity.scss";
import image1 from "../../images/dubai.jpg";
import image2 from "../../images/bangkok.jpg";
import image3 from "../../images/kaula.jpg";
import image4 from "../../images/gaunzaho.jpg";
import defaultImage from "../../images/AsiaTour.jpeg";
import Button from "../buttons/button4";
import EventImage from "./EventImage";
import EventsDetails from "./EventsDetails";
const links = [
  {
    link: "",
  },
  {
    link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=14024a87-763c-42ae-b27c-2d686a52e49d",
  },
  {
    link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=f2a7f312-fcf9-4957-97be-c28a0d540907",
  },
  {
    link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=89b0e8a1-9061-45fb-9cdc-1e736e9ddc30",
  },
];

const eventData = [
  {
    id: 0,
    place: "Closter, New Jersey",
    date: "23rd June 2024",
    time: "",
    schedule: "",
    address1: "Vaswani Center,",
    address2: "494, Durie Ave,",
    address3: "Closter, NJ 07624.",
    // address4: "",
    link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=f2ea1469-cfd9-42dd-aa85-089ed63b2e56",
    contactInfo: [
      {
        contactPerson: "Arvind Modi",
        // countryCode: "+91 ",
        contactNumber: "917-981-0967",
        email: "aaamodi@gmail.com",
      },
      {
        contactPerson: "Ajay Thakor",
        // countryCode: "+91 ",
        contactNumber: "973-303-8389",
        email: "ajaythakor@gmail.com",
      },
    ],
  },
  {
    id: 1,
    place: "Orlando, Florida",
    date: "28th June 2024",
    // time: "10:30 am onwards",
    // schedule1: "10:30 am to 12 noon: Gurudev's Pravachan ",
    // schedule2: "12:15 pm onwards: Prasadi",
    address1: " Ma Durga Sri Sai Baba Temple,",
    address2: "11414, S Apopka Vineland Rd,",
    address3: " Orlando, FL 32836.",
    // address4: "Sao Chingcha, Bangkok 10200, Thailand.",
    link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=a4e48c1e-8984-4db2-adfe-737047db1164",
    contactInfo: [
      {
        contactPerson: "Jignesh & Keral Kothari",
        // countryCode: "+66 ",
        contactNumber: "407-617-0750",
        email: "jigkot@att.net",
      },
    ],
  },
  {
    id: 2,
    place: "Casselberry, Florida",
    date: "29th June 2024",
    // time: "10:30 am onwards",
    // schedule1: "10:30 am to 12 noon: Gurudev's Pravachan ",
    // schedule2: "12:15 pm onwards: Prasadi",
    address1: "Hindu Temple Casselberry,",
    address2: "1994, E Lake Dr, Casselberry,",
    address3: "FL 32707.",
    // address4: "Sao Chingcha, Bangkok 10200, Thailand.",
    link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=8e2e8ca9-a047-4e34-bd2d-ed3ce0a56514",
    contactInfo: [
      {
        contactPerson: "Rakhi Dewani",
        // countryCode: "+66 ",
        contactNumber: "407-484-1372",
        email: "rakhidewani@yahoo.com",
      },
    ],
  },
  {
    id: 3,
    place: "Tampa, Florida",
    date: "30th June 2024",
    // time: "10:30 am onwards",
    // schedule1: "10:30 am to 12 noon: Gurudev's Pravachan ",
    // schedule2: "12:15 pm onwards: Prasadi",
    address1: " Hindu Sanatan Mandir Tampa, ",
    address2: "311 E, Palm Ave,",
    address3: "Tampa, FL 33602.",
    // address4: "Sao Chingcha, Bangkok 10200, Thailand.",
    link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=7ea0d682-7a6c-44ef-ba2e-f6417fa06130",
    contactInfo: [
      {
        contactPerson: "Assan Shahdadpuri",
        // countryCode: "+66 ",
        contactNumber: "863-602-6561",
        email: "sassan49@aol.com",
      },
    ],
  },
  {
    id: 4,
    place: "Jacksonville, Florida",
    date: "2nd July 2024",
    // time: "10:30 am onwards",
    // schedule1: "10:30 am to 12 noon: Gurudev's Pravachan ",
    // schedule2: "12:15 pm onwards: Prasadi",
    address1: "Jacksonville Temple - Hindu Society of North,",
    address2: "East Florida (HSNEF),",
    address3: "4968, Greenland Road,",
    address4: "Jacksonville, FL 32258.",
    link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=8517e425-c54f-4ddf-aa52-32bb1a2bf754",
    contactInfo: [
      {
        contactPerson: "Ashish Parikh",
        // countryCode: "+66 ",
        contactNumber: "904-994-0880",
        email: "ashish@parikh.com",
      },
    ],
  },
  {
    id: 5,
    place: " Irving, Texas",
    date: "13th July 2024",
    // time: "10 am onwards",
    // schedule: "",
    address1: "Dallas - DFW Hindu Temple,",
    address2: "1605, North Britain Road,",
    address3: " Irving, TX 75061.",
    // address4: "Kuala Lumpur, Malaysia.",
    link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=a4357a40-6199-42e8-bd40-d5c28922bf5b",
    contactInfo: [
      {
        contactPerson: "Pavan Agarwal",
        // countryCode: "+60 ",
        contactNumber: "469-850-2244",
        email: "pavan.agrawal@gmail.com",
      },
    ],
  },

  {
    id: 6,
    place: "Kent, Washington",
    date: "16th July 2024",
    // time: "5 pm onwards",
    // schedule1: "5 pm : Refreshments",
    // schedule2: "6 pm : Bhajan",
    // schedule3: "7 pm : Discourse",
    // schedule4: "Programs followed by dinner at 9 pm",
    address1: " Sanatan Dharm Mandir Kent,",
    address2: "27123, 104th Ave Se Kent,",
    address3: "WA 98030.",
    // address4: "Guangzhou - 510635, China.",
    link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=c07805af-a9fb-4eb2-bd24-5ced40767378",
    contactInfo: [
      {
        contactPerson: "Dr. Sanjay Shastri",
        // countryCode: "+86 ",
        contactNumber: "425-329-9314",
        email: "sanjayrshastri@yahoo.com",
      },
    ],
  },
];

const images = [image1, image2, image3, image4];

const UsaTourCity = () => {
  const cities = [
    { name: "Closter, New Jersey", id: 0 },
    { name: "Orlando, Florida", id: 1 },
    { name: "Casselberry, Florida", id: 2 },
    { name: "Tampa, Florida", id: 3 },
    { name: "Jacksonville, Florida", id: 4 },
    { name: "Irving, Texas", id: 5 },
    { name: "Kent, Washington", id: 6 },
  ];
  const initialValue = {
    city: "",
  };
  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: initialValue,
    onSubmit: (value, action) => {
      console.log("value", value);
      action.resetForm();
    },
  });
  console.log(values);
  return (
    <div className="selectCity">
      <h3 className="selectHeading">
        Discover how Brahm Sparsh can enrich your life by selecting your city
        and exploring event details.
      </h3>
      <div className="selectWrapper">
        <div className="eventDropdown">
          <form onSubmit={handleSubmit}>
            <div className="formField">
              <Dropdown
                options={cities}
                name="city"
                optionLabel="name"
                placeholder="Select City"
                className="siddhguru_dropdown_menu"
                id={values.id}
                onChange={handleChange}
                value={values.city}
              />
              {touched.language && errors.language && (
                <p className="error">{errors.language}</p>
              )}
            </div>
          </form>
          <div className="eventDetail">
            {values.city.id >= 0 ? (
              eventData.map(
                (item, index) =>
                  values.city.id === item.id && (
                    <EventsDetails key={index} {...item} />
                  )
              )
            ) : (
              <div className="defaultValue">
                <div className="default_heading">
                  USA Tour (Brahma Sparsh – A Divine Touch)
                </div>
                <div className="date"> 20 June to 16 July 2024</div>
              </div>
            )}
          </div>
        </div>
        <div className="cityBanner">
          <div className="eventCityBannerImage">
            {values.city.id >= 0 ? (
              images.map(
                (item, index) =>
                  values.city.id === index && (
                    <EventImage image={item} key={index} />
                  )
              )
            ) : (
              <div className="defaultImage">
                <img src={defaultImage} alt="bannerImage" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mobileLink">
        {links.map((item, index) => {
          console.log(values.city.id);
          return (
            values.city.id === index &&
            index > 0 && (
              <Button link={item.link} key={index} btn_text="Register Now" />
            )
          );
        })}
      </div>
    </div>
  );
};
export default UsaTourCity;
