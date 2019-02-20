import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Api from "../utils/Api";


class Favorites extends Component {

  state = {
    faveArray: [],
    cuisines : [{
      id : 0,
      type : "All"
    }]
  };

componentDidMount() {
  if(localStorage.getItem("userID") === null || localStorage.getItem("userID") === "null")
  {
    this.props.history.push('/');
  }
  else{
  Api.getFavorites(localStorage.getItem("userID")).then( ({data}) => {
    for(var i = 0; i < data.length; i++) {
    Api.getRestaurantByID(data[i].resId).then(({data}) => {
      const joined = this.state.faveArray.concat(data);
      this.setState({
        faveArray : joined
      })
      const cuis = data.cuisines.split(", ");
      for(var i = 0; i < cuis.length; i++)
      {
        if(!(this.state.cuisines.includes(cuis[i])))
        {
          const newCuis = this.state.cuisines.concat({id : cuis.length, type : cuis[i]});
          this.setState({
            cuisines : newCuis
          });
        }
      };
    });
    }
  })
  }
};

onClickHandler(event , type) {
  event.preventDefault();
  this.setState({
    faveArray: []
  });
  if(type === "All")
  {
    Api.getFavorites(localStorage.getItem("userID")).then( ({data}) => {
      for(var i = 0; i < data.length; i++) {
      Api.getRestaurantByID(data[i].resId).then(({data}) => {
        const joined = this.state.faveArray.concat(data);
        this.setState({
          faveArray : joined
        });
    })}
  })
  }
  else
  {
    Api.getFavorites(localStorage.getItem("userID")).then( ({data}) => {
      for(var i = 0; i < data.length; i++) {
        Api.getRestaurantByID(data[i].resId).then(({data}) => {
        const cuis = data.cuisines.split(", ");
        if(cuis.includes(type))
        {
          const joined = this.state.faveArray.concat(data);
          this.setState({
            faveArray : joined
          });
        }
      })}
    })
  }
}

onRemoveHandler(e , id) {
  e.preventDefault();
  let Favs = [];
  const intId = parseInt(id);
      const userFavs = this.state.faveArray.filter((value , index , arr) => {return !(value.R.res_id === intId)})
      this.setState({
        faveArray : userFavs
      });
  userFavs.forEach(fav => {
    Favs = Favs.concat({resId : fav.R.res_id});
  })
  Api.removeFavorites(localStorage.getItem("userID") , Favs);
}

render() {
  return(
    <div>
    <Navbar />
    <div className="container">
      {this.state.cuisines.map(cuis => (
        <div className="cuisBtnDiv">
            <button className="btn btn-info" key = {cuis.id} onClick = {(e) => this.onClickHandler(e , cuis.type)}> {cuis.type} </button>
        </div>
      ))

      }
    </div>
      <div className="container">
      {this.state.faveArray.map(item => (
        <div className="list-group-item row favdiv animated bounceInRight" key={item.id}>
          <div className="row">
            <img src={item.featured_image} alt="Restaurant hasn't provided a featured image!" className="offset-md-1 col-md-2 col-sm-12 favImg"></img>
            <div className="offset-md-2 col-md-5">
              <h5><strong>{item.name}</strong></h5>
              <p>Address: {item.location.address}</p>
              <p>Cuisine: {item.cuisines}</p>
              <p>Average price for two: ${item.average_cost_for_two}</p>
              <p>Rating: {item.user_rating.aggregate_rating}</p>
              <button onClick = {(e) => this.onRemoveHandler(e , item.id)}> X </button>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
};


export default Favorites;