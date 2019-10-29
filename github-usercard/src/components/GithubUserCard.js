import React from 'react'
import styled from 'styled-components';

import GithubCalendar from 'github-calendar';

const CardContainer = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: .5%;
`;

const User = styled.div`
  width: 100%;
  display: flex;
`;

const Avatar = styled.a`
  width: 40%;
  padding: 1%;

  img {
    width: 100%;
    box-shadow: 0 0 5px 1px rgb(50, 50, 50, 0.5)
  }
`;

const Details = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const Followers = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  h1 {
    width: 100%;
    padding-left: 6%;
  }
`;

const Follower = styled.div`
  width: 20%;
  padding: 8px;
  text-align: center;
  
  img {
    width: 40%;
    box-shadow: 0 0 5px 1px rgb(50, 50, 50, 0.5);

    :hover {
      transform: scale(1.2);
    }
  }
`;

const ContributionChart = styled.div`
  width: 98%;
`

class GithubUserCard extends React.Component {

  componentDidUpdate(prevProps) {
    if (prevProps.username !== this.props.username) {
      GithubCalendar('.calendar', this.props.username, { responsive: true })
    }
  }

  render() {
    return (
      <CardContainer>
        <User>
          <Avatar href={this.props.profileUrl} target="_blank" rel="noopener noreferrer">
            <img src={this.props.avatarUrl} alt={`${this.props.name}'s avatar`} />
          </Avatar>
          <Details>
            <h1>{this.props.name}</h1>
            <h2 style={{ fontStyle: 'italic' }}>{this.props.username}</h2>
            <p>Location: {this.props.location}</p>
            <p>Repos: {this.props.repos}</p>
            <p>Followers: {this.props.followers}</p>
            <p>Following: {this.props.following}</p>
            <p>Bio: {this.props.bio}</p>
          </Details>
        </User>
        <ContributionChart className="calendar">Loading contribution chart....</ContributionChart>
        <Followers>
          <h1>Followers</h1>
          {this.props.followerList.map((follower, idx) => (
            <Follower key={idx}>
              <a href={follower.html_url} target="_blank" rel="noopener noreferrer"><img src={follower.avatar_url} alt={`${follower.login}'s avatar`} /></a>
              <p>{follower.login}</p>
            </Follower>
          ))}
        </Followers>
      </CardContainer>
    )
  }
}

export default GithubUserCard;
