import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HandNavbar from './components/HandNavbar';

const App = () => (
  <MuiThemeProvider>
    <HandNavbar />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
