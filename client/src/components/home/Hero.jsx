import Form from "./Form";
import logo from "../../assets/images/apex-logo.png";

const Hero = () => {
  return (
    <>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-full -z-10">
        <img
          className="h-56 w-full object-cover border-b border-b-stone-600 
          sm:h-72 md:h-96 lg:w-full lg:border-none lg:h-full opacity-40"
          src="/apex-wallpaper.png"
          alt=""
        />
      </div>
      <main className="mt-4 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 z-10">
        <div className=" text-center lg:text-left">
          <div
            className="p-8 absolute top-0 -left-1/2 -right-1/2 text-4xl tracking-tight font-extrabold text-white
           sm:text-5xl md:text-6xl lg:relative lg:left-0 "
          >
            <img
              src={logo}
              className="block w-40 mx-auto mb-4 lg:mx-0 xl:inline xl:mr-4"
              alt=""
            />
            <span className="block text-white font-light lg:font-normal xl:inline">
              Stats tracker
            </span>
          </div>

          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <Form />
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
