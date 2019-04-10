import React from 'react';
import ReactDOM from 'react-dom';
import appCSS from 'app.css';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
    <div class=appCSS.red>{title}</div>,
    document.getElementById('app')
);

module.hot.accept();