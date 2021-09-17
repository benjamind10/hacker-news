//SearchBar component its job is just to simply render a search bar that will take input from the user.

import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  //Prevents the normal behavior of a form and updates the search state
  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Hacker News Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="Search by entering a term and pressing the 'Enter' key."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
