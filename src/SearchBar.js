import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.changeIndoor = this.changeIndoor.bind(this);
        this.changeSearch = this.changeSearch.bind(this);
    }

    changeSearch(event) {
        this.props.onSearchChange(event.target.value);
    }

    changeIndoor(event) {
        this.props.onIndoorChange(event.target.checked);
    }

    render() {
        return (<form id="searchBar">
            <input type="search" placeholder="Rechercher un lieu" value={this.props.search} onChange={this.changeSearch}/><br/>
            <div className="checkbox">
                <input type="checkbox" id="indoor" checked={this.props.indoor} onChange={this.changeIndoor}/>
                <label htmlFor="indoor">Visite en intérieur uniquement</label>
            </div>
        </form>);
    }
}