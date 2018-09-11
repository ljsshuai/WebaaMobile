import React from 'react';
import {  Route } from 'react-router-dom'
import MangereCharge from "./manager_recharge";
import ManagerDetails from "./manager_details";
import ManagerDetailsRg from "./manager_details_rg";
import AccountsList from "./accountsList";
import ManagerBalance from "./manager_balance";
import ManagerRepsd from "./manage_repsd";
const accountsRoutes = ({ match }) => (
    <div>
        <Route exact path={`${match.url}/`} component={AccountsList} />
        <Route exact path={`${match.url}/mangerecharge`} component={MangereCharge} />
        <Route exact path={`${match.url}/mangerbalance`} component={ManagerBalance} />
        <Route exact path={`${match.url}/mangerrepassworld`} component={ManagerRepsd} />
        <Route exact path={`${match.url}/mangerdetails`} component={ManagerDetails} />
        <Route exact path={`${match.url}/mangerdetailsrg`} component={ManagerDetailsRg} />
    </div>
);


export default accountsRoutes;