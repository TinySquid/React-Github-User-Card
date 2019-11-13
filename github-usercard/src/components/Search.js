import React from 'react'
import styled from 'styled-components';

const Form = styled.form`
  text-align: center;
  margin: 2%;
  
  input {
    padding: 2px 0;
  }

  button {
    border: 1px solid black;
    box-shadow: inset 0 0 2px 1px rgb(60, 60, 60, 0.5);
    padding: 2px 10px;
    margin: 8px;

    :active {
      box-shadow: none;
    }
  }
`;


class Search extends React.Component {

  state = {
    search: ''
  }

  handleChange = e => {
    this.setState({ search: e.target.value });
  }

  render() {
    return (
      <Form onSubmit={e => { e.preventDefault(); this.props.updateUserSearch(this.state.search) }}>
        <input type="text" value={this.state.search} onChange={this.handleChange} />
        <button type="submit">Search</button>
      </Form>
    )
  }
}

export default Search;