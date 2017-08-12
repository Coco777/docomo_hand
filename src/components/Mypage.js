import React from 'react';
import ReactDOM from 'react-dom';
import Chip from 'material-ui/Chip';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MypageNavbar from './MypageNavbar';

const styles = {
  itemName: {
    width: 105,
    paddingTop: 8,
    marginRight: 6,
    textAlign: 'right',
  },
  chip: {
    margin: 4,
    backgroundColor: '#ffd700',
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

const Mypage = () => (
  <MuiThemeProvider>
    <div>
      <MypageNavbar />
      <div className='profile'>
        <img className='profile-icon' src='images/poinco.png' alt='icon' />
        <h1>鈴木 太郎</h1>
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
    </div>
  </MuiThemeProvider>
);

export default Mypage;
