import React from "react";

export default function About(props) {
  return (
    <div className="card text-center" style={{background: props.mode === 'dark'?'#28282c':'white', color: props.mode === 'dark'?'white':'black'}}>
      <div className="card-header">About Us</div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Go Now
        </a>
      </div>
      <div className="card-footer text-muted">2 days ago</div>
    </div>
  );
}
