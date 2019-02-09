import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Favcard from "../components/Favcard";
import Api from "../utils/Api";


class Favorites extends Component {

  state = {
    faveArray: []
  };

componentDidMount() {
  const userFavs = [];
  Api.getFavorites(localStorage.getItem("userID")).then( ({data}) => {
    for(var i = 0; i < data.length; i++) {
    userFavs.push(data[i].resId);
    Api.getRestaurantByID(data[i].resId).then(({data}) => {
      const joined = this.state.faveArray.concat(data);
      this.setState({
        faveArray : joined
      })
    });
    }
  })
};

render() {
  return(
    <div>
    <Navbar />
      <div className="container">
      {this.state.faveArray.map(item => (
        <div className="list-group-item row favdiv animated bounceInRight" key={item.id}>
          <img src={item.featured_image} alt="Restaurant hasn't provided a featured image!" className="offset-md-1 col-md-2"></img>
          <div className="col">
            <p>Restaurant Name: {item.name}</p>
            <p>Address: {item.location.address}</p>
            <p>Cuisine: {item.cuisines}</p>
            <p>Average price for two: {item.average_cost_for_two}</p>
            <p>Rating: {item.user_rating.aggregate_rating}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
};


export default Favorites;