import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import StatBox from "./StatBox";

const statsData = [
  {
    icon: faTruckFast,
    title: "12 Directs",
    subTitle: "09 Inderectes",
  },
  {
    icon: faTruckFast,
    title: "02 Offices",
  },
  {
    icon: faTruckFast,
    title: "28 Projets",
  },
  {
    icon: faTruckFast,
    title: "02 Vehicules d'assistance",
  },
];

const AraStats = () => {
  return (
    <div
      className=" relative bg-cover bg-center sm:px-12 md:px-16 py-14 rounded-sm"
      style={{ backgroundImage: `url(/Imgs/AraStats/stats.png)` }}
    >
      <div className="container flex justify-center flex-wrap max-sm:gap-6 ">
        {statsData.map((item, i) => {
          return (
            <StatBox
              key={i}
              icon={item.icon}
              title={item.title}
              subTitle={item.subTitle}
            />
          );
        })}
      </div>
      <div className=" absolute left-0 top-0 w-full h-full bg-[#00000099] rounded-sm "></div>
    </div>
  );
};

export default AraStats;
