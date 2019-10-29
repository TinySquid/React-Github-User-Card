import React from 'react'
import styled from 'styled-components';

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

const Avatar = styled.img`
  width: 40%;
  padding: 1%;
`;

const Details = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

const GithubUserCard = ({ avatarUrl, name, username, location, profileUrl, followers, following, bio }) => {
  return (
    <CardContainer>
      <User>
        <Avatar src={avatarUrl} alt={`${name}'s avatar`} />
        <Details>
          <h1>{name}</h1>
          <h2 style={{ fontStyle: 'italic' }}>{username}</h2>
          <p>Location: {location}</p>
          <p>Profile: <a href={profileUrl}>{profileUrl}</a></p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Bio: {bio}</p>
        </Details>
      </User>
    </CardContainer>
  )
}

export default GithubUserCard;
