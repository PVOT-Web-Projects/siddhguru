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
    place: "New Jersey",
    date: "23rd June 2024",
    time: "",
    schedule: "",
    address1: "Vaswani Center,",
    address2: "494, Durie Ave,",
    address3: "Closter, NJ 07624.",
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
    // place: "Florida",
    // date: "17 March",
    // time: "10:30 am onwards",
    // schedule1: "10:30 am to 12 noon: Gurudev's Pravachan ",
    // schedule2: "12:15 pm onwards: Prasadi",
    // address1: "Dev Mandir",
    // address2: "The Hindu Samaj Association,",
    // address3: "136/ 1-2 Siripong Road,",
    // address4: "Sao Chingcha, Bangkok 10200, Thailand.",
    link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=14024a87-763c-42ae-b27c-2d686a52e49d",
    multipleEvents: [
      {
        place: "Florida",
        date: "28th June 2024",
        address1: "Ma Durga Sri Sai Baba Temple,",
        address2: "11414, S Apopka Vineland Rd",
        address3: "Orlando, FL 32836",
        ContactPerson: "Jignesh & Keral Kothari",
        email: "jigkot@att.net",
        // countryCode: "+66 ",
        contactNumber: "407-617-0750",
      },
      {
        place: "Florida",
        date: "29th June 2024",
        address1: "Hindu Temple Casselberry,",
        address2: "1994, E Lake Dr,",
        address3: "Casselberry, FL 32707",
        ContactPerson: "Rakhi Dewani",
        email: "rakhidewani@yahoo.com",
        // countryCode: "+66 ",
        contactNumber: "407-484-1372",
      },
      {
        place: "Florida",
        date: "30th June 2024",
        address1: "Hindu Sanatan Mandir Tampa,",
        address2: "311 E, Palm Ave,",
        address3: "Tampa, FL 33602",
        ContactPerson: "Assan Shahdadpuri",
        email: "sassan49@aol.com",
        // countryCode: "+66 ",
        contactNumber: "863-602-6561",
      },
      {
        place: "Florida",
        date: "2nd July 2024",
        address1:
          "Jacksonville Temple - Hindu Society of North East Florida (HSNEF),  ",
        address2: "4968, Greenland Road,",
        address3: "Jacksonville, FL 32258.",
        ContactPerson: "Ashish Parikh",
        email: "ashish@parikh.com",
        // countryCode: "+66 ",
        contactNumber: "904-994-0880",
      },
    ],
    // contactInfo: [
    //   {
    //     contactPerson: "Vinay Kedia",
    //     countryCode: "+66 ",
    //     contactNumber: "81 844 5898",
    //   },
    //   {
    //     contactPerson: "OP Modi",
    //     countryCode: "+66 ",
    //     contactNumber: "81 829 0324",
    //   },
    //   {
    //     contactPerson: "Manish Lath",
    //     countryCode: "+66 ",
    //     contactNumber: "81 934 1053",
    //   },
    //   {
    //     contactPerson: "Saket Daga",
    //     countryCode: "+66 ",
    //     contactNumber: "81 499 2100",
    //   },
    // ],
  },
  {
    id: 2,
    place: "Texas",
    date: "13th July 2024",
    // time: "10 am onwards",
    schedule: "",
    address1: "DFW Hindu Temple, 1605,",
    address2: "North Britain Road, Irving,",
    address3: " TX 75061",
    link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=f2a7f312-fcf9-4957-97be-c28a0d540907",
    contactInfo: [
      {
        contactPerson: "Pavan Agarwal",
        countryCode: "+60 ",
        contactNumber: "469-850-2244",
        email: "pavan.agrawal@gmail.com",
      },
    ],
  },

  {
    id: 3,
    place: "Washington",
    date: "16th July 2024",
    // time: "5 pm onwards",
    // schedule1: "5 pm : Refreshments",
    // schedule2: "6 pm : Bhajan",
    // schedule3: "7 pm : Discourse",
    // schedule4: "Programs followed by dinner at 9 pm",
    address1: "Sanatan Dharm Mandir Kent, ",
    address2: "27123, 104th Ave Se Kent,",
    address3: "WA 98030.",
    // address4: "Guangzhou - 510635, China.",
    link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=89b0e8a1-9061-45fb-9cdc-1e736e9ddc30",
    contactInfo: [
      {
        contactPerson: "Dr. Sanjay Shastri",
        // countryCode: "+86 ",
        contactNumber: "425-329-9314",
        email:"sanjayrshastri@yahoo.com",
      },
      
    ],
  },
];

const images = [image1, image2, image3, image4];

const UsaTourCity = () => {
  const cities = [
    { name: "New Jersey", id: 0 },
    { name: "Florida", id: 1 },
    { name: "Texas", id: 2 },
    { name: "Washington", id: 3 },
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
                <div className="date">20 June to 16 July 2024</div>
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
