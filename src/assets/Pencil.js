import React from 'react';

const SvgEdit2 = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    {...props}
  >
    <path d="M16 3l5 5L8 21H3v-5L16 3z" />
  </svg>
);

export default SvgEdit2;
