import React from 'react';
import {Segment,Input,Button} from 'semantic-ui-react';

class MessageForm extends React.Component{
    state = {
        message : '',
        channel : this.props.currentChannel,
        user : this.props.currentUser,
        errors : []
      }


    handleChange = (event)=>{
        this.setState({[event.target.name] : event.target.value});
    }

    sendMessage = ()=>{
        this.props.sendMessage(this.state.message);
        this.state.message = '';
          
    }
    render(){
        const {message} = this.state;
        return(
            <Segment className="message__form">
            
                <Input
                    name="message"
                    style={{marginBottom:'0.7em',width:'580px'}}
                    labelPosition="left"
                    value={message}
                    size="huge"
                    onChange={this.handleChange}
                    placeholder="Type a Message" />
                <Button
                    color="red"
                    content="Send"
                    style={{height:'53px',fontSize:'15px'}}
                    onClick={this.sendMessage}
                    />
            
        </Segment>
        )
    }
}

export default MessageForm;