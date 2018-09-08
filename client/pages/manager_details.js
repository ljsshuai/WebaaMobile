var React = require('react')
import {SearchBar,NavBar,List,InputItem,Button,TextareaItem} from 'antd-mobile';
import MangerHeader from './manger_header';
class ManagerDetails extends React.Component {
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
                <MangerHeader/>
                <NavBar style={{background:'#606060'}}>详细资料</NavBar>
                <List style={{width:'90%',margin:'0  auto'}}>
                    <InputItem type="phone" value={this.state.ID}>经理账号：</InputItem>
                    <InputItem type="phone" value={this.state.beizhu}>经理ID：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>当前积分：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>经理备注：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>经理姓名：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>经理性别：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>身份证号：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>手机号1：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>手机号2：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>微信号：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>QQ号：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>经理住址：</InputItem>
                </List>
                <Button type="primary">确认修改</Button>
            </div>
        );
    };
}
export default ManagerDetails;