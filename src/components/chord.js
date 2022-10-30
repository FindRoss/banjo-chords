import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';
import { chordBoard } from '../assets/chordBoard';

function Chord({ chordTitle, chordNotes, fretNotes, index, tuning }) {

  // chordTitle
  const chordID = tuning + "-" + chordTitle;

  return (
    <div className="chord" key={index} aria-label={chordNotes.toString()} onClick={() => console.log(chordID)}>
      <h2 h2 className="chord-title"> {chordTitle}</h2>
      <div className="chord-board">
        {chordBoard(chordNotes, fretNotes)}
      </div>
    </div >
  )
};

export default Chord;