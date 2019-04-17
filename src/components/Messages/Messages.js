import React from 'react';
import MessagesHeader from './MessagesHeader';
import MessageForm from './MessageForm';
import {Segment, Comment} from 'semantic-ui-react';
import Message from './Message';

class Messages extends React.Component{
    state = {      
        messages : [],
        channel : this.props.currentChannel,
        user : this.props.currentUser,   
        users : []
      }

      componentDidMount(){
        const {channel , user} = this.state;
            if(channel && user){
              this.addListeners(channel.id);
            }
      }

      addListeners = (channelId)=>{
        this.addMessageListener(channelId);
        this.updateUsers(channelId);
      }

      addMessageListener = async (channelId)=>{
        let loadedMessages = [];
        try{
            let response = await fetch(`http://localhost:8080/api/rooms/${channelId}/messages`);
            let data = await response.json();
            loadedMessages.push(...data);
            this.setState({messages : loadedMessages});
        }
        catch(err){
            console.log(err);
        }
      }

      displayMessages = (messages,user)=>{
        return messages.length >0 && messages.map(message => (
          <Message
            key={message.id}
            message={message}
            user={this.state.user}
            className={message.name === user ? '' : 'active__user'}/>
        ));
    
      }

      sendMessage = (content)=>{
        const {channel,user} = this.state;
        const newMessage = {
            name : user,
            message : content
        }

        
        if(content){
            fetch(`http://localhost:8080/api/rooms/${channel.id}/messages`,{
                method: 'POST',
                body: JSON.stringify(newMessage), 
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(response => {
                this.addListeners(channel.id);
                this.updateUsers(channel.id);
                console.log('Success:', JSON.stringify(response));
            })
            .catch(error => console.error('Error:', error));
      
          }
      }

      
        updateUsers = async (channelId)=>{
            let loadedUsers = [];
            try{
                let response = await fetch(`http://localhost:8080/api/rooms/${channelId}`);           
                let data = await response.json();
               
                loadedUsers.push(...data.users);
                this.setState({users : loadedUsers});
            }
            catch(err){
                console.log(err);
            }
        }
      
      
    render(){
        const {messages,channel,user,users} = this.state;
        return(
            <React.Fragment>
                   <MessagesHeader channelName={channel} currentUser={user} users={users}/>   
                 <Segment>
                <Comment.Group className="messages">
                    {this.displayMessages(messages,user)}                   
                </Comment.Group>
                 <MessageForm currentUser={user} currentChannel={channel} sendMessage={(content)=>{this.sendMessage(content)}}/> 
                </Segment>  
            </React.Fragment>
        )
    }
}


export default Messages;