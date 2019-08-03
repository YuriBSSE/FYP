import React, { Component } from 'react';
// import SignUp from './components/signup';
import SignIn from './components/signin';
import firebaseApi from './config/firebase';
import AdminDashboard from './components/admindashboard';
import { Navbar } from 'react-bootstrap';
import Admin from './admin.png'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: true,
    }

  }

  componentDidMount() {
    this.authListener()
  }

  authListener() {
    firebaseApi.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: null })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand >
            <img
              alt='a'
              src={Admin}
              width="30"
              height="30"

              className="d-inline-block align-top mr-1"
            />
            {'Admin Panel'}
          </Navbar.Brand>
        </Navbar>
        {this.state.user ? (<AdminDashboard />)
          :
          (<SignIn />)}
      </div>
    )
  }

}

export default App;
