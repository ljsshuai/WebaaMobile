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
import Adminlist from "./pages/adminlist";

import Accounts from "./pages/accounts";
import Manger from "./pages/mager";
import MangerReferee from "./pages/manager_referee";
import AccountManage from "./pages/manage_account_manage";
import ManagerStatus from "./pages/plotter_manager_status";
import account_manage_more from "./pages/account_manage_more";
import SetUpRoutes from "./pages/setup/admin_setup";
const history = createHistory()
const location = history.location
class Selfindex extends React.Component{
  render(){
    return (
      <Provider store={store}>
          <HashRouter>
            <Switch>
                <Route  exact  path="/login" component={Login}></Route>
                <Route    path="/userlist" component={UserList}></Route>
                <Route    path="/adminlist" component={Adminlist}></Route>
                <Route    path="/manger" component={Manger}></Route>
                <Route path="/managerreferee" component={MangerReferee}/>
                <Route path="/accountmanage" component={AccountManage}/>
                <Route path="/managerstatus" component={ManagerStatus}/>
                <Route  path="/accountmore" component={account_manage_more}/>
                <Route path="/setup" component={SetUpRoutes}/>
                <Route    path="/accounts" component={Accounts}></Route>
                <Route  exact  path="/list" component={List}></Route>
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


