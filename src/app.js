import React from 'react';
import ReactDOM from 'react-dom';
import Mypage from './components/Mypage';
import Result from './components/Result';

if (document.getElementById("app-mypage") != null) {
  ReactDOM.render(
    <Mypage />,
    document.getElementById('app-mypage')
  );
} else if (document.getElementById("app-result") != null) {
  ReactDOM.render(
    <Result />,
    document.getElementById('app-result')
  );
}
