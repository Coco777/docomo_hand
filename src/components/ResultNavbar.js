import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontAwesome from 'react-fontawesome';

const styles = {
  title: {
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

const ResultNavbar = () => (
  <AppBar
    title={<span style={styles.title}>検索結果</span>}
    iconElementLeft={<a href='./mypage.html'><img src='images/poinco.png' alt='icon' className='nav-img-icon' /></a>}
    iconElementRight={<FlatButton icon={<FontAwesome name='search' size='2x' inverse='true' />} href='./search.html' className='nav-fa-icon' />}
    className='hand-navbar'
  />
);

export default ResultNavbar;
