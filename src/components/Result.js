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

export default class Result extends React.Component {
  state = {
    showModal: false,
    userName: '',
    userIcon: '',
  };

  handleTouchTap = (data, event) => {
    this.setState({
      showModal: true,
      userName: data[0],
      userIcon: data[1],
    });
  };

  handleCansel = (event) => {
    this.setState({ showModal: false });
  };

  handleSubmit = (event) => {
    this.setState({ showModal: false });
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
              onTouchTap={this.handleTouchTap.bind(this, ['Brendan Lim', 'images/user-icon.png'])}
            />
            <ListItem
              primaryText='Eric Hoffman'
              leftAvatar={<Avatar src='images/user-icon.png' />}
              rightIcon={<CommunicationChatBubble />}
              onTouchTap={this.handleTouchTap.bind(this, ['Eric Hoffman', 'images/user-icon.png'])}
            />
          </List>
          <Divider />
          <List>
            <Subheader>近く</Subheader>
            <ListItem
              primaryText='Grace Ng'
              leftAvatar={<Avatar src='images/user-icon.png' />}
              rightIcon={<CommunicationChatBubble />}
              onTouchTap={this.handleTouchTap.bind(this, ['Grace Ng', 'images/user-icon.png'])}
            />
            <ListItem
              primaryText='Kerem Suer'
              leftAvatar={<Avatar src='images/user-icon.png' />}
              rightIcon={<CommunicationChatBubble />}
              onTouchTap={this.handleTouchTap.bind(this, ['Kerem Suer', 'images/user-icon.png'])}
            />
          </List>
          <Divider />
          <List>
            <Subheader>少し離れている</Subheader>
            <ListItem
              primaryText='Raquel Parrado'
              leftAvatar={<Avatar src='images/user-icon.png' />}
              rightIcon={<CommunicationChatBubble />}
              onTouchTap={this.handleTouchTap.bind(this, ['Raquel Parrado', 'images/user-icon.png'])}
            />
            <ListItem
              primaryText='Chelsea Otakan'
              leftAvatar={<Avatar src='images/user-icon.png' />}
              rightIcon={<CommunicationChatBubble />}
              onTouchTap={this.handleTouchTap.bind(this, ['Chelsea Otakan', 'images/user-icon.png'])}
            />
            <ListItem
              primaryText='James Anderson'
              leftAvatar={<Avatar src='images/user-icon.png' />}
              rightIcon={<CommunicationChatBubble />}
              onTouchTap={this.handleTouchTap.bind(this, ['James Anderson', 'images/user-icon.png'])}
            />
          </List>
          <ProfileModal
            isOpen={this.state.showModal}
            onCansel={this.handleCansel}
            onSubmit={this.handleSubmit}
            userName={this.state.userName}
            userIcon={this.state.userIcon}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
