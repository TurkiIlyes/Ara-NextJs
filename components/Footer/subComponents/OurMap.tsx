const OurMap = () => {
  return (
    <div className="  w-[300px] max-sm:w-full flex flex-col gap-8 max-sm:items-center ">
      <h1 className=" text-center text-2xl font-bold text-white">Our Map</h1>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.0131265278224!2d10.19053882530101!3d36.81820536668623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd35b9d75313cd%3A0x4222f8adfea58505!2sARA%20CONSULTING%20COMPANY!5e0!3m2!1sar!2stn!4v1723286429287!5m2!1sar!2stn"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default OurMap;
