import React from 'react';
import { Grid,Header,Comment } from 'semantic-ui-react';
import moment from 'moment';

const timeFromNow = timestamp => moment(timestamp).fromNow()

class UserPanel extends React.Component{
  state = {
    user : this.props.currentUser
  }


  render(){
    const {user} = this.state;
    return(
      <Grid style={{background:'red'}}>
        <Grid.Column>
          <Grid.Row style={{padding:'0.4em',margin:0}}>
            <Header inverted floated="left" as="h2">
              <Header.Content>{ user }</Header.Content>
              
            </Header>
            
          </Grid.Row>
          <Grid.Row style={{padding:'0.5em',margin:5}}>
            <h4 style={{color:'#fff'}}>{`Online for ${timeFromNow()}`}</h4>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    )
  }
}

export default UserPanel;
