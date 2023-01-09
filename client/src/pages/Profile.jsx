import { useNavigate, useParams } from "react-router-dom";
import Gamertag from "../components/Profile/Gamertag";
import StatsGrid from "../components/Profile/StatsGrid";
import Spinner from "../components/Spinner";
import { getStats } from "../apiCalls";
import { getWins } from "../utilities/utilities";
import { useQuery } from "react-query";
import NotFound from "../pages/NotFound";

const Profile = () => {
  const navigate = useNavigate();
  const query = useParams();
  const { data, error, isError, status } = useQuery(
    ["stats", query],
    getStats,
    {
      retry: false,
    }
  );
  if (isError) {
    return <NotFound error={error} />;
  }
  const winsPerSeason = () => {
    return getWins(data);
  };

  return (
    <div className="container mx-auto py-1 h-screen">
      {status === "loading" && <Spinner />}
      {data && (
        <div>
          <Gamertag
            userId={data.userId}
            avatarImg={data.avatarUrl}
            platform={data.platform}
            rankScore={data.rankScore}
          />
          <StatsGrid
            winsPerSeason={winsPerSeason}
            level={data.level}
            activeLegend={data.activeLegend}
            rankScore={data.rankScore}
            totalKills={data.totalKills}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
