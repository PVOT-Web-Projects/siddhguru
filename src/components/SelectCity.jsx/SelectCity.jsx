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
    link:
      "https://app.sribrahmrishiashram.org/devotee/login?eventId=14024a87-763c-42ae-b27c-2d686a52e49d",
  },
  {
    link:
      "https://app.sribrahmrishiashram.org/devotee/login?eventId=f2a7f312-fcf9-4957-97be-c28a0d540907",
  },
  {
    link:
      "https://app.sribrahmrishiashram.org/devotee/login?eventId=89b0e8a1-9061-45fb-9cdc-1e736e9ddc30",
  },
];

const eventData = [
  {
    id: 0,
    place: "Dubai, UAE",
    date: "",
    time: "",
    schedule: "",
    address1: "",
    address2: "",
    address3: "",
    address4: "",
    contactInfo: [
      {
        contactPerson: "Ashish Mehta",
        countryCode: "+91 ",
        contactNumber: "99400 99501",
      },
    ],
  },
  {
    id: 1,
    place: "Bangkok, Thailand",
    date: "17 March",
    time: "10:30 am onwards",
    schedule1: "10:30 am to 12 noon: Gurudev's Pravachan ",
    schedule2: "12:15 pm onwards: Prasadi",
    address1: "Dev Mandir",
    address2: "The Hindu Samaj Association,",
    address3: "136/ 1-2 Siripong Road,",
    address4: "Sao Chingcha, Bangkok 10200, Thailand.",
    link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=14024a87-763c-42ae-b27c-2d686a52e49d",
    contactInfo: [
      {
        contactPerson: "Vinay Kedia",
        countryCode: "+66 ",
        contactNumber: "81 844 5898",
      },
      {
        contactPerson: "OP Modi",
        countryCode: "+66 ",
        contactNumber: "81 829 0324",
      },
      {
        contactPerson: "Manish Lath",
        countryCode: "+66 ",
        contactNumber: "81 934 1053",
      },
      {
        contactPerson: "Saket Daga",
        countryCode: "+66 ",
        contactNumber: "81 499 2100",
      },
    ],
  },
  {
    id: 2,
    place: "Kuala Lumpur, Malaysia",
    date: "23 March",
    time: "10 am onwards",
    schedule: "",
    address1: "Laxmi Narayan Mandir",
    address2: "No. 68-69, Jalan Kasipillay,",
    address3: "Kampung Kasipillay 51200,",
    address4: "Kuala Lumpur, Malaysia.",
    link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=f2a7f312-fcf9-4957-97be-c28a0d540907",
    contactInfo: [
      {
        contactPerson: "Ujjwal Mehta",
        countryCode: "+60 ",
        contactNumber: "122 320 480",
      },
      {
        contactPerson: "Sheetal Mehta",
        countryCode: "+60 ",
        contactNumber: "162 050 480",
      },
      {
        contactPerson: "Datin Seri Kanagam",
        countryCode: "+60 ",
        contactNumber: "122 025 505",
      },
    ],
  },

  {
    id: 3,
    place: "Guangzhou, China",
    date: "30 March",
    time: "5 pm onwards",
    schedule1: "5 pm : Refreshments",
    schedule2: "6 pm : Bhajan",
    schedule3: "7 pm : Discourse",
    schedule4: "Programs followed by dinner at 9 pm",
    address1: "Banquet Hall - 3rd Floor,",
    address2: "Hotel Grand International 468,",
    address3: "Tianhe North Road,",
    address4: "Guangzhou - 510635, China.",
    link: "https://app.sribrahmrishiashram.org/devotee/login?eventId=89b0e8a1-9061-45fb-9cdc-1e736e9ddc30",
    contactInfo: [
      {
        contactPerson: "Anand Damani",
        countryCode: "+86 ",
        contactNumber: "138 0882 4477",
      },
      {
        contactPerson: "Anu Damani",
        countryCode: "+86 ",
        contactNumber: "138 0882 4406",
      },
    ],
  },
];

const images = [image1, image2, image3, image4];

const SelectCity = () => {
  const cities = [
    { name: "Dubai", id: 0 },
    { name: "Bangkok", id: 1 },
    { name: "Kuala Lumpur", id: 2 },
    { name: "Guangzhou (China)", id: 3 },
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
                  Asia Tour (Brahma Sparsh – A Divine Touch)
                </div>
                <div className="date">12th March to 30th March, 2024</div>
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
          console.log(values.city.id)
          return (
            
            (values.city.id === index ) && (index > 0 )&&
             (
              <Button link={item.link} key={index} btn_text="Register Now" />
            )
          );
        })}
      </div>
    </div>
  );
};
export default SelectCity;
