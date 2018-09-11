import React from 'react';
import {  Route } from 'react-router-dom'
import MangereCharge from "./manager_recharge";
import ManagerDetails from "./manager_details";
import ManagerDetailsRg from "./manager_details_rg";
import MangerList from "./manager_list";
import ManagerBalance from "./manager_balance";
import ManagerRepsd from "./manage_repsd";
import RefereeAdd from './mange_referee_add'
import RefereeLimit from './mange_referee_limit'
import RefereePeople from './mange_referee_people'
import RefereeDetails from './manage_referee_details'
import AccountAdd from './account_manage_add'
import RefereeRecharge from './mange_referee_recharge'
import PlotterManageAdd from './plotter_manage_add'
const userRoutes = ({ match }) => (
    <div>
        <Route exact path={`${match.url}/`} component={MangerList} />
        <Route exact path={`${match.url}/mangerecharge`} component={MangereCharge} />
        <Route exact path={`${match.url}/mangerbalance`} component={ManagerBalance} />
        <Route exact path={`${match.url}/mangerrepassworld`} component={ManagerRepsd} />
        <Route exact path={`${match.url}/mangerdetails`} component={ManagerDetails} />
        <Route exact path={`${match.url}/mangerdetailsrg`} component={ManagerDetailsRg} />
        <Route exact path={`${match.url}/refereeadd`} component={RefereeAdd} />
        <Route exact path={`${match.url}/refereelimit`} component={RefereeLimit}/>
        <Route exact path={`${match.url}/refereepeople`} component={RefereePeople}/>
        <Route exact path={`${match.url}/refereedetails`} component={RefereeDetails}/>
        <Route exact path={`${match.url}/refereerecharge`} component={RefereeRecharge}/>
        <Route exact path={`${match.url}/accountadd`} component={AccountAdd}/>
        <Route exact path={`${match.url}/plotteradd`} component={PlotterManageAdd}/>
    </div>
);


export default userRoutes;