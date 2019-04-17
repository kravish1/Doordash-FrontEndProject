import React from 'react';
import {Comment} from 'semantic-ui-react';



const Message = ({message,user})=>{
    return(<Comment>
      <Comment.Content>
        <Comment.Author>{message.name}</Comment.Author>
       
        <Comment.Text>{message.message}</Comment.Text>
      </Comment.Content>
    </Comment>)
}


export default Message;
