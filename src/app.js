import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import Mypage from './components/Mypage';
import Search from './components/Search';
import Result from './components/Result';

injectTapEventPlugin();

if (document.getElementById("app-mypage") != null) {
  ReactDOM.render(
    <Mypage />,
    document.getElementById('app-mypage')
  );
} else if (document.getElementById("app-search") != null) {
  ReactDOM.render(
    React.createElement(Search, {}),
    document.getElementById('app-search')
  );
} else if (document.getElementById("app-result") != null) {
  ReactDOM.render(
    <Result />,
    document.getElementById('app-result')
  );
}
