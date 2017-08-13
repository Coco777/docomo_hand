import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchNavbar from './SearchNavbar';

const styles = {
  searchField: {
    marginLeft: 10,
    marginRight: 8,
  },
  itemName: {
    paddingTop: 15,
    marginTop: 10,
    marginBottom: 4,
    color: '#333333',
    fontWeight: 'bold',
  },
  chip: {
    margin: 4,
    backgroundColor: '#cccccc',
    borderRadius: 8,
  },
  chipLabel: {
    color: '#333333',
    fontWeight: 'bold',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  searchBtn: {
    display: 'block',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
    height: 40,
  },
  searchBtnLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
};

var Search = React.createClass({
  getInitialState: function() {
    return {
      value1: null,
      value2: null,
      value3: null,
      chips: (new Array(39)).fill(styles.chip),
      chipLabels: (new Array(39)).fill(styles.chipLabel),
    };
  },

  _valueChange1: function(event, index, value) {
    this.setState({ value1: value });
  },

  _valueChange2: function(event, index, value) {
    this.setState({ value2: value });
  },

  _valueChange3: function(event, index, value) {
    this.setState({ value3: value });
  },

  _handleOnTouchTap: function(key, event) {
    var chips = JSON.parse(JSON.stringify(this.state.chips));
    var chipLabels = JSON.parse(JSON.stringify(this.state.chipLabels));
    if (chips[key].backgroundColor == '#cccccc') {
      chips[key].backgroundColor = '#ffd700';
      chipLabels[key].color = '#ffffff';
    } else {
      chips[key].backgroundColor = '#cccccc';
      chipLabels[key].color = '#333333';
    }
    this.setState({ chips: chips, chipLabels: chipLabels });
  },

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <SearchNavbar />
          <div style={styles.searchField}>
            <SelectField
              floatingLabelText='学部'
              value={this.state.value1}
              onChange={this._valueChange1}
            >
              <MenuItem value={null} primaryText='' />
              <MenuItem value={1} primaryText='法学部' />
              <MenuItem value={2} primaryText='経済学部' />
              <MenuItem value={3} primaryText='文学部' />
              <MenuItem value={4} primaryText='理学部' />
              <MenuItem value={5} primaryText='工学部' />
            </SelectField>
            <br />
            <SelectField
              floatingLabelText='学科'
              value={this.state.value2}
              onChange={this._valueChange2}
            >
              <MenuItem value={null} primaryText='' />
              <MenuItem value={1} primaryText='法学科' />
              <MenuItem value={2} primaryText='経済学科' />
              <MenuItem value={3} primaryText='数学科' />
              <MenuItem value={4} primaryText='情報理工学科' />
              <MenuItem value={5} primaryText='物理学科' />
              <MenuItem value={6} primaryText='化学科' />
            </SelectField>
            <br />
            <SelectField
              floatingLabelText='学年'
              value={this.state.value3}
              onChange={this._valueChange3}
            >
              <MenuItem value={null} primaryText='' />
              <MenuItem value={1} primaryText='学部1年' />
              <MenuItem value={2} primaryText='学部2年' />
              <MenuItem value={3} primaryText='学部3年' />
              <MenuItem value={4} primaryText='学部4年' />
              <MenuItem value={5} primaryText='修士1年' />
              <MenuItem value={6} primaryText='修士2年' />
            </SelectField>
            <br />
            <div style={styles.itemName}>サークル: </div>
            <div style={styles.wrapper}>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 0)} style={this.state.chips[0]} labelStyle={this.state.chipLabels[0]}>サッカー</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 1)} style={this.state.chips[1]} labelStyle={this.state.chipLabels[1]}>野球</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 2)} style={this.state.chips[2]} labelStyle={this.state.chipLabels[2]}>テニス</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 3)} style={this.state.chips[3]} labelStyle={this.state.chipLabels[3]}>ソフトボール</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 4)} style={this.state.chips[4]} labelStyle={this.state.chipLabels[4]}>フットサル</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 5)} style={this.state.chips[5]} labelStyle={this.state.chipLabels[5]}>スキー</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 6)} style={this.state.chips[6]} labelStyle={this.state.chipLabels[6]}>卓球</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 7)} style={this.state.chips[7]} labelStyle={this.state.chipLabels[7]}>陸上</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 8)} style={this.state.chips[8]} labelStyle={this.state.chipLabels[8]}>軽音</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 9)} style={this.state.chips[9]} labelStyle={this.state.chipLabels[9]}>吹奏楽</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 10)} style={this.state.chips[10]} labelStyle={this.state.chipLabels[10]}>映画研究</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 11)} style={this.state.chips[11]} labelStyle={this.state.chipLabels[11]}>漫画研究</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 12)} style={this.state.chips[12]} labelStyle={this.state.chipLabels[12]}>ゲーム研究</Chip>
            </div>
            <div style={styles.itemName}>アルバイト: </div>
            <div style={styles.wrapper}>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 13)} style={this.state.chips[13]} labelStyle={this.state.chipLabels[13]}>塾講師</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 14)} style={this.state.chips[14]} labelStyle={this.state.chipLabels[14]}>家庭教師</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 15)} style={this.state.chips[15]} labelStyle={this.state.chipLabels[15]}>コンビニ</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 16)} style={this.state.chips[16]} labelStyle={this.state.chipLabels[16]}>居酒屋</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 17)} style={this.state.chips[17]} labelStyle={this.state.chipLabels[17]}>単発</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 18)} style={this.state.chips[18]} labelStyle={this.state.chipLabels[18]}>プログラミング</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 19)} style={this.state.chips[19]} labelStyle={this.state.chipLabels[19]}>ファミレス</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 20)} style={this.state.chips[20]} labelStyle={this.state.chipLabels[20]}>TA</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 21)} style={this.state.chips[21]} labelStyle={this.state.chipLabels[21]}>配達</Chip>
            </div>
            <div style={styles.itemName}>趣味: </div>
            <div style={styles.wrapper}>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 22)} style={this.state.chips[22]} labelStyle={this.state.chipLabels[22]}>読書</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 23)} style={this.state.chips[23]} labelStyle={this.state.chipLabels[23]}>筋トレ</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 24)} style={this.state.chips[24]} labelStyle={this.state.chipLabels[24]}>映画鑑賞</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 25)} style={this.state.chips[25]} labelStyle={this.state.chipLabels[25]}>海外ドラマ</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 26)} style={this.state.chips[26]} labelStyle={this.state.chipLabels[26]}>サイクリング</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 27)} style={this.state.chips[27]} labelStyle={this.state.chipLabels[27]}>イラスト</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 28)} style={this.state.chips[28]} labelStyle={this.state.chipLabels[28]}>アニメ</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 29)} style={this.state.chips[29]} labelStyle={this.state.chipLabels[29]}>アイドル</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 30)} style={this.state.chips[30]} labelStyle={this.state.chipLabels[30]}>ゲーム</Chip>
            </div>
            <div style={styles.itemName}>好きな教授: </div>
            <div style={styles.wrapper}>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 31)} style={this.state.chips[31]} labelStyle={this.state.chipLabels[31]}>M野H史</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 32)} style={this.state.chips[32]} labelStyle={this.state.chipLabels[32]}>F田N樹</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 33)} style={this.state.chips[33]} labelStyle={this.state.chipLabels[33]}>K西T紘</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 34)} style={this.state.chips[34]} labelStyle={this.state.chipLabels[34]}>S井S四郎</Chip>
            </div>
            <div style={styles.itemName}>嫌いな教授: </div>
            <div style={styles.wrapper}>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 35)} style={this.state.chips[35]} labelStyle={this.state.chipLabels[35]}>M野H史</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 36)} style={this.state.chips[36]} labelStyle={this.state.chipLabels[36]}>F田N樹</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 37)} style={this.state.chips[37]} labelStyle={this.state.chipLabels[37]}>K西T紘</Chip>
              <Chip onTouchTap={this._handleOnTouchTap.bind(this, 38)} style={this.state.chips[38]} labelStyle={this.state.chipLabels[38]}>S井S四郎</Chip>
            </div>
          </div>
          <br />
          <RaisedButton label='検索' primary={true} style={styles.searchBtn} labelStyle={styles.searchBtnLabel} href='./result.html' />
        </div>
      </MuiThemeProvider>
    );
  }
});

export default Search;
