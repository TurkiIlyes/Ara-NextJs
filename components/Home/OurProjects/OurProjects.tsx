import { fetchProject } from "@/utils/Api/projectAPi";
import ProjectBox from "./ProjectBox";
import { ProjectType } from "@/redux/Project/projectThunks";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/NextAuth/authOptions";
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
const OurProjects = async ({
  MDTRProjects,
  GDEEProjects,
}: {
  MDTRProjects: ProjectType[];
  GDEEProjects: ProjectType[];
}) => {
  const session = await getServerSession(authOptions);

  const isLogged = session?.user?.id ? true : false;
  return (
    <div className=" flex flex-col gap-14 ">
      {MDTRProjects.length > 0 && (
        <>
          <span className=" text-xl font-medium text-primary ">
            Monitoring et Digitalisation en Temps Réel
          </span>
          {MDTRProjects.map((item, i) => {
            return (
              <ProjectBox
                key={i}
                img={item.image}
                desc={item.name}
                type={item.type}
                index={i}
                id={item._id}
                isLogged={isLogged}
              />
            );
          })}
        </>
      )}
      {GDEEProjects.length > 0 && (
        <>
          <span className=" text-xl font-medium text-primary ">
            Gestion Digitale de l&lsquo;Énergie et de l&lsquo;Environnement
          </span>
          {GDEEProjects.map((item, i) => {
            return (
              <ProjectBox
                key={i}
                img={item.image}
                desc={item.name}
                type={item.type}
                index={i}
                id={item._id}
                isLogged={isLogged}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default OurProjects;
