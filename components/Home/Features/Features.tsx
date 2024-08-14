import { faTruckFast, faUserShield, faHandshakeSimple, faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import FeatureBox from "./FeatureBox";

const featuresData = [
  {
    title: "Durabilité et Responsabilité",
    icon: faUserShield,
    description:
      "ARA COMPANY intègre une vision de durabilité en développant des solutions qui favorisent l'efficacité énergétique et la réduction des déchets dans les processus industriels.",
  },
  {
    title: "Partenariats Stratégiques",
    icon: faHandshakeSimple,
    description:
      "Pour soutenir sa croissance, ARA COMPANY cherche à établir des partenariats stratégiques avec des acteurs clés de l'industrie. Ces alliances visent à élargir sa portée, à faciliter l'adoption de ses solutions et à créer un écosystème collaboratif propice à l'innovation.",
  },
  {
    title: "Leadership Technologique",
    icon: faPersonChalkboard,
    description:
      "ARA COMPANY vise à rester leader technologique en adoptant les dernières avancées de l'industrie 4.0. L'entreprise investit dans la recherche et le développement pour assurer que ses applications restent à la pointe de la technologie.",
  },
];

const Features = () => {
  return (
    <div className="container">
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-12 py-12 ">
        {featuresData.map((item, i) => {
          return (
            <FeatureBox
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Features;
