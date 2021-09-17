import React from 'react';

const History = (props) => {
  console.log(props.history);
  const history = props.history.map((story) => {
    return (
      <div className="item">
        <div className="right floated content"></div>
        <div className="content">
          <div className="header">{story}</div>
        </div>
      </div>
    );
  });
  return <div className="ui celled list">{history}</div>;
};

export default History;
