import React from 'react';
import ChordMenuItem from './ChordMenuItem';

import '../App.css';

const chordMenu = (props) => (
  <div>
    <nav className="chordNav">
      {Object.keys(props.chords).map((chord, index) =>
        <ChordMenuItem
          chord={chord}
          clicked={props.showChord}
          key={index}
        />
      )}
    </nav>
    <nav>

    </nav>
  </div>
);

export default chordMenu;

