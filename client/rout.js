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
import ChangePassword from "./pages/Change_Password";
import MangerHeader from "./pages/manger_header";
import MangerList from "./pages/manager_list";
import MangereCharge from "./pages/manager_recharge";
import ManagerBalance from "./pages/manager_balance";
import ManagerRepsd from "./pages/manage_repsd";
import ManagerDetails from './pages/manager_details';
import ManagerDetailsRg from "./pages/manager_details_rg";
import EditPassword from "./pages/editPassword";
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
                <Route  exact  path="/changepassword" component={ChangePassword}></Route>
                <Route  exact  path="/mangerheader" component={MangerHeader}></Route>
                <Route  exact  path="/mangerlist" component={MangerList}></Route>
                <Route  exact  path="/mangerecharge" component={MangereCharge}></Route>
                <Route  exact  path="/mangerbalance" component={ManagerBalance}></Route>
                <Route  exact  path="/mangerrepassworld" component={ManagerRepsd}></Route>
                <Route  exact  path="/mangerdetails" component={ManagerDetails}></Route>
                <Route  exact  path="/mangerdetailsrg" component={ManagerDetailsRg}></Route>
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


