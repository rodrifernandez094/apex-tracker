const StatsGrid = (props) => {
  const winsPerSeason = props.winsPerSeason();
  return (
    <div className="flex flex-col rounded-xl mt-2 px-4 py-12 bg-stone-200 lg:flex-row lg:items-center lg:justify-between">
      <div className="text-center mb-4 lg:mb-0">
        <h2 className=" text-stone-900 text-2xl mb-2">Active Legend</h2>
        <div className="w-80 mx-auto lg:mx-0">
          <img src={props.activeLegend.img} alt="legend" />
          <span className="text-stone-900"> {props.activeLegend.name} </span>
        </div>
      </div>

      <div className="text-center mb-4 lg:mb-0">
        <h2 className=" text-stone-900 text-2xl mb-4">Stats</h2>

        <div className="bg-stone-900 rounded-xl flex justify-start gap-4 p-4 mb-2 text-stone-300">
          <div className="w-1 rounded-t-full rounded-b-full bg-stone-200"></div>
          <div className="flex flex-col text-left">
            <span>Level</span>
            <span className="text-xl font-bold">{props.level}</span>
          </div>
        </div>

        <div className="bg-stone-900 rounded-xl flex justify-start gap-4 p-4 mb-2 text-stone-300">
          <div className="w-1 rounded-t-full rounded-b-full bg-stone-200 "></div>
          <div className=" w-12 h-12">
            <img src={props.rankScore.metadata.iconUrl} alt="" />
          </div>
          <div className="flex flex-col text-left text-stone-300">
            <span>Rank</span>
            <span className="text-xl font-bold">
              {props.rankScore.metadata.rankName}
            </span>
          </div>
        </div>

        <div className="bg-stone-900 rounded-xl flex justify-start gap-4 p-4 mb-2 text-stone-300">
          <div className="w-1 rounded-t-full rounded-b-full bg-stone-200"></div>
          <div className="flex flex-col text-left">
            <span className="text-stone-300">Total Kills</span>
            <span className="text-xl font-bold">{props.totalKills}</span>
          </div>
        </div>
      </div>

      <div className="text-center mb-4 lg:mb-0">
        <h2 className=" text-stone-900 text-2xl mb-4">Wins per season</h2>
        <div className=" flex flex-col text-stone-300 md:grid md:grid-cols-2 md:gap-4">
          {winsPerSeason}
        </div>
      </div>
    </div>
  );
};

export default StatsGrid;
