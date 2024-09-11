import Hero from "@/components/Home/Hero/Hero";
import Features from "./Features/Features";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import SectionContainer from "./SectionContainer/SectionContainer";
import OurServices from "./OurServices/OurServices";
import OurProjects from "./OurProjects/OurProjects";
import OurClientsSwiper from "../Swiper/OurClients/OurClientsSwiper";
import AraStats from "./AraStats/AraStats";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { fetchProject } from "@/utils/Api/projectAPi";
import ContactUs from "./ContactUs/ContactUs";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/NextAuth/authOptions";
import UpButton from "../Common/UpButton";
const HomePage = async () => {
  const session = await getServerSession(authOptions);
  const isLogged = session?.user?.id ? true : false;
  const projects = await fetchProject();
  const MDTRProjects = projects.filter((project) => project.type === "MDTR");
  const GDEEProjects = projects.filter((project) => project.type === "GDEE");
  return (
    <div className=" relative">
      <Hero />
      <div
        style={{
          backgroundImage: "url('/Imgs/back.png')",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <Features />
        <SectionContainer id="about" title="Qui Sommes Nous">
          <WhoWeAre />
        </SectionContainer>
        <SectionContainer id="activites" title="Nos Activités">
          <OurServices />
        </SectionContainer>

        <SectionContainer id="projets" isLogged={isLogged} title="Nos Produits">
          {projects.length > 0 ? (
            <OurProjects
              MDTRProjects={MDTRProjects}
              GDEEProjects={GDEEProjects}
            />
          ) : (
            <div className=" container text-center ">
              <span className=" text-xl font-medium text-primary text-opacity-80 ">
                No Projects !
              </span>
            </div>
          )}
        </SectionContainer>

        <SectionContainer id="clients" title="Nos Clients">
          <OurClientsSwiper />
        </SectionContainer>
        <SectionContainer id="chiffres" title="ARA on Chiffres">
          <AraStats />
        </SectionContainer>
        <SectionContainer id="contact" title="Contact">
          <ContactUs />
        </SectionContainer>

        {/* <UpButton /> */}
      </div>
    </div>
  );
};

export default HomePage;
