import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className=" flex gap-6 ">
      <div className=" w-full sm:w-5/12 flex flex-col gap-4 ">
        <span className=" text-2xl font-medium text-primary ">ARA COMPANY</span>
        <p className=" text-justify text-sm leading-loose font-medium text-grayscale-800 ">
          Fondée en 2019, ARA COMPANY est un leader dans le développement
          d&lsquo;applications pour l&lsquo;industrie 4.0, la digitalisation, et
          la robotique. Avec une équipe hautement qualifiée, elle transforme les
          opérations industrielles en intégrant des technologies numériques
          avancées comme l&lsquo;IA et l&lsquo;IoT. ARA COMPANY conçoit des
          solutions sur mesure pour optimiser les processus, améliorer
          l&lsquo;efficacité et stimuler la croissance, en se concentrant sur la
          personnalisation pour répondre aux besoins spécifiques de chaque
          client. Son engagement envers l&lsquo;innovation en fait un partenaire
          stratégique pour les entreprises dans un monde de plus en plus
          connecté et automatisé.
          <br />
          <br />
          ARA COMPANY a collaboré avec des entreprises dans plusieurs pays,
          contribuant à leur transformation numérique et à leur succès
          industriel.
        </p>
        <div className="inline-flex gap-4 w-[60px] ml-[20%] mt-[20px]">
          <img src="/Imgs/Flags/Tunisia.png" />
          <img src="/Imgs/Flags/Algeria.png" />
          <img src="/Imgs/Flags/Italia.png" />
          <img src="/Imgs/Flags/Marroco.png" />
        </div>
      </div>
      <div className=" w-7/12 relative hidden sm:flex flex-col gap-4 ">
        <Image
          src="/Imgs/WhoWeAre/meet.png"
          alt="WhoWeAre"
          width={1000}
          height={1000}
          className="h-[550px] w-[800px]"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
