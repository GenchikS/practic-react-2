import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1/";

const fetchApiItems = async react => {
  const response = await axios.get(`/search?query=${react}`);
  // console.log(response);
    return response.data.hits;
}

export default fetchApiItems
