
import { useMemo, useState, useEffect } from "react";
import { X, Play, Plus, Check } from "lucide-react";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import MovieRow from "./components/MovieRow";
import Footer from "./components/Footer";

import { movies, categories } from "./data/movies";

import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [myList, setMyList] = useState(() => {
    try {
      const saved = localStorage.getItem("netflix_clone_my_list");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem("netflix_clone_my_list", JSON.stringify(myList));
    } catch (e) {
      console.error("Failed to persist My List to localStorage:", e);
    }
  }, [myList]);

  const filteredMovies = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return movies;
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(term) ||
      (movie.genre && movie.genre.toLowerCase().includes(term)) ||
      (movie.type && movie.type.toLowerCase().includes(term))
    );
  }, [searchTerm]);

  const toggleMyList = (id) => {
    setMyList((previous) => {
      const exists = previous.includes(id);
      const updated = exists
        ? previous.filter((item) => item !== id)
        : [...previous, id];
      const targetMovie = movies.find((m) => m.id === id);
      const actionText = exists ? "removed from" : "added to";
      showMessage(`"${targetMovie ? targetMovie.title : 'Item'}" ${actionText} My List`);
      return updated;
    });
  };

  const navigateTo = (section) => {
    if (section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const sectionIds = {
      trending: "trending-now",
      popular: "drama",
      "top-rated": "recently-watched",
      "my-list": "my-list"
    };

    const element = document.getElementById(
      sectionIds[section] || section
    );

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const showMessage = (text) => {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2500);
  };

  const handlePlay = () => {
    showMessage("This is a frontend demo. Video streaming is not connected.");
  };

  const displayCategories = categories.map((category) => ({
    ...category,
    filtered: filteredMovies.filter((movie) =>
      category.movieIds.includes(movie.id)
    )
  }));

  const featuredMovie = movies[0]; // Jawan with the official banner!

  return (
    <div className="app">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onNav={navigateTo}
        myListCount={myList.length}
      />

      {!searchTerm && (
        <Banner
          movie={featuredMovie}
          onPlay={handlePlay}
          onInfo={setSelectedMovie}
        />
      )}

      <main className="main-content">
        {searchTerm && (
          <h2 className="search-heading">
            Search results for: "{searchTerm}"
          </h2>
        )}

        {!searchTerm && (
          <MovieRow
            title="My List"
            movies={movies.filter((movie) => myList.includes(movie.id))}
            myList={myList}
            onToggle={toggleMyList}
            onSelect={setSelectedMovie}
          />
        )}

        {searchTerm ? (
          filteredMovies.length > 0 ? (
            <MovieRow
              title={`Search Results (${filteredMovies.length})`}
              movies={filteredMovies}
              myList={myList}
              onToggle={toggleMyList}
              onSelect={setSelectedMovie}
            />
          ) : (
            <div className="empty-search">
              <h2>No movies or shows found!</h2>
              <p>Try searching with a different title like "Jawan", "Raazi", "Animal", "Kapil", or "Emily".</p>
            </div>
          )
        ) : (
          displayCategories.map((category) => (
            <MovieRow
              key={category.id}
              title={category.title}
              movies={category.filtered}
              myList={myList}
              onToggle={toggleMyList}
              onSelect={setSelectedMovie}
            />
          ))
        )}
      </main>

      <Footer />

      {message && (
        <div className="toast">
          {message}
        </div>
      )}

      {selectedMovie && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            className="movie-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedMovie(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>

            <img
              src={selectedMovie.banner || selectedMovie.image}
              alt={selectedMovie.title}
              className="modal-image"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80";
              }}
            />

            <div className="modal-content">
              <h2>{selectedMovie.title}</h2>

              <div className="modal-meta">
                <span className="match">98% Match</span>
                <span>{selectedMovie.year}</span>
                <span className="age-rating">{selectedMovie.type || "Movie"}</span>
                <span>{selectedMovie.genre}</span>
                <span>Rating: {selectedMovie.rating}/10</span>
              </div>

              <p>{selectedMovie.description}</p>

              <div className="modal-actions">
                <button className="play-btn" onClick={handlePlay}>
                  <Play fill="black" size={18} />
                  Play
                </button>

                <button
                  className="modal-list-btn"
                  onClick={() => toggleMyList(selectedMovie.id)}
                >
                  {myList.includes(selectedMovie.id) ? (
                    <Check size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                  My List
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
