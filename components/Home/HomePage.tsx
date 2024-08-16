import Hero from "@/components/Home/Hero/Hero";
import Features from "./Features/Features";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import SectionContainer from "./SectionContainer/SectionContainer";
import OurServices from "./OurServices/OurServices";
import OurProjects from "./OurProjects/OurProjects";
import OurClientsSwiper from "../Swiper/OurClients/OurClientsSwiper";
import AraStats from "./AraStats/AraStats";

import { fetchProject } from "@/utils/Api/projectAPi";

const HomePage = async () => {
  const projects = await fetchProject();
  const MDTRProjects = projects.filter((project) => project.type === "MDTR");
  const GDEEProjects = projects.filter((project) => project.type === "GDEE");
  console.log("OurProjects");
  console.log(MDTRProjects);
  console.log(GDEEProjects);
  return (
    <div className=" relative">
      <Hero />
      <div
        style={{
          backgroundImage: "url('/Imgs/back.png')",
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "repeat", // Prevents the image from repeating
        }}
      >
        <Features />
        <SectionContainer title="Qui Sommes Nous">
          <WhoWeAre />
        </SectionContainer>
        <SectionContainer title="Nos Activités">
          <OurServices />
        </SectionContainer>

        {projects.length > 0 && (
          <SectionContainer title="Nos Projets">
            <OurProjects
              MDTRProjects={MDTRProjects}
              GDEEProjects={GDEEProjects}
            />
          </SectionContainer>
        )}

        <SectionContainer title="Nos Clients">
          <OurClientsSwiper />
        </SectionContainer>
        <SectionContainer title="ARA on Chiffres">
          <AraStats />
        </SectionContainer>
      </div>
    </div>
  );
};

export default HomePage;
