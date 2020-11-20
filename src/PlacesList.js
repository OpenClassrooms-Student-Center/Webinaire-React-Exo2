import React from 'react';
import {Place} from "./Place";

export default class PlacesList extends React.Component {
    render() {
        return (<ul>
            {this.props.places
            // la recherche doit être incluse dans le nom du lieu et si indoor est coché, le lieu doit être en indoor
                .filter(place => (!this.props.indoor || place.indoor) && place.name.toLowerCase().includes(this.props.search.toLowerCase()))
                .map(place => (
                    <Place name={place.name} indoor={place.indoor} />
            ))}
        </ul>);
    }
}