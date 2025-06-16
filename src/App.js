import './App.css';
import NavBar from './components/NavBar.js';
import News from './components/News.js';
import React, { Component } from 'react';
import Loader from './loader.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <div
            style={{
              // alignItems: "center",
              // justifyContent:"center",
              
              marginTop:"40vh",
              marginLeft:"92vh"
              
            }}
          >
            <Loader />
          </div>
        ) : (
          <>
            <NavBar></NavBar>
            <News></News>
          </>
        )}
      </div>
    );
  }
}
