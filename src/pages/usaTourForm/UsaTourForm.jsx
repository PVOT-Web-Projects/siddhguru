import InnerPageBanner from "../../components/innerPageBanner/InnerPageBanner";
import "./usaTourForm.scss";
import banner from "../../images/america-min.jpg"
import mobileBanner from "../../images/usa-tour-mobile-banner-min.jpg"

const UsaTourForm = () => {
  return (
    <>
    <InnerPageBanner image={banner} mobileImage={mobileBanner} />
    <div className="usa_tour_form">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdurV5pH-ozkPUUAp18K0Bjl0RRNs_wUkmH9dGAFm371iUSdg/viewform?embedded=true"
        width="800"
        height="1700"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
    </>
  );
};
export default UsaTourForm;
