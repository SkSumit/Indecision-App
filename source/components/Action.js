import React from 'react';

const Action = (props) =>{
    return <button className = 'big-button 'onClick={props.handlePick} disabled = { !props.hasOption}> Suggest it!</button>;
  }

  export default Action