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

const SearchNavbar = () => (
  <AppBar
    title={<span style={styles.title}>検索</span>}
    iconElementLeft={<FlatButton icon={<FontAwesome name='chevron-left' size='2x' inverse='true' />} href='./result.html' className='nav-fa-icon' />}
    iconElementRight={<FlatButton label='' href='#' />}
    className='hand-navbar'
  />
);

export default SearchNavbar;
