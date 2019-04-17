import React, { Component } from 'react';
import './App.css';
import { Grid } from  'semantic-ui-react';
import SidePanel from './SidePanel/SidePanel';
import {connect} from  'react-redux';
import Messages from './Messages/Messages';


const App = ({currentUser,currentChannel})=>{
    return (
    <Grid colums="equal" className="app" style={{background:'#eee'}}>
    
      <SidePanel key={currentUser && currentUser.id} currentUser={currentUser} style={{width : 800}}/>
        <Grid.Column style={{marginLeft : 350}} width={6}>
         <Messages  key={currentChannel && currentChannel.id} currentUser={currentUser} currentChannel={currentChannel}  /> 
      </Grid.Column> 
    </Grid>
    );
  
}
const mapStateToProps = (state)=>({
  currentUser : state.user.currentUser,
  currentChannel : state.channel.currentChannel,
});


export default connect(mapStateToProps)(App);
