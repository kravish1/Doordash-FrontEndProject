import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Login from './components/Auth/Login';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { setUser } from './actions';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer,composeWithDevTools());

class Root extends React.Component{


    componentDidMount(){
         this.props.history.push('/login');
    }

    render(){
        return  (
            <Switch>
             <Route exact path="/" component={App}  />
             <Route path="/login" render={() => {
                    return <Login setUser={this.props.setUser} history={this.props.history}/>
                    }} />
            </Switch>
    
        )
      }
}
  
  const RootWithAuth = withRouter(connect(null,{ setUser })(Root));
  
  ReactDOM.render(<Provider store={store}>
                    <Router>
                      <RootWithAuth />
                    </Router>
                  </Provider>, document.getElementById('root'));


serviceWorker.unregister();
