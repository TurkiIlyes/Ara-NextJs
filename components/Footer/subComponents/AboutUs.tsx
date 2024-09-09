import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaRoundedBox from "./SocialMediaRoundedBox";

const AboutUs = () => {
  return (
    <div className="  w-[310px] max-sm:w-full flex flex-col gap-5 max-sm:items-center ">
      <h1 className=" text-4xl font-bold text-white">ARA COMPANY</h1>
      <p className=" text-sm font-normal leading-loose text-white text-opacity-90">
        ARA COMPANY est un leader dans le développement d‘applications pour
        l‘industrie 4.0, la digitalisation, et la robotique.
      </p>
      <SocialMediaRoundedBox
        icon={faLinkedinIn}
        className="hover:bg-[#0077b5] text-[#0077b5]"
      />
    </div>
  );
};

export default AboutUs;
