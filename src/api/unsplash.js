import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://api.unsplash.com'

// Customized instance of axios specific to Unsplash aPI w/ my key
export default axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Client-ID ${API_KEY}`
  }
});