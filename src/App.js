import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';

let history = [];

class App extends React.Component {
  state = { results: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get('http://hn.algolia.com/api/v1/search?', {
      params: { query: term },
    });
    history.push(term);
    this.setState({ results: response.data.hits });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ResultList results={this.state.results} history={history} />
      </div>
    );
  }
}

export default App;
