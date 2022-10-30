import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";
import Chord from './chord';
import { tunings } from '../assets/tunings';

function tuning() {
  let { id } = useParams();
  const [key, setKey] = useState('All');

  const { title, tuning, chords, notes } = tunings[id];

  const allChords = Object.entries(chords);
  console.log(allChords);

  return (
    <div>
      <span><Link to="/" exact>{`<`} Home</Link></span>
      <h1 style={{ marginTop: "1rem" }}>{title} - {tuning}</h1>
      <div>
        <h3>{key}</h3>
        <select onChange={(e) => setKey(e.target.value)}>
          <option value="">All Notes</option>
          <option value="G">Key of G</option>
          <option value="A">Key of A</option>
        </select>
      </div>
      <div className="chord-grid">
        {Object.entries(chords).map(([key, value], index) => <Chord chordTitle={key} chordNotes={value} fretNotes={notes} tuning={title} key={index} />)}
      </div>
    </div>
  )
}
export default tuning;

