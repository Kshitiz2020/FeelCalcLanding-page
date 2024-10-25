import HeroImage from "../../public/assets/backgroundImage.jpg";
function HeroSection() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative bg-cover bg-center">
      {/* Brand Info */}
      <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
        <div className="space-y-6 text-center md:text-left"></div>

        <h1 className="font-bold leading-relaxed text-5l lg:text-6xl xl:leading-normal">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <br />
          <span className="text-primary">Feelcalc</span>
        </h1>
        <p className="text-gray-600 xl:max-w-[500px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          quia pariatur itaque beatae ab voluptate consectetur quod natus saepe
          sequi, eos, expedita tempora iste ex?
        </p>

        {/* Button Section */}
        <div className="flex justify-center gap-8 md:justify-start">
          <button className="flex items-center gap-2 !mt-4 primary-btn">
            Start Here
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div>
        <img
          src={HeroImage}
          alt="nature"
          className="w-[350px] h-[200px] md:w-[500px] md:h-[300px] xl:w-[700px] xl:h-[400px] 
          drop-shadow border-4 border-gray-300 rounded-lg"
        />
      </div>
    </div>
  );
}
export default HeroSection;
