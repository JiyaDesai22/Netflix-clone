
import jawanImg from "../assets/jawan.png";
import laapataaImg from "../assets/laapataa-ladies.png";
import animalImg from "../assets/animal.png";
import kapilImg from "../assets/kapil-show.png";
import raaziImg from "../assets/raazi.png";
import vampireImg from "../assets/vampire-diaries.png";
import bridgertonImg from "../assets/bridgerton.png";
import friendsImg from "../assets/friends.png";
import wednesdayImg from "../assets/wednesday.png";
import gullyBoyImg from "../assets/gully-boy.png";
import talaashImg from "../assets/talaash.png";
import englishVinglishImg from "../assets/english-vinglish.png";
import chennaiExpressImg from "../assets/chennai-express.png";

export const movies = [
  {
    id: 1,
    title: "Jawan",
    year: 2023,
    genre: "Action • Thriller • Drama",
    type: "Movie",
    rating: "7.8",
    image: jawanImg,
    banner: jawanImg,
    description: "A fearless prison warden driven by a deep personal vendetta recruits a band of skilled inmates to execute high-stakes heists while rectifying societal injustices across the nation."
  },
  {
    id: 2,
    title: "Laapataa Ladies",
    year: 2024,
    genre: "Comedy • Drama • Romance",
    type: "Movie",
    rating: "8.4",
    image: laapataaImg,
    banner: laapataaImg,
    description: "Two young brides mistakenly get swapped on a crowded rural train, sparking a witty, heartwarming, and empowering journey across rural India."
  },
  {
    id: 3,
    title: "Animal",
    year: 2023,
    genre: "Action • Crime • Drama",
    type: "Movie",
    rating: "6.5",
    image: animalImg,
    banner: animalImg,
    description: "The fierce son of a powerful industrial mogul plunges into a savage underworld war to defend his estranged father against ruthless enemies."
  },
  {
    id: 4,
    title: "The Great Indian Kapil Show",
    year: 2024,
    genre: "Comedy • Talk-Show",
    type: "TV Series",
    rating: "7.6",
    image: kapilImg,
    banner: kapilImg,
    description: "King of comedy Kapil Sharma welcomes superstar guests with his beloved troupe for an electrifying weekly feast of unscripted humor and skits."
  },
  {
    id: 5,
    title: "Raazi",
    year: 2018,
    genre: "Drama • Thriller • Espionage",
    type: "Movie",
    rating: "7.8",
    image: raaziImg,
    banner: raaziImg,
    description: "An Indian undercover agent is married into a Pakistani military family to relay critical intelligence to India ahead of the 1971 Indo-Pak war."
  },
  {
    id: 6,
    title: "The Vampire Diaries",
    year: 2009,
    genre: "Fantasy • Supernatural • Romance",
    type: "TV Series",
    rating: "7.7",
    image: vampireImg,
    banner: vampireImg,
    description: "In the shadow-steeped town of Mystic Falls, high schooler Elena Gilbert finds herself torn between two centuries-old vampire brothers."
  },
  {
    id: 7,
    title: "Bridgerton",
    year: 2020,
    genre: "Romance • Period Drama",
    type: "TV Series",
    rating: "7.4",
    image: bridgertonImg,
    banner: bridgertonImg,
    description: "High society scandals, lavish balls, forbidden lust, and passionate courtships unfurl across Regency-era London under the watchful gaze of Lady Whistledown."
  },
  {
    id: 8,
    title: "Friends",
    year: 1994,
    genre: "Comedy • Romance",
    type: "TV Series",
    rating: "8.9",
    image: friendsImg,
    banner: friendsImg,
    description: "Six young friends living in Manhattan navigate the turbulent, hilarious waters of romance, careers, and life while hanging out at Central Perk."
  },
  {
    id: 9,
    title: "Wednesday",
    year: 2022,
    genre: "Fantasy • Mystery • Comedy",
    type: "TV Series",
    rating: "8.1",
    image: wednesdayImg,
    banner: wednesdayImg,
    description: "Smart, sarcastic and a little dead inside, Wednesday Addams investigates a monstrous murder spree while making new friends and foes at Nevermore Academy."
  },
  {
    id: 10,
    title: "Gully Boy",
    year: 2019,
    genre: "Drama • Music • Romance",
    type: "Movie",
    rating: "7.9",
    image: gullyBoyImg,
    banner: gullyBoyImg,
    description: "A young aspiring rapper from the slums of Dharavi in Mumbai strives to overcome his socioeconomic realities and break out into the Indian hip-hop scene."
  },
  {
    id: 11,
    title: "Talaash",
    year: 2012,
    genre: "Crime • Mystery • Drama",
    type: "Movie",
    rating: "7.2",
    image: talaashImg,
    banner: talaashImg,
    description: "A tormented police officer investigating the mysterious death of a high-profile movie actor enters Mumbai's seedy red-light underbelly."
  },
  {
    id: 12,
    title: "English Vinglish",
    year: 2012,
    genre: "Comedy • Drama • Family",
    type: "Movie",
    rating: "7.8",
    image: englishVinglishImg,
    banner: englishVinglishImg,
    description: "A quiet, sweet-tempered housewife is constantly mocked for her poor English until she enrolls in a secret crash course in New York City, finding dignity and respect."
  },
  {
    id: 13,
    title: "Chennai Express",
    year: 2013,
    genre: "Action • Comedy • Romance",
    type: "Movie",
    rating: "6.1",
    image: chennaiExpressImg,
    banner: chennaiExpressImg,
    description: "A man embarking on a journey to immerse his grandfather's ashes boards the Chennai Express and gets entangled with the runaway daughter of a South Indian don."
  }
];

export const categories = [
  {
    id: "recently-watched",
    title: "Recently Watched",
    movieIds: [5]
  },
  {
    id: "trending-now",
    title: "Trending Now",
    movieIds: [1, 3, 2, 4, 10, 5]
  },
  {
    id: "trending-english-series",
    title: "Trending English Series",
    movieIds: [6, 7, 8, 9]
  },
  {
    id: "hindi-movies",
    title: "Hindi Movies",
    movieIds: [10, 11, 12, 13]
  },
  {
    id: "romance",
    title: "Romance",
    movieIds: [7, 6, 2, 13]
  },
  {
    id: "comedy",
    title: "Comedy",
    movieIds: [8, 4, 2, 12, 13]
  },
  {
    id: "drama",
    title: "Drama",
    movieIds: [5, 10, 11, 1, 3, 2, 7]
  }
];
