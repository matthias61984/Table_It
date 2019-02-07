import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Favorites from "./pages/Favorites";
import Wrapper from "./components/Wrapper"
import newUser from './pages/newUser';

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/createUser" component={newUser} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
