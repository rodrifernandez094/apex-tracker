export const getWins = (stats) => {
  const seasonRegexWins = /(season\d+Wins)|(seasonWins)/gm;
  let wins = Object.entries(stats.winsPerSeason).filter((stat) => {
    return stat[0].match(seasonRegexWins) ?? false;
  });
  return wins.map((win, index) => {
    let winObject = win[1];
    return (
      <div
        key={index}
        className="bg-stone-900 rounded-xl flex justify-start gap-4 p-4 mb-2 md:mb-0"
      >
        <div className="w-1 rounded-t-full rounded-b-full bg-stone-200"></div>
        <div className="flex flex-col text-left">
          <span className="text-stone-300">{winObject.displayName}</span>
          <span className="text-xl font-bold">{winObject.displayValue}</span>
        </div>
      </div>
    );
  });
};
