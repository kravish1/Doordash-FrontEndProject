import React from 'react';
import {Segment, Header,Input,Icon} from 'semantic-ui-react';

class MessagesHeader extends React.Component{

    displayUsers = (users)=>{
        return users.length >0 && users.map(user => (
            <span className={(user === this.props.currentUser ? 'active__user' : '')} style={{margin : '5px'}}>{user}</span>
          ));
    }
    render(){
      const {channelName,users} = this.props;
 
    return(
        <Segment clearing>
          <Header fluid="true" as="h2" textAlign="center" size="large" style={{marginBottom : 0}}>
          <span>
            {channelName !== null ? channelName.name : ''} 
            </span>
             <Header.Subheader>{this.displayUsers(users)}</Header.Subheader>
          </Header>
        </Segment>
    )
  }
}

export default MessagesHeader;
