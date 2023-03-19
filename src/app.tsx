import React from 'react'
import * as ReactDOM from 'react-dom/client';

function render() {
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(<h2>Hello from React!</h2>);
}

render();
