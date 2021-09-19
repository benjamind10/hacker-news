//Displays the search results on a list with an option to navigate to the specific link provided by the API

import React from 'react';

const ResultList = (props) => {
  const results = props.results.map((result) => {
    return (
      <div key={result.objectID} className="item">
        <div className="right floated content">
          <a target="blank" className="ui button" href={result.url}>
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
        </div>
      </div>
    );
  });
  return <div className="ui celled list">{results}</div>;
};

export default ResultList;
