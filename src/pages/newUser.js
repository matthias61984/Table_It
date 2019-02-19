import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Api from "../utils/Api";


class newUser extends Component {

   state = {
     username : "",
     password : "",
     email : "",
   };
   
   handleInputChange = event => {
     let value = event.target.value;
     const name = event.target.name;

     this.setState({
       [name]: value
     });
   };

   handleFormSubmit = event => {
     event.preventDefault();

     if((this.state.username.length > 0) && (this.state.password.length > 0) && (this.state.email.length > 0))
     {
         Api.createUser({
             username : this.state.username,
             password : this.state.password,
             email : this.state.email
         }).catch(function(err) {
            console.log(err);
             alert(err);
         });
     }
     else
     {
       alert("Please Fill out all forms");
     }
     this.setState({
       username : "",
       password : "",
       email : "",
     });
   };

   render()
   {
    return (
      <div>
        <Jumbotron backgroundImage="https://images.unsplash.com/photo-1512805147242-c3e79caf64bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
          <h1>TableIt</h1>
          <h2>Find dinner tonight... and tomorrow night.</h2>
          <div className="offset-md-2 col-md-8">
        <form className = "form">
          <input
            value = {this.state.username}
            name = "username"
            onChange = {this.handleInputChange}
            type = "text"
            placeholder = "Username"
            />

            <input
              value = {this.state.password}
              name = "password"
              onChange = {this.handleInputChange}
              type = "password"
              placeholder = "Password"
              />

            <input
              value = {this.state.email}
              name = "email"
              onChange = {this.handleInputChange}
              type = "text"
              placeholder = "Email"
              />
          <button onClick = {this.handleFormSubmit} className="btn btn-success"> Create New User </button>
          <a href = "/" className="createLink"> Already a user ? </a>
        </form>
        </div>
        </Jumbotron>
      </div>
    );
   }
};


export default newUser;