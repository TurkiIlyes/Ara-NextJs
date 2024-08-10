import AboutUs from "./subComponents/AboutUs";
import QuickLinks from "./subComponents/QuickLinks";
import ContactUs from "./subComponents/ContactUs";
import OurMap from "./subComponents/OurMap";

const TopFooter = () => {
  return (
    <div className=" bg-grayscale-900">
      <div className="container ">
        <div className=" flex flex-wrap justify-between gap-y-6 min-h-[400px] py-14">
          <AboutUs />
          <QuickLinks />
          <ContactUs />
          <OurMap />
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
