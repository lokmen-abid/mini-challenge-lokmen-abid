import './App.css';
import Header from './assets/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import User from "./Components/users/User"
import Post from "./Components/posts/Post"
import Userdetails from './Components/users/Userdetails';
import Postdetails from './Components/posts/Postdetails'

function App() {
  return (
    <Router>
        <Header />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={User} />
        <Route exact path="/userdetails/:id" component={Userdetails}/>
        <Route exact path="/posts" component={Post} />
        <Route exact path="/postsdetails/:id" component={Postdetails} />
        </Switch>
    </Router>
  );
}

export default App;
