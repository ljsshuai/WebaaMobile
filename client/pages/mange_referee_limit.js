import RefereeHeader from "./refereeheader";

var React = require('react')
import {SearchBar,NavBar,List,InputItem,Button,TextareaItem} from 'antd-mobile';
import MangerHeader from './manger_header';
class RefereeLimit extends React.Component {
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
                <NavBar style={{background:'#606060'}}>兑换限额</NavBar>
                <List>
                    <InputItem type="phone" value={this.state.ID}>推荐人ID：</InputItem>
                    <InputItem type="phone" value={this.state.beizhu}>兑换限额：</InputItem>
                </List>
                <Button type="primary">确认修改</Button>
            </div>
        );
    };
}
export default RefereeLimit;