import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import play_icon from "../../assets/play_icon.png";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Bugged
function Player() {
  const { id } = useParams();
const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWY5MTEzNTkzYTU0ZDM5YjJlY2M5NTY4MDM2OGRjNyIsIm5iZiI6MTcyODM4NDAzMy44NjksInN1YiI6IjY3MDUwYzIxY2NiYjRlN2YxNjY5Y2NhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lSg0SIDcq-s9y-NOb5X5LplTrWmJpCwgcIVwKJanW6c",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={() => navigate(-2)}/>
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="How to choose a Netflix Streaming Plan | Netflix"
        frameborder="0"
        allowfullscreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
