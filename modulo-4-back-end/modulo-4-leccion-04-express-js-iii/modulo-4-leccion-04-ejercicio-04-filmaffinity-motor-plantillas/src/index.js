const express = require("express");
const cors = require("cors");
const films = require("./films-data.json");
const directors = require("./directors-data.json");

// create app server
const app = express();

// set express middlewares
app.use(express.json());
app.use(cors());

// set template engine middlewares
app.set("view engine", "ejs");

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints

app.get("/es/film:filmId.html", (req, res) => {
  // get film data by id from url param
  const filmData = films.find((film) => film.id === req.params.filmId);
  const awardYearParams = req.query.awardsYear;
  const getFilteredAwards = () => {
    const filteredAwards = filmData.awards.filter(
      (eachAward) => eachAward.year === awardYearParams
    );
    return filteredAwards;
  };
  // response with rendered template only if movie exists
  if (filmData) {
    // ensure data
    filmData.title = filmData.title || "";
    filmData.year = filmData.year || "";
    filmData.director = filmData.director || "";
    filmData.country = filmData.country || "";
    // if there is a query param
    if (awardYearParams) {
      // and if the movie has awards
      if (filmData.awards) {
        // filter awards by year
        const filteredAwards = getFilteredAwards();
        filmData.cleanAwards =
          filteredAwards.length !== 0 ? filteredAwards : filmData.awards;
      }
      // if there are no query params or the movie has no awards return awards or empty array
    } else {
      filmData.cleanAwards = filmData.awards || [];
    }
    res.render("pages/film", filmData);
  } else {
    res.render("pages/film-not-found");
  }
});

app.get("/es/directora/:directorId", (req, res) => {
  const directorData = directors.find(
    (director) => director.id === parseInt(req.params.directorId)
  );
  // response with rendered template
  if (directorData) {
    // ensure data
    directorData.name = directorData.name || "";
    directorData.movies = directorData.movies || "";
    directorData.awards = directorData.awards || "";
    directorData.movieInProgress =
      directorData.movieInProgress || "No conocida";
    res.render("pages/director", directorData);
  } else {
    res.render("pages/director-not-found");
  }
});
