import React from 'react';
import { tunings } from '../assets/tunings';
import { Link } from "react-router-dom";

function Home() {

  return (
    <>
      <div className="tuning-card-block">
        {Object.keys(tunings).map(t => {
          const { title, tuning } = tunings[t];
          return (
            <div className="tuning-card" key={t}>
              <Link to={t}><h2>{title}</h2></Link>
              <div>{tuning}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Home;

