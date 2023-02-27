const API_KEY = '1e6021066501a3fed19226bbd79b5c46';

export async function searchMovies(query) {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
  const data = await response.json();
  return data.results;
}
