// import Slider from "react-slick";
// import pic1 from "../../images/brahmSutraImage1.png";
// import { useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./bramhSutra.scss";
// const BrahmSutra = () => {
//   const [imgIndex, setImgIndex] = useState(0);
//   const images = [
//     {
//       pic: pic1,
//     },
//     {
//       pic: pic1,
//     },
//     {
//       pic: pic1,
//     },
//     {
//       pic: pic1,
//     },
//     {
//       pic: pic1,
//     },
//     {
//       pic: pic1,
//     },
//   ];
//   const settings = {
//     infinite: true,
//     centerMode: true,
//     centerPadding: "500px",
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     focusOnSelect: true,
//     beforeChange: (current, next) => setImgIndex(next),
//     responsive: [
//       {
//         breakpoint: 1025,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           centerPadding: "60px",
//           centerMode: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           centerPadding: "60px",
//           centerMode: true,
//         },
//       },
//       {
//         breakpoint: 476,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           centerPadding: "0px",
//           centerMode: true,
//         },
//       },
//     ],
//   };
//   return (
//     <div className="brahmSutra">
//       <div className="brahmSutra_wrapper">
//       <div className="orange_container"></div>
//         <Slider {...settings}>
//           {images.map((item, idx) => (
//             <div
//               key={idx}
//               className={idx === imgIndex ? "slide activeSlide" : "slide"}
//             >
//               <div className="card_content">
//                 <img src={item.pic} alt={item.heading} />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//     // </div>
//   );
// };
// export default BrahmSutra;
