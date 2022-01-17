import axios from "axios";
import dynamicSort from "../utilities/sort.js";

import db from "../models/index.js";

class MovieService {
  async getMovies() {
    const { data } = await axios.get("https://swapi.py4e.com/api/films");
    const sortedRes = data.results.sort(dynamicSort("release_date"));
    return sortedRes;
  }
}

export default new MovieService();
