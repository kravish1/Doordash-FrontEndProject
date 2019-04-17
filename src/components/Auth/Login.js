import React from 'react';
import { Grid, Form, Segment, Button, Message } from 'semantic-ui-react';

class Login extends React.Component{
    state ={
        username : '',
        errors : [],
    }

    handleChange = (event)=>{
        this.setState({ [event.target.name] : event.target.value});
    }

    handleInputError = (errors,inputName)=>{
        return errors.some(err=> err.message.toLowerCase().includes(inputName)) ? 'error' : ''
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        if(this.isFormValid()){
            this.setState({errors : []});
            this.props.setUser(this.state.username);
            this.props.history.push('/');
        }
    }

    displayErrors = (errors)=>{
        return errors.map((error,i)=>{
          return <p key={i}>{error.message}</p>
        });
      }

    isFormEmpty = ({username})=>{
        return !username.length;
    }

    isFormValid = ()=>{
        let errors = [],
        error;
        if(this.isFormEmpty(this.state)){
            error = {message : 'Fill in the username'};
            this.setState({ errors : errors.concat(error)});
            return false;
        }
        else
            return true;
    }

    render(){
        const {username,errors,loading} = this.state;
        return(
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450}}>               
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                        <Form.Input fluid name="username" icon="user" iconPosition="left" placeholder="Type your username..." onChange={this.handleChange} type="username" value={username} className={this.handleInputError(errors,'username')}/>
                        
                        <Button disabled={loading} className={loading ? 'loading' : ''} color="red" fluid size="large">Join the DoorDash Chat!</Button>
                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                        <h3>Error</h3>
                        {this.displayErrors(errors)}
                        </Message>
                    )
                    }
                </Grid.Column>
            </Grid>
        )
    }
}

export default Login;