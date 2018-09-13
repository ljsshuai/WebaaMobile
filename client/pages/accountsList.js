var React = require('react')
import { List ,Button,WingBlank} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
import AccountsHeader from "./accountsHeader"
import {connect} from 'react-redux';
import createHistory from 'history/createHashHistory';
const history = createHistory();
import '../public/css/accounts.scss';

import {loginFn} from '../actions/index.redux'
class AccountsList extends React.Component {
    constructor(...args){
        super(...args);
        this.state={
            loading:false
        }
    }
    componentDidMount(){
        document.getElementsByTagName('title')[0].innerText='登录页'
    }
    handleSubmit(e){
        e.preventDefault();
        var _thisState=this
        this.props.form.validateFields((err, values) => {
            var formData = this
                .props
                .form
                .getFieldsValue();
            if(!err){
                this.setState({loading:true});
                this.props.loginFn(values).then(data=>{
                    message.info(data.msg);
                    if(data.status==='ok'){
                        history.push('/index');
                    }else{
                        this.setState({loading:false});
                    }
                })
            }
        });
    }
    render() {
        const parentUrl=this.props.match.url;
        return (
            <div>
                <AccountsHeader url="/" />
                <List renderHeader={() => ''} className="my-list">
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(parentUrl+"/accountsAll")}}>总账</Item>
                </List>
                <List renderHeader={() => ''} className="my-list accountsList">
                    <Item arrow="horizontal" >经理
                        <Button type="primary" onClick={()=>{this.props.history.push(parentUrl+"/paylist")}} style={{marginLeft:'27px'}} className="listBtn" inline size="small"  >线上充值</Button>
                        <Button type="primary" onClick={()=>{this.props.history.push(parentUrl+"/paylist")}} className="listBtn" inline size="small"  >线上兑换</Button>
                        <Button type="primary" onClick={()=>{this.props.history.push(parentUrl+"/paylist")}} className="listBtn" inline size="small"  >机台充值</Button>
                    </Item>
                    <Item arrow="horizontal" >管理员
                        <Button type="primary" onClick={()=>{this.props.history.push(parentUrl+"/adminpaylist")}} style={{marginLeft:'10px'}} className="listBtn" inline size="small"  >线上充值</Button>
                        <Button type="primary" onClick={()=>{this.props.history.push(parentUrl+"/adminPayDh")}}   className="listBtn" inline size="small"  >线上兑换</Button>
                        <Button type="primary"  onClick={()=>{this.props.history.push(parentUrl+"/adminPayJt")}}   className="listBtn" inline size="small"  >机台充值</Button>
                    </Item>
                    <Item arrow="horizontal"  onClick={()=>{this.props.history.push(parentUrl+"/Referrer")}}  >推荐人</Item>
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(parentUrl+"/Referrerlogs")}}>推荐人兑换记录</Item>
                    <Item arrow="horizontal"  onClick={()=>{this.props.history.push(parentUrl+"/JtGamers")}}>机台玩家</Item>
                </List>
                <List renderHeader={() => ''} className="my-list">
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(parentUrl+"/accountsBill")}}>结算账单</Item>


                </List>
                <List renderHeader={() => ''} className="my-list">
                    <Item arrow="horizontal"  onClick={()=>{this.props.history.push(parentUrl+"/GetGamer")}}>玩家信息</Item>
                </List>
                <List renderHeader={() => ''} className="my-list">
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(parentUrl+"/HistoryBill")}}>查询历史账目</Item>
                </List>

            </div>
        );
    }
}


const mapStatetoProps=(state=>{
    return {state}
});
const actionCreators={loginFn}
AccountsList=connect(mapStatetoProps,actionCreators)(AccountsList)

export default AccountsList ;