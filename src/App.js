import React from 'react';
import './App.css';
import PlacesList from "./PlacesList";
import SearchBar from "./SearchBar";

const PLACES = [
  { name: "Central Park", indoor: false },
  { name: "Statue de la Liberté", indoor: false },
  { name: "Metropolitan Museum of Art", indoor: true },
  { name: "Museum of Modern Art", indoor: true },
  { name: "Times Square", indoor: false },
  { name: "Pont de Brooklyn", indoor: false }
];


class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      search: "",
      indoor: false
    };

    this.changeIndoor = this.changeIndoor.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
  }

  changeSearch(search) {
    this.setState({
      search: search
    })
  }

  changeIndoor(indoor) {
    this.setState({
      indoor: indoor
    })
  }

  render() {
    return (
        <div id="App">
          <h1>Lieux à visiter</h1>
          <SearchBar onSearchChange={this.changeSearch} onIndoorChange={this.changeIndoor} />
          <PlacesList places={PLACES} search={this.state.search} indoor={this.state.indoor} />
        </div>
    );
  }
}

export default App;
