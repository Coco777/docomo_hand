import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ResultNavbar from './ResultNavbar';

const Result = () => (
  <MuiThemeProvider>
    <div>
      <ResultNavbar />
      <List>
        <Subheader>すぐ近く</Subheader>
        <ListItem
          primaryText='Brendan Lim'
          leftAvatar={<Avatar src='images/user-icon.png' />}
          rightIcon={<CommunicationChatBubble />}
        />
        <ListItem
          primaryText='Eric Hoffman'
          leftAvatar={<Avatar src='images/user-icon.png' />}
          rightIcon={<CommunicationChatBubble />}
        />
      </List>
      <Divider />
      <List>
        <Subheader>近く</Subheader>
        <ListItem
          primaryText='Grace Ng'
          leftAvatar={<Avatar src='images/user-icon.png' />}
          rightIcon={<CommunicationChatBubble />}
        />
        <ListItem
          primaryText='Kerem Suer'
          leftAvatar={<Avatar src='images/user-icon.png' />}
          rightIcon={<CommunicationChatBubble />}
        />
      </List>
      <Divider />
      <List>
        <Subheader>少し離れている</Subheader>
        <ListItem
          primaryText='Raquel Parrado'
          leftAvatar={<Avatar src='images/user-icon.png' />}
          rightIcon={<CommunicationChatBubble />}
        />
        <ListItem
          primaryText='Chelsea Otakan'
          leftAvatar={<Avatar src='images/user-icon.png' />}
          rightIcon={<CommunicationChatBubble />}
        />
        <ListItem
          primaryText='James Anderson'
          leftAvatar={<Avatar src='images/user-icon.png' />}
          rightIcon={<CommunicationChatBubble />}
        />
      </List>
    </div>
  </MuiThemeProvider>
);

export default Result;
