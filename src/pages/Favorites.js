import React, { Component } from "react";
import API from "../utils/Api";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
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
  }
  this.setState({
    faveArray : userFavs
  });
});
};

render() {
  return(
    <div>
    <Navbar />
      <Container style={{ marginTop: 30 }}>
      </Container>
    </div>
  );
}
};


export default Favorites;