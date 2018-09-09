import React from 'react';
import {  Route } from 'react-router-dom'
import AdminRepassworld from "./adminRepassworld";
import Admin_details from "./admin_details";
import ManagerDetailsRg from "./manager_details_rg";
import Adminlist_ from "./Adminlist_";
import ManagerBalance from "./manager_balance";
import ManagerRepsd from "./manage_repsd";
const adminRoutes = ({ match }) => (
    <div>
        <Route exact path={`${match.url}/`} component={Adminlist_} />
        <Route exact path={`${match.url}/admin_details`} component={Admin_details} />
        <Route exact path={`${match.url}/adminRepassworld`} component={AdminRepassworld} />
    </div>
);


export default adminRoutes;