import React from 'react';
import {Menu} from 'semantic-ui-react';
import {connect} from 'react-redux';
import { setCurrentChannel } from '../../actions';

class Channels extends React.Component{
    state = {
        activeChannel : '',
        user : this.props.currentUser,
        channels : [],
        channel : null,
        firstLoad : true
      }

      displayChannels = (channels)=>{
          
        return channels.map((channel)=>(
             <Menu.Item
             key={channel.id}
             onClick={()=> this.changeChannel(channel)}
             name={channel.name}

             color="red"
             active={channel.id === this.state.activeChannel}
            >
            {channel.name}
            </Menu.Item>
          ))
      }

      changeChannel = (channel)=>{
        this.props.setCurrentChannel(channel);
        this.setState({channel});
        this.setActiveChannel(channel);
      }

      componentDidMount(){
        this.addListeners();
      }

       addListeners = async ()=>{
        let loadedChannels = [];
        try{
            let response = await fetch('http://localhost:8080/api/rooms');
            let data = await response.json();
            loadedChannels.push(...data);
            this.setState({channels : loadedChannels},()=>this.setFirstChannel());
        }
        catch(err){
            console.log(err);
        }
      }

      setFirstChannel = ()=>{
        const firstChannel = this.state.channels[0];
        if(this.state.firstLoad && this.state.channels.length > 0){
          this.props.setCurrentChannel(firstChannel);
          this.setActiveChannel(firstChannel);
          this.setState({channel:firstChannel});
        }
    
        this.setState({firstLoad : false});
      }

      setActiveChannel = (channel)=>{
        this.setState({activeChannel : channel.id})
      }

    render(){
        const { channels } = this.state;
        return(
        <Menu.Menu className="menu">
            
            {this.displayChannels(channels)}
        </Menu.Menu>
        )
    }
}

export default connect(null,{setCurrentChannel})(Channels);