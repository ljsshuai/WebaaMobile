import RefereeHeader from "./refereeheader";

var React = require('react');
import {SearchBar,NavBar,List,InputItem,Button,TextareaItem} from 'antd-mobile';
import MangerHeader from './manger_header';
import '../public/css/managerrecharge.css';
class RefereeRecharge extends React.Component{
    constructor(){
        super();
        this.state={
            ID:'14',
            beizhu:'充值经理',
            dqjf:'794450',
            jine:'0'
        };
    }
    render(){
        return(
            <div>
                <RefereeHeader/>
                <NavBar style={{background:'#606060'}}>充值</NavBar>
                <div className="my_integration">我的积分：{this.state.dqjf}</div>
                <List>
                    <InputItem type="phone" value={this.state.ID}>推荐人ID：</InputItem>
                    <InputItem type="phone" value={this.state.beizhu}>备注：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>当前积分：</InputItem>
                    <InputItem type="phone" value={this.state.jine}>充值金额：</InputItem>
                    <TextareaItem count={10}>1111111111111</TextareaItem>
                </List>
                <Button type="primary">确认充值</Button>
            </div>
        );
    };
}
export default RefereeRecharge;