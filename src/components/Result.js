import React from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'material-ui/Dialog';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ResultNavbar from './ResultNavbar';
import ProfileModal from './ProfileModal'
import WaitingModal from './WaitingModal'

export default class Result extends React.Component {
  state = {
    showProfileModal: false,
    showWaitingModal: false,
    userName: '',
    userIcon: '',
    faculty: '',
    department: '',
    grade: '',
  };

  handleTouchTap = (data, event) => {
    this.setState({
      showProfileModal: true,
      userName: data[0],
      faculty: data[1],
      department: data[2],
      grade: data[3],
      userIcon: data[4],
    });
  };

  handleCansel = (event) => {
    this.setState({ showProfileModal: false });
  };

  handleSubmit = (event) => {
    this.setState({ showWaitingModal: true });
  };

  handleCanselOnWaiting = (event) => {
    this.setState({ showWaitingModal: false });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <ResultNavbar />
          <List>
            <Subheader>すぐ近く</Subheader>
            <ListItem
              primaryText='Brendan Lim'
              leftAvatar={<Avatar src='images/user-icon.png' />}
              rightIcon={<CommunicationChatBubble />}
              onTouchTap={this.handleTouchTap.bind(this, ['Brendan Lim', '法学部', '法学科', '2年', 'images/user-icon.png'])}
            />
            <ListItem
              primaryText='Eric Hoffman'
              leftAvatar={<Avatar src='images/user-icon.png' />}
              rightIcon={<CommunicationChatBubble />}
              onTouchTap={this.handleTouchTap.bind(this, ['Eric Hoffman', '理学部', '化学科', '3年', 'images/user-icon.png'])}
            />
          </List>
          <Divider />
          <List>
            <Subheader>近く</Subheader>
            <ListItem
              primaryText='Grace Ng'
              leftAvatar={<Avatar src='images/user-icon.png' />}
              rightIcon={<CommunicationChatBubble />}
              onTouchTap={this.handleTouchTap.bind(this, ['Grace Ng', '経済学部', '経済学科', '1年', 'images/user-icon.png'])}
            />
            <ListItem
              primaryText='Kerem Suer'
              leftAvatar={<Avatar src='images/user-icon.png' />}
              rightIcon={<CommunicationChatBubble />}
              onTouchTap={this.handleTouchTap.bind(this, ['Kerem Suer', '工学部', '情報理工学科', '2年', 'images/user-icon.png'])}
            />
          </List>
          <Divider />
          <List>
            <Subheader>少し離れている</Subheader>
            <ListItem
              primaryText='Raquel Parrado'
              leftAvatar={<Avatar src='images/user-icon.png' />}
              rightIcon={<CommunicationChatBubble />}
              onTouchTap={this.handleTouchTap.bind(this, ['Raquel Parrado', '理学部', '数学科', '3年', 'images/user-icon.png'])}
            />
            <ListItem
              primaryText='Chelsea Otakan'
              leftAvatar={<Avatar src='images/user-icon.png' />}
              rightIcon={<CommunicationChatBubble />}
              onTouchTap={this.handleTouchTap.bind(this, ['Chelsea Otakan', '理学部', '物理学科', '4年', 'images/user-icon.png'])}
            />
            <ListItem
              primaryText='James Anderson'
              leftAvatar={<Avatar src='images/user-icon.png' />}
              rightIcon={<CommunicationChatBubble />}
              onTouchTap={this.handleTouchTap.bind(this, ['James Anderson', '工学部', '情報理工学科', '3年', 'images/user-icon.png'])}
            />
          </List>
          <ProfileModal
            isOpen={this.state.showProfileModal}
            onCansel={this.handleCansel}
            onSubmit={this.handleSubmit}
            userName={this.state.userName}
            userIcon={this.state.userIcon}
            faculty={this.state.faculty}
            department={this.state.department}
            grade={this.state.grade}
          />
          <WaitingModal
            isOpen={this.state.showWaitingModal}
            onCansel={this.handleCanselOnWaiting}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
