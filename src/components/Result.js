import React from 'react';
import ReactDOM from 'react-dom';
import Chip from 'material-ui/Chip';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ResultNavbar from './ResultNavbar';

const Result = () => (
  <MuiThemeProvider>
    <div>
      <ResultNavbar />
      <div>This is result</div>
    </div>
  </MuiThemeProvider>
);

export default Result;
