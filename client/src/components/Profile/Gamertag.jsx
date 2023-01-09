import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";

const Gamertag = (props) => {
  const navigate = useNavigate();

  return (
    <div className="bg-red-900 rounded-xl w-full flex justify-between items-center py-2 px-4">
      <div className="flex justify-start gap-4">
        <div className=" w-14 h-14 overflow-hidden rounded-full border-2 border-stone-200 bg-stone-200">
          <img src={props.avatarImg} alt="" className="w-full" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg text-white">{props.userId}</span>
          <p className=" text-yellow-400 opacity-40 font-bold text-sm">
            Rank: #{props.rankScore.rank}{" "}
          </p>
        </div>
      </div>
      <div
        className="justify-self-end cursor-pointer text-white"
        onClick={() => navigate("/")}
      >
        <FontAwesomeIcon icon={faReply} size="lg" />
      </div>
    </div>
  );
};

export default Gamertag;
