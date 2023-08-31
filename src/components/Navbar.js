import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  // const changegreen = ()=>{
  //   document.body.style.backgroundColor = '#35C649'
  // }
  // const changeyellow = ()=>{
  //   document.body.style.backgroundColor = '#CAB911';
  // }
  // const changecyan = ()=>{
  //   document.body.style.backgroundColor = 'cyan';
  // }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          {/* <div className="colorbtn">
            <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={changegreen} type="radio" value="" id="green" name="flexRadioDefault"/>
              <label className="form-check-label" for="green">
                Green
              </label>
            </div>
            <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={changecyan} type="radio" value="" id="cyan" name="flexRadioDefault"/>
              <label className="form-check-label" for="cyan">
                Cyan
              </label>
            </div>
            <div className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={changeyellow} type="radio" value="" id="yellow" name="flexRadioDefault"/>
              <label className="form-check-label" for="yellow">
                Yellow
              </label>
            </div>
          </div> */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.togglemode} id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'} Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "Set About Here",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired, //Here isRequired is always required.
  aboutText: PropTypes.string,
};
