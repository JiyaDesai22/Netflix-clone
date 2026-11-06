
import { Plus, Check, Star, Info } from "lucide-react";

function MovieCard({ movie, isSaved, onToggle, onSelect }) {
  const cardImage = movie.image || movie.banner;

  return (
    <article className="movie-card">
      <img
        src={cardImage}
        alt={movie.title}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80";
        }}
      />

      <div className="card-details">
        <h3>{movie.title}</h3>

        <div className="card-meta">
          <span className="card-rating">
            <Star size={13} fill="currentColor" />
            {movie.rating}
          </span>
          <span>{movie.year}</span>
          <span>{movie.type ? `${movie.type} • ` : ""}{movie.genre}</span>
        </div>

        <p>{movie.description}</p>

        <div className="card-actions">
          <button
            className="card-more"
            onClick={() => onSelect(movie)}
            aria-label={`More about ${movie.title}`}
          >
            <Info size={18} />
          </button>

          <button
            className="card-save"
            onClick={() => onToggle(movie.id)}
            aria-label={isSaved ? "Remove from My List" : "Add to My List"}
          >
            {isSaved ? <Check size={18} /> : <Plus size={18} />}
          </button>
        </div>
      </div>
    </article>
  );
}

export default MovieCard;
