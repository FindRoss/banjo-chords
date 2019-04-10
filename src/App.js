import React, { Component } from 'react';
import BanjoChord from './components/BanjoChord';
import ChordMenu from './components/ChordMenu';
import SubMenu from './components/SubMenu';

import './App.css';

const chords = {
  mainChords: {
    c: "Picture of a C",
    d: "Picture of a D",
    e: "Picture of a E",
    f: "Picture of a F",
    g: "Picture of a G",
    a: "Picture of a A",
    b: "Picture of a B",
  },
  subChords: {
    c: [
      { cmaj: "Picture of CMaj" },
      { cmin: "Picture of CMin" },
      { c7: "Picture of C7" },
      // and so on ...
    ],
    d: [
      { dmaj: "Picture of DMaj" },
      { dmin: "Picture of DMin" },
      { d7: "Picture of D7" }
    ],
    e: [
      { emaj: "Picture of EMaj" },
      { emin: "Picture of EMin" },
      { e7: "Picture of E7" }
    ],
    f: [
      { fmaj: "Picture of Fmaj" },
      { fmin: "Picture of FMin" },
      { f7: "Picture of F7" }
    ],
    g: [
      { gmaj: "Picture of GMaj" },
      { gmin: "Picture of GMin" },
      { g7: "Picture of G7" }
    ],
    a: [
      { amaj: "Picture of AMaj" },
      { amin: "Picture of AMin" },
      { a7: "Picture of A7" }
    ],
    b: [
      { bmaj: "Picture of BMaj" },
      { bmin: "Picture of BMin" },
      { fb7: "Picture of B7" }
    ],
  },
}

class App extends Component {

  state = {
    currentChord: 'c',
    subChordIndex: null,
    mainChord: true
  }

  chordClick = (event) => {
    event.preventDefault();
    let chordChoice = event.target.value;

    this.setState({
      currentChord: chordChoice,
      mainChord: true
    })
  }

  subChordClick = (e, index) => {
    e.preventDefault();
    let chordIndex = index;

    this.setState({
      subChordIndex: chordIndex,
      mainChord: false
    })
  }

  render() {

    return (

      <div className="app">
        <ChordMenu
          chords={chords.mainChords}
          showChord={this.chordClick}
        />
        <SubMenu
          subChords={chords.subChords[this.state.currentChord]}
          showChord={this.subChordClick}
        />
        {this.state.mainChord ? (
          <BanjoChord label={chords.mainChords[this.state.currentChord]} />
        ) : (
            <BanjoChord label={Object.values(chords.subChords[this.state.currentChord][this.state.subChordIndex])[0]} />
          )}
      </div>
    )
  }
}

export default App;