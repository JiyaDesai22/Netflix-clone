# Netflix-clone
Netflix-inspired movie streaming frontend built with React and Vite

A Netflix-inspired movie and TV-show browsing interface built with
React and Vite. This project recreates the look and feel of a
streaming platform for frontend practice and learning. It is a visual
and interactive demo only; it does not stream movies or provide a real
subscription service.
Preview
The interface includes a dark Netflix-style theme, a navigation bar, a
featured hero banner, and horizontally arranged content rows.
Main features
- Netflix-inspired interface: dark background, red branding,
  navigation links, and responsive content sections.
- Featured hero banner: highlights a featured title such as
  Jawan, with its title, year, genre, rating, description, and
  action buttons.
- Banner hover interaction: the featured banner can reveal or
  emphasize additional descriptive information when the user hovers
  over it.
- Content rows: sections such as Trending Now, Trending English
  Series, Hindi Movies, Comedy, Drama, and Recently Watched.
- Indian and international entertainment: includes Hindi films and
  shows such as The Great Indian Kapil Show, alongside international
  series such as The Vampire Diaries and Bridgerton.
- Movie/show cards: visual posters for titles in the content
  collection.
- Search: filters the available titles by name.
- My List: lets users add or remove titles from a personal list
  during the current app session.
- Details modal: selecting a title opens a popup with information
  such as its image, title, year, genre, rating, and description.
- Demo Play action: selecting Play displays a message explaining
  that video streaming is not connected.
The exact titles and categories displayed depend on the data included
in the project.

Tech stack
- React -- component-based user interface.
- Vite -- development server and build tool.
- JavaScript (ES6+) -- application logic and interactions.
- CSS -- page layout, styling, hover effects, and responsive
  presentation.
- Lucide React -- icons used for interface controls such as close,
  play, add, and check.
Project structure
The project uses a component-based React structure. The names below
describe the structure referenced by the application; your repository
may contain additional files or slightly different folders.
project-root/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Banner.jsx
│   │   ├── MovieRow.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── data/
│   │   └── movies.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
Run locally
Prerequisites
- Node.js (which includes npm)
- A code editor such as Visual Studio Code
Installation
1. Clone the repository:
   git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
2. Move into the project directory:
   cd YOUR-REPOSITORY
3. Install dependencies:
   npm install
4. Start the Vite development server:
   npm run dev
5. Open the local URL printed in the terminal (Vite commonly uses
   http://localhost:5173/).
Production build
To check that the project can be built for deployment:
npm run build
Vite writes the production output to the dist/ folder.
Deployment with Vercel
1. Push the complete project to a GitHub repository.
2. Sign in to Vercel using GitHub.
3. Choose Add New → Project, then import the repository.
4. Select Vite as the framework preset.
5. Use the following build settings:
   - Build command: npm run build
   - Output directory: dist
   - Install command: npm install
6. Select Deploy.
If the app uses React Router with browser-history routes, add a
vercel.json rewrite so direct visits to nested routes are served by
index.html. For a single-page app without such routes, this may not be
necessary.

Current limitations
This project is currently a frontend-only demonstration.
- No backend: there is no server-side application connected to the
  interface.
- No database: movie information and categories are supplied by
  frontend data files; there is no persistent database.
- No real video playback: the Play button does not stream a movie.
  It displays a frontend-demo message because a video player and
  licensed streaming source have not been integrated.
- No user authentication: there are no real user accounts, login,
  or subscription management.
- My List is not a server-synced account feature: in the current
  implementation, the list is held in React state. Unless local
  storage has separately been implemented, it resets when the page is
  refreshed.
- No production streaming service: this project does not host or
  distribute copyrighted films or TV episodes.
  
Future scope
The project can be extended with the following features:
1. Backend integration: build an API using a backend framework such
   as Node.js and Express.
2. Database connection: store movie/show metadata, user profiles,
   watchlists, and viewing history in a database such as MongoDB or
   PostgreSQL.
3. Movie data API: connect a movie and TV metadata service (for
   example, TMDB) to fetch current titles, posters, ratings, genres,
   and descriptions instead of maintaining all data manually.
4. Persistent My List: save each user's watchlist in a database, or
   use browser local storage for a simple client-side version.
5. Authentication: add sign-up, login, logout, and protected
   user-specific features.
6. Movie and series detail pages: show richer information, trailers
   where permitted, cast, seasons, episodes, and recommendations.
7. Real playback integration: connect only to video content that
   the project has the rights and authorization to stream.
8. Improved search and filters: add genre, language, year, and
   rating filters.
9. Accessibility and responsive improvements: refine keyboard
   navigation, screen-reader labels, contrast, and layouts across
   devices.
   
Credits and asset acknowledgements
- The interface is an independent educational frontend project
  inspired by the general browsing experience of streaming platforms.
- Some visual inspiration, including the featured banner treatment and
  layout, was taken from the Netflix interface.
- Lucide React is used for interface icons. See
  Lucide.
- Movie and series names, artwork, and other media imagery may be
  associated with their respective copyright and trademark owners.
  This project is not affiliated with, endorsed by, or sponsored by
  Netflix.
- Use images and metadata in accordance with the relevant providers'
  terms and licenses. If using TMDB, review the TMDB developer
  documentation and its
  attribution requirements.
  
Disclaimer
This project was created for educational and portfolio purposes.
Netflix is a trademark of its respective owner. This clone is not an
official Netflix product and does not offer access to Netflix's
streaming catalogue or services.
