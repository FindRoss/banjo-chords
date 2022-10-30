import React from 'react';

export const chordBoard = (notes, fretNotes) => {

  const noteInfo = [
    { cx: "10", cy: "10", cn: "s4-f0", n: "D" },
    { cx: "10", cy: "73", cn: "s4-f1", n: "D" },
    { cx: "10", cy: "146", cn: "s4-f2", n: "D" },
    { cx: "10", cy: "220", cn: "s4-f3", n: "D" },
    { cx: "10", cy: "292", cn: "s4-f4", n: "D" },
    { cx: "10", cy: "365", cn: "s4-f5", n: "D" },
    { cx: "60", cy: "10", cn: "s3-f0", n: "D" },
    { cx: "60", cy: "73", cn: "s3-f1", n: "D" },
    { cx: "60", cy: "146", cn: "s3-f2", n: "D" },
    { cx: "60", cy: "220", cn: "s3-f3", n: "D" },
    { cx: "60", cy: "292", cn: "s3-f4", n: "D" },
    { cx: "60", cy: "365", cn: "s3-f5", n: "D" },
    { cx: "109", cy: "10", cn: "s2-f0", n: "D" },
    { cx: "109", cy: "73", cn: "s2-f1", n: "D" },
    { cx: "109", cy: "146", cn: "s2-f2", n: "D" },
    { cx: "109", cy: "220", cn: "s2-f3", n: "D" },
    { cx: "109", cy: "292", cn: "s2-f4", n: "D" },
    { cx: "109", cy: "365", cn: "s2-f5", n: "D" },
    { cx: "158", cy: "10", cn: "s1-f0", n: "D" },
    { cx: "158", cy: "73", cn: "s1-f1", n: "D" },
    { cx: "158", cy: "146", cn: "s1-f2", n: "D" },
    { cx: "158", cy: "220", cn: "s1-f3", n: "D" },
    { cx: "158", cy: "292", cn: "s1-f4", n: "D" },
    { cx: "158", cy: "365", cn: "s1-f5", n: "D" }
  ];

  const fretboardNotes = noteInfo.map((n, i) => {
    return (
      <g className={n.cn} key={i}>
        <circle cx={n.cx} cy={n.cy} r="16" fill="#D9D9D9" stroke="black" strokeWidth="3" />
        <text className="note-text" x={n.cx} y={Number(n.cy) + 2} alignmentBaseline="middle" textAnchor="middle">{fretNotes[i]}</text>
      </g>
    )
  });

  const notesToShow = fretboardNotes.filter(fn => notes.includes(fn.props.className));

  const svg = (
    <svg width="168" height="350" viewBox="-10 -10 190 398" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 31L10 397" stroke="#2C2A2A" strokeWidth="2" />
      <line x1="60" y1="38" x2="60" y2="397" stroke="#2C2A2A" strokeWidth="2" />
      <line x1="109" y1="38" x2="109" y2="397" stroke="#2C2A2A" strokeWidth="2" />
      <line x1="158" y1="32" x2="158" y2="397" stroke="#2C2A2A" strokeWidth="2" />
      <line x1="9" y1="36" x2="159" y2="36" stroke="#2C2A2A" strokeWidth="4" />
      <line x1="9" y1="30" x2="159" y2="30" stroke="#2C2A2A" strokeWidth="4" />
      <line x1="9" y1="109.5" x2="159" y2="109.5" stroke="#2C2A2A" />
      <line x1="9" y1="181.5" x2="159" y2="181.5" stroke="#2C2A2A" />
      <line x1="9" y1="253.5" x2="159" y2="253.5" stroke="#2C2A2A" />
      <line x1="9" y1="325.5" x2="159" y2="325.5" stroke="#2C2A2A" />
      <line x1="9" y1="397.5" x2="159" y2="397.5" stroke="#2C2A2A" />
      {notesToShow}
    </svg>

  )
  return svg;
}