import React, { Component } from "react";
//import API from "../utils/Api";
import Navbar from "../components/Navbar";
import Container from "../components/Container";


class Favorites extends Component {

  state = {
    userID: "",
    faveArray: []
  };

componentDidMount() {
  this.setState ({
    userID : localStorage.getItem("userID")
  })
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