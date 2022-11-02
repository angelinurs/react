import React from 'react';
import './css/Apple.css';

function Content() {
  let title="title line";
  let customStyle={ color: '#0f0', fontSize: "50px" };

  return (
    <div id="content" className="Content">
      <h2 style={ { color: '#f00', fontSize: "50px" } }>{title}</h2>
      <h2 style={ customStyle }>{title}-2</h2>
    </div>
  );
}

export default Content;
