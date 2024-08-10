import ProjectBox from "./ProjectBox";

const realtimeData = [
  {
    img: "/Imgs/OurProjects/Araner.png",
    desc: "Solution digitale de suivi de la consommation énergétique avec un outil d’aide à la décision intelligent",
  },
  {
    img: "/Imgs/OurProjects/Aradom.png",
    desc: "Solution digitale mobile dédiée pour la SMART building Suivi et pilotage des installations (air conditionné – Eclairage - accès – équipements de restauration - parking",
  },
  {
    img: "/Imgs/OurProjects/Aratrash.png",
    desc: "Manufacturing execution system [MES 4.0] Solution digitale de pilotage des processus industriels",
  },
];

const energyEnvData = [
  {
    img: "/Imgs/OurProjects/Arames.png",
    desc: "Manufacturing execution system [MES 4.0] Solution digitale de pilotage des processus industriels",
  },
  {
    img: "/Imgs/OurProjects/Aradis.png",
    desc: "ARADIS notre solution digitale de management 4.0 et de gestion Opérationnelle qui transformera la gestion des processus industriels grâce à une solution digitale avancée",
  },
];
const OurProjects = () => {
  return (
    <div className=" flex flex-col gap-14 ">
      <span className=" text-xl font-medium text-primary ">
        Monitoring et Digitalisation en Temps Réel
      </span>
      {realtimeData.map((item, i) => {
        return <ProjectBox key={i} img={item.img} desc={item.desc} index={i} />;
      })}
      <span className=" text-xl font-medium text-primary ">
        Gestion Digitale de l'Énergie et de l'Environnement
      </span>
      {energyEnvData.map((item, i) => {
        return <ProjectBox key={i} img={item.img} desc={item.desc} index={i} />;
      })}
    </div>
  );
};

export default OurProjects;
