import React from 'react';
import {  Route } from 'react-router-dom'
import AccountsAll from "./accountsAll";
import AccountsList from "./accountsList";
import Paylist from "./paylist";
import AdminPaylist from "./adminPaylist";
import AdminPayDh from "./adminPayDh";
import AdminPayJt from "./adminPayJt";
import Referrer from "./accountsReferrer";
import Referrerlogs from "./Referrerlogs";
import JtGamers from "./JtGamers";
import AccountsBill from "./accountsBill";
import GetGamer from "./getGamer";
import HistoryBill from "./HistoryBill";
const accountsRoutes = ({ match }) => (
    <div>
        <Route exact path={`${match.url}/`} component={AccountsList} />
        <Route exact path={`${match.url}/accountsAll`} component={AccountsAll} />
        <Route exact path={`${match.url}/paylist`} component={Paylist} />
        <Route exact path={`${match.url}/adminpaylist`} component={AdminPaylist} />
        <Route exact path={`${match.url}/adminPayDh`} component={AdminPayDh} />
        <Route exact path={`${match.url}/adminPayJt`} component={AdminPayJt} />
        <Route exact path={`${match.url}/Referrer`} component={Referrer} />
        <Route exact path={`${match.url}/Referrerlogs`} component={Referrerlogs} />
        <Route exact path={`${match.url}/JtGamers`} component={JtGamers} />
        <Route exact path={`${match.url}/accountsBill`} component={AccountsBill} />
        <Route exact path={`${match.url}/getGamer`} component={GetGamer} />
        <Route exact path={`${match.url}/HistoryBill`} component={HistoryBill} />
    </div>
);


export default accountsRoutes;