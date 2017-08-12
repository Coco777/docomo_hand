import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  title: {
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

const HandNavbar = () => (
  <AppBar
    title={<span style={styles.title}>マイページ</span>}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    iconElementRight={<FlatButton label="編集" />}
    className='hand-navbar'
  />
);

export default HandNavbar;
