import React from 'react';

import axios from 'axios';

import GithubUserCard from './components/GithubUserCard';

import './App.css';

class App extends React.Component {
  state = {
    user: {},
    followers: []
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/TinySquid')
      .then(response => {
        this.setState({ user: response.data });

        axios.get(response.data.followers_url)
          .then(followerData => {
            this.setState({ followers: followerData.data }, () => console.log(this.state));
          })
          .catch(followerError => {
            console.log(followerError);
          });

      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <GithubUserCard
          avatarUrl={this.state.user.avatar_url}
          name={this.state.user.name}
          username={this.state.user.login}
          location={this.state.user.location}
          profileUrl={this.state.user.html_url}
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


