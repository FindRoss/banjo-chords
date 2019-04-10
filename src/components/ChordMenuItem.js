import React from 'react';

import '../App.css';

const chordMenuItem = (props) => (
  <div>
    <button
      className="chordBtn"
      style={props.buttonDesign}
      onClick={props.clicked}
      value={props.chord}
    >
      {props.chord.toUpperCase()}
    </button>
  </div>

);

export default chordMenuItem; 