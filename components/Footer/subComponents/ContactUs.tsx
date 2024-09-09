import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactUsBox from "./ContatcUsBox";

const ContactUs = () => {
  return (
    <div className=" max-sm:w-1/2 flex flex-col items-center gap-4 ">
      <h2 className=" text-xl font-normal text-grayscale-200">Contact Us</h2>
      <div className=" flex flex-col">
        <ContactUsBox icon={faPhone} dataOne="(+216) 54474734" />
        <ContactUsBox icon={faEnvelope} dataOne="aymen.abidi@ara-co.tn" />
        <ContactUsBox
          icon={faLocationDot}
          dataOne="Espace Tunis Bloc A 5eme etage, Montplaisir Tunis-Tunisie 1073"
        />
      </div>
    </div>
  );
};

export default ContactUs;
