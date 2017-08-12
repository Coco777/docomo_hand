import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontAwesome from 'react-fontawesome';

const styles = {
  title: {
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  edit: {
    fontSize: 16,
  },
};

const MypageNavbar = () => (
  <AppBar
    title={<span style={styles.title}>マイページ</span>}
    iconElementLeft={<FlatButton icon={<FontAwesome name='chevron-left' size='2x' inverse='true' />} href='result.html' className='nav-icon' />}
    iconElementRight={<FlatButton label='編集' labelStyle={styles.edit} href='#' />}
    className='hand-navbar'
  />
);

export default MypageNavbar;
