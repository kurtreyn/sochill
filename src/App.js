import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/sass/style.css';
import React, { useState } from 'react';
import { HashRouter } from 'react-router-dom';

import Main from './components/Main';

function App() {
  return (
    <HashRouter>
      <Main />
    </HashRouter>
  );
}

export default App;
