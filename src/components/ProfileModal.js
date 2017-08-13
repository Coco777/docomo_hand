import React from 'react';
import ReactDOM from 'react-dom';
import Chip from 'material-ui/Chip';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  itemName: {
    width: 90,
    paddingTop: 8,
    marginRight: 6,
    textAlign: 'right',
  },
  chip: {
    margin: 4,
    backgroundColor: '#ffd700',
    borderRadius: 8,
  },
  chipLabel: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

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
            <img className='profile-icon' src={this.props.userIcon} alt='icon' />
            <h1>{this.props.userName}</h1>
            <h2>理工学部 情報科学科 3年</h2>
          </div>
          <div style={styles.wrapper}>
            <div style={styles.itemName}>サークル: </div>
            <Chip style={styles.chip} labelStyle={styles.chipLabel}>フットサル</Chip>
          </div>
          <div style={styles.wrapper}>
            <div style={styles.itemName}>アルバイト: </div>
            <Chip style={styles.chip} labelStyle={styles.chipLabel}>カフェ</Chip>
          </div>
          <div style={styles.wrapper}>
            <div style={styles.itemName}>趣味: </div>
            <Chip style={styles.chip} labelStyle={styles.chipLabel}>筋トレ</Chip>
          </div>
          <div style={styles.wrapper}>
            <div style={styles.itemName}>好きな教授: </div>
            <Chip style={styles.chip} labelStyle={styles.chipLabel}>M野H史</Chip>
          </div>
          <div style={styles.wrapper}>
            <div style={styles.itemName}>嫌いな教授: </div>
            <Chip style={styles.chip} labelStyle={styles.chipLabel}>F田N樹</Chip>
          </div>
        </Dialog>
      </div>
    );
  }
}
