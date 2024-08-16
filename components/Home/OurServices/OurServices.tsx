import { faCircleNodes ,faRobot, faLaptopCode, faMobileScreen} from "@fortawesome/free-solid-svg-icons";
import ServiceBox from "./ServiceBox";

const servicesData = [
  {
    title: "En Robotique",
    icon: faRobot,
    description:
      "Nous créons des solutions intelligentes et adaptées aux besoins spécifiques de nos clients.",
  },
  {
    title: "Grâce au Digital ",
    icon: faCircleNodes,
    description:
      "Nous intégrons des technologies innovantes pour optimiser l'efficacité et la précision des opérations.",
  },
  {
    title: "Applications Web",
    icon: faLaptopCode,
    description:
      "Développez des applications Web sur mesure pour répondre à vos besoins spécifiques et pointus.",
  },
  {
    title: "Applications Mobiles",
    icon: faMobileScreen,
    description:
      "Créez des applications mobiles adaptées à vos exigences précises et uniques.",
  },
];

const OurServices = () => {
  return (
    <div className=" grid grid-cols-[240px] sm:grid-cols-[240px,240px] justify-around gap-y-16 ">
      {servicesData.map((item, e) => {
        return (
          <ServiceBox
            key={e}
            title={item.title}
            icon={item.icon}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default OurServices;
