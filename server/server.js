const express = require("express");
const path = require("path");

const app = express();

// A test route to make sure the server is up.
app.get("/api/ping", (request, response) => {
  console.log("❇️ Received GET request to /api/ping");
  response.send("pong!");
});

const moviesData = require('./movies_metadata.json');

app.get("/api/movies", (request, response) => {
  response.json(moviesData);
});

app.get('/api/movie/:id', (request, response) => {
  const movieId = request.params.id;
  console.log(movieId)
  const movie = moviesData.find((movie) => movie.id === parseInt(movieId));

  if (!movie) {
    response.status(404).json({ message: 'Movie not found' });
  } else {
    response.json(movie);
  }
});


// Express port-switching logic
let port;
console.log("❇️ NODE_ENV is", process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  port = process.env.PORT || 3000;
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../build", "index.html"));
  });
} else {
  port = 3001;
  console.log("⚠️ Not seeing your changes as you develop?");
  console.log(
    "⚠️ Do you need to set 'start': 'npm run development' in package.json?"
  );
}

// Start the listener!
const listener = app.listen(port, () => {
  console.log("❇️ Express server is running on port", listener.address().port);
});
