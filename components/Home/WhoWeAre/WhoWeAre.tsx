import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className=" flex gap-6 ">
      <div className=" w-full sm:w-5/12 flex flex-col gap-4 ">
        <span className=" text-2xl font-medium text-primary ">ARA COMPANY</span>
        <p className=" text-justify text-sm leading-loose font-medium text-grayscale-800 ">
          Fondée en 2019, ARA COMPANY est un leader dans le développement
          d'applications pour l'industrie 4.0, la digitalisation, et la
          robotique. Avec une équipe hautement qualifiée, elle transforme les
          opérations industrielles en intégrant des technologies numériques
          avancées comme l'IA et l'IoT. ARA COMPANY conçoit des solutions sur
          mesure pour optimiser les processus, améliorer l'efficacité et
          stimuler la croissance, en se concentrant sur la personnalisation pour
          répondre aux besoins spécifiques de chaque client. Son engagement
          envers l'innovation en fait un partenaire stratégique pour les
          entreprises dans un monde de plus en plus connecté et automatisé.
        </p>
      </div>
      <div className=" w-7/12 relative hidden sm:flex flex-col gap-4 ">
        <Image
          src="/Imgs/WhoWeAre/WhoWeAre.png"
          alt="WhoWeAre"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
