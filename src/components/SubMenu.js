import React from 'react';

import SubMenuItem from './SubMenuItem';

const subMenu = (props) => (

  <div>
    <nav className="chordNav">
      {Object.values(props.subChords).map((chord, index) => (
        Object.keys(chord).map((c) =>
          <SubMenuItem chord={c} key={index} indx={index} clicked={props.showChord} />
        )
      ))
      }
    </nav>
  </div>
);

export default subMenu;


// What to do here? 
// 
// 
//
//

