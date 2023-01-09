import { Audio } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <Audio color="#f3f3f3" height={100} width={100} />
    </div>
  );
};

export default Spinner;
