import React, { Component } from "react";
import API from "../utils/Api";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Alert from "../components/Alert";
import InfoTop from "../components/InfoTop";
import InfoBot from "../components/InfoBot";
import Api from "../utils/Api";

class Discover extends Component {
  state = {
    restArray: [],
    image: "",
    name: "",
    address: "",
    cuisine: "",
    price: "",
    rating: "",
    count: 0,
    favorited: false,
    userID : ""
  };

  componentDidMount() {
    
    if(localStorage.getItem("userID") === null || localStorage.getItem("userID") === "null")
    {
      this.props.history.push('/');
    }
    else if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(position => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.saveArray(pos.lat , pos.lng);
      })
    }
    else
    {
      const pos = {
        lat : 32.7157,
        lng : 117.1611
      };
      this.saveArray(pos.lat , pos.lng);
    }
    
    this.setState ({
      userID : localStorage.getItem("userID")
    });
    

    
  };

  handleBtnClick = event => {
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    const newState = {...this.state};
    newState.count++;
    if (btnType === "pick") {
      newState.favorited = true;
      Api.updateFavorites(this.state.userID , {resId : this.state.restArray[this.state.count].R.res_id});
    } else {
      newState.favorited = false;
    }
    this.setState(newState);
    this.loadNextRestaurant();
  };

  loadNextRestaurant = () => {
    if (this.state.restArray[this.state.count].featured_image === "") {
      return this.setState({
        image: "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
        name: this.state.restArray[this.state.count].name,
        address: this.state.restArray[this.state.count].location.address,
        cuisine: this.state.restArray[this.state.count].cuisines,
        price: this.state.restArray[this.state.count].average_cost_for_two,
        rating: this.state.restArray[this.state.count].user_rating.aggregate_rating
      })
    } else {
      return this.setState({
        image: this.state.restArray[this.state.count].featured_image,
        name: this.state.restArray[this.state.count].name,
        address: this.state.restArray[this.state.count].location.address,
        cuisine: this.state.restArray[this.state.count].cuisines,
        price: this.state.restArray[this.state.count].average_cost_for_two,
        rating: this.state.restArray[this.state.count].user_rating.aggregate_rating
      })
    }
  };

  saveArray = (lat , long) => {
    return API.getRandomRestaurantArray(lat , long)
    .then(res => {
      return this.setState(pvSt=>{
        return ({...pvSt, restArray: res.map(item=>({...item.restaurant}))})
      },()=>{
        console.log({...this.state.restArray});
        return this.loadNextRestaurant();
      })
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Navbar />
        <InfoTop name={this.state.name}></InfoTop>
        <div className="row">
          <div className="offset-md-4 col-md-4">
            <Card image={this.state.image} handleBtnClick={this.handleBtnClick} />
          </div>
          <div className="col-md-3 justify-content-left">
            <InfoBot cuisine={this.state.cuisine} address={this.state.address} price={this.state.price} rating={this.state.rating}></InfoBot>
          </div>
        </div>
        <Alert style={{ opacity: this.state.favorited ? 1 : 0 }} type="success">
          Restaurant added to favorites list!
        </Alert>
      </div>
    );
  }
};

export default Discover;