//Main App

import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';
import History from './components/History';
import Route from './components/Route';
import Header from './components/Header';

//Keep track of the History state
let history = [];

class App extends React.Component {
  state = { results: [] };

  //Performs the API call
  onSearchSubmit = async (term) => {
    const response = await axios.get('https://hn.algolia.com/api/v1/search?', {
      params: { query: term },
    });
    history.push(term);
    this.setState({ results: response.data.hits });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <Header />
        <Route path="/">
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ResultList results={this.state.results} />
        </Route>
        <Route path="/history">
          <History history={history} />
        </Route>
      </div>
    );
  }
}

export default App;
