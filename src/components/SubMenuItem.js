import React, { Component } from 'react';

import '../App.css';


class subMenuItem extends Component {

  onClick(event, index) {
    this.props.clicked(event, index)
  }


  render() {
    return (
      <div>
        <button
          onClick={e => this.onClick(e, this.props.indx)}
          specific={this.props.indx}
          className="chordBtn"
        >{this.props.chord}</button>
      </div>
    );
  }

}

export default subMenuItem; 