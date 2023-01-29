import React, { Component }  from 'react';

function Footer() {
  return <footer className="page-footer teal">
    <div className="container">
      ©{new Date().getFullYear()} Learning project
      <a className="grey-text text-lighten-4 right" href="https://github.com/hellokitties/hellokitties-movies-react">Repo</a>
    </div>
    <br />
  </footer>
}

export { Footer }
