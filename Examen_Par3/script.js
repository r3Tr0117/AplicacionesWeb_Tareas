let post = document.getElementById("post");
let form_modal = document.getElementById("form_modal");
let movie = document.getElementById("movie");
let releaseDate = document.getElementById("releaseDate");
let synopsis = document.getElementById("synopsis");
let modal = document.getElementById("modal");

form_modal.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  acceptData();
};

let movies = [];
let dates_movies = [];
let synopses_movies = [];

let acceptData = () => {
  movies.push(movie.value);
  dates_movies.push(releaseDate.value);
  synopses_movies.push(synopsis.value);
  createPost();
  modal_close();
};

let createPost = () => {
  post.innerHTML += `
    <div>
      <h3>${movies[movies.length - 1]}</h3>
      <p>Release Date: ${dates_movies[dates_movies.length - 1]}</p>
      <p>${synopses_movies[synopses_movies.length - 1]}</p>
      <span>
        <i onclick="editMovie(${movies.length - 1})" class="fas fa-edit"></i>
        <i onclick="deleteMovie(${movies.length - 1})" class="fas fa-trash-alt"></i>
      </span>
    </div>
  `;
  movie.value = "";
  releaseDate.value = "";
  synopsis.value = "";
};

let editMovie = (index) => {
  movie.value = movies[index];
  releaseDate.value = dates_movies[index];
  synopsis.value = synopses_movies[index];
  deleteMovie(index);
  modal_open();
};

let deleteMovie = (index) => {
  movies.splice(index, 1);
  dates_movies.splice(index, 1);
  synopses_movies.splice(index, 1);
  renderMovies();
};

let renderMovies = () => {
  post.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    post.innerHTML += `
      <div>
        <h3>${movies[i]}</h3>
        <p>Release Date: ${dates_movies[i]}</p>
        <p>${synopses_movies[i]}</p>
        <span>
          <i onclick="editMovie(${i})" class="fas fa-edit"></i>
          <i onclick="deleteMovie(${i})" class="fas fa-trash-alt"></i>
        </span>
      </div>
    `;
  }
};

let modal_open = () => {
  modal.showModal();
};

let modal_close = () => {
  modal.close();
};

let deleteAll = () => {
  movies = [];
  dates_movies = [];
  synopses_movies = [];
  renderMovies();
};
