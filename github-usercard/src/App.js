import React from 'react';

import axios from 'axios';

import Search from './components/Search';
import GithubUserCard from './components/GithubUserCard';

import './App.css';

class App extends React.Component {
  state = {
    user: {},
    followers: [],
    userSearch: 'TinySquid'
  };

  componentDidMount() {
    this.getApiData(this.state.userSearch);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.userSearch !== this.state.userSearch) {
      this.getApiData(this.state.userSearch);
    }
  }

  getApiData = username => {
    console.log('api call');
    axios.get(`https://api.github.com/users/${username}`)
      .then(response => {
        this.setState({ user: response.data });

        axios.get(response.data.followers_url)
          .then(followerData => {
            this.setState({ followers: followerData.data });
          })
          .catch(followerError => {
            console.log(followerError);
          });

      })
      .catch(error => {
        console.log(error);
      });
  }

  updateUserSearch = newUsername => {
    console.log('New user submitted:', newUsername);
    this.setState({ userSearch: newUsername });
  }

  render() {
    return (
      <div className="app">
        <Search updateUserSearch={this.updateUserSearch} />
        <GithubUserCard
          avatarUrl={this.state.user.avatar_url}
          name={this.state.user.name}
          username={this.state.user.login}
          location={this.state.user.location}
          profileUrl={this.state.user.html_url}
          repos={this.state.user.public_repos}
          followers={this.state.user.followers}
          following={this.state.user.following}
          bio={this.state.user.bio}
          followerList={this.state.followers}
        />
      </div>
    )
  }
}

export default App;


