//History page grabs all the search results passed as props and renders them as a list

import React from 'react';

const History = (props) => {
  const history = props.history.map((story, index) => {
    return (
      <div key={index} className="item">
        <div className="right floated content"></div>
        <div className="content">
          <div className="header">{story}</div>
        </div>
      </div>
    );
  });

  //Returns the history results conditinally if there are any.
  return !history.length ? (
    <div>Waiting for Results</div>
  ) : (
    <div className="ui celled list">{history}</div>
  );
};

export default History;
