import React from 'react';
import { Menu } from 'semantic-ui-react';
import UserPanel from './UserPanel';
import Channels from './Channels';

class SidePanel extends React.Component{
   
    render(){
      const { currentUser } = this.props;

      return(
        <Menu
         size="massive"
         inverted
         fixed="left"
         vertical
         style={{background:'red',fontSize:'2rem'}}>
        <UserPanel currentUser={currentUser}/>
        <Channels currentUser={currentUser} />
        </Menu>
      )
    }
  }
  
  export default SidePanel;