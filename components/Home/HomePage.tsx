import Hero from "@/components/Home/Hero/Hero";
import Features from "./Features/Features";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import SectionContainer from "./SectionContainer/SectionContainer";
import OurServices from "./OurServices/OurServices";
import OurProjects from "./OurProjects/OurProjects";
import OurClientsSwiper from "../Swiper/OurClients/OurClientsSwiper";
import AraStats from "./AraStats/AraStats";

const HomePage = () => {
  return (
    <div className=" relative">
      <Hero />
      <Features />
      <SectionContainer title="Qui Sommes Nous">
        <WhoWeAre />
      </SectionContainer>
      <SectionContainer title="Nous Activité">
        <OurServices />
      </SectionContainer>
      <SectionContainer title="Nos Projet">
        <OurProjects />
      </SectionContainer>
      <SectionContainer title="Nos Clients">
        <AraStats />
      </SectionContainer>
      <SectionContainer title="ARA on Chiffres">
        <OurClientsSwiper />
      </SectionContainer>
    </div>
  );
};

export default HomePage;
