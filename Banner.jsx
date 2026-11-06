
import { Play, Info } from "lucide-react";

function Banner({ movie, onPlay, onInfo }) {
  if (!movie) return null;

  const bannerImg = movie.banner || movie.image;

  return (
    <section
      className="banner"
      id="home"
      style={{
        backgroundImage: `linear-gradient(to right, #141414 0%, rgba(20,20,20,0.85) 35%, rgba(20,20,20,0.2) 70%, transparent 100%), linear-gradient(to top, #141414 0%, rgba(20,20,20,0.5) 25%, transparent 55%), url("${bannerImg}")`,
        backgroundPosition: "center top",
        backgroundSize: "cover"
      }}
    >
      <div className="banner-content">
        <p className="banner-tag">
          {movie.type === "TV Series" ? "NETFLIX SERIES" : "NETFLIX ORIGINAL"}
        </p>

        <h1>{movie.title}</h1>

        <div className="banner-meta">
          <span className="match">98% Match</span>
          <span>{movie.year}</span>
          <span className="age-rating">{movie.type || "Movie"}</span>
          <span>{movie.genre}</span>
          <span>Rating: {movie.rating}/10</span>
        </div>

        <p className="banner-description">
          {movie.description}
        </p>

        <div className="banner-buttons">
          <button className="play-btn" onClick={onPlay}>
            <Play fill="black" size={20} />
            Play
          </button>

          <button className="info-btn" onClick={() => onInfo(movie)}>
            <Info size={20} />
            More Info
          </button>
        </div>
      </div>

      <div className="banner-overlay"></div>
    </section>
  );
}

export default Banner;
