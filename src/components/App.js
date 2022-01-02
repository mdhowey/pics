import React from "react";
// keep third-party imports above local component imports
import axios from 'axios';
import SearchBar from "./SearchBar";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://api.unsplash.com/search/photos'

class App extends React.Component {

  onSearchSubmit(term) {
    axios.get(API_URL, {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${API_KEY}`
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '15px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    )
  }
}

export default App;