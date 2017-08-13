import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class ProfileModal extends React.Component {
  render() {
    const actions = [
      <FlatButton
        label='キャンセル'
        onTouchTap={this.props.onCansel}
      />,
      <FlatButton
        label='リクエストを送る'
        primary={true}
        onTouchTap={this.props.onSubmit}
      />,
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={true}
          open={this.props.isOpen}
        >
          <div className='profile'>
            <img className='profile-icon profile-modal-icon' src={this.props.userIcon} alt='icon' />
            <h1>{this.props.userName}</h1>
            <h2>{this.props.faculty} {this.props.department} {this.props.grade}</h2>
          </div>
        </Dialog>
      </div>
    );
  }
}
