import React from 'react';
import ReactDOM from 'react-dom';
import App from './module/index.js';

/*
build scripts
"scripts": {
    "start": "react-scripts start",
    "build": "rm -rf dist && set NODE_ENV=production&& babel src/lib --out-dir dist --copy-files --ignore __tests__,spec.js,test.js,__snapshots__",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
*/

ReactDOM.render(<App/>,document.getElementById("root"));

