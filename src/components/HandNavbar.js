import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
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

const HandNavbar = () => (
  <AppBar
    title={<span style={styles.title}>マイページ</span>}
    iconElementLeft={<FlatButton icon={<FontAwesome name='chevron-left' size='2x' inverse='true' />} className='nav-icon' />}
    iconElementRight={<FlatButton label='編集' labelStyle={styles.edit} />}
    className='hand-navbar'
  />
);

export default HandNavbar;
