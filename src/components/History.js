import React from 'react';

const History = (props) => {
  console.log(props.history);
  const history = props.history.map((story) => {
    return (
      <div className="content">
        <div className="header">{story}</div>
      </div>
    );
  });
  return <div className="ui celled list">{history}</div>;
};

export default History;
