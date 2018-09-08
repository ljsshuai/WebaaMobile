import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import Login from './pages/login';
import List from './pages/list';
import {Provider} from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import reducers from './actions/reducers'
import { HashRouter,Switch,Router, Route ,Redirect,BrowserRouter} from 'react-router-dom'
const store = createStore(reducers,applyMiddleware(thunk));
import createHistory from 'history/createBrowserHistory'
import UserList from "./pages/userlist";
const history = createHistory()
const location = history.location
class Selfindex extends React.Component{
  render(){
    return (
      <Provider store={store}>
          <HashRouter>
            <Switch>
                <Route  exact  path="/login" component={Login}></Route>
                <Route  exact  path="/userlist" component={UserList}></Route>
          </Switch>
        </HashRouter>
     </Provider>
    )
  }
}


if (module.hot) {
    module.hot.accept(() => {
        ReactDOM.render(
            <Selfindex />,
            document.getElementById('example')
        )
    })
}

ReactDOM.render(
    <Selfindex />,
    document.getElementById('example')
)

  // <Route   path="/" component={Index}>


