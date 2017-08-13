import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  load: {
    textAlign: 'center',
  },
};

export default class ProfileModal extends React.Component {
  render() {
    const actions = [
      <FlatButton
        label='キャンセル'
        onTouchTap={this.props.onCansel}
      />,
    ];

    return (
      <div>
        <Dialog
          title='承認待ちです…'
          actions={actions}
          modal={true}
          open={this.props.isOpen}
        >
        <div style={styles.load}>
          <img className='profile-icon' src='images/load.gif' alt='loading...' />
        </div>
        </Dialog>
      </div>
    );
  }
}
