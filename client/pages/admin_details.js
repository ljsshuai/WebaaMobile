var React = require('react')
import {SearchBar,NavBar,List,InputItem,Button,TextareaItem} from 'antd-mobile';
import AdminHeader from './adminHeader';
class AdminDetails extends React.Component {
    constructor(){
        super();
        this.state={
            ID:'14',
            beizhu:'充值管理员',
            dqjf:'794450',
            jine:'0'
        };
    }
    render(){
        return(
            <div>
                <AdminHeader/>
                <NavBar style={{background:'#606060'}}>详细资料</NavBar>
                <List style={{margin:'0  auto'}}>
                    <InputItem type="phone" value={this.state.ID}>管理员账号：</InputItem>
                    <InputItem type="phone" value={this.state.beizhu}>管理员ID：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>当前积分：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>管理员备注：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>管理员姓名：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>管理员性别：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>身份证号：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>手机号1：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>手机号2：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>微信号：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>QQ号：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>住址：</InputItem>
                </List>
                <Button type="primary">确认修改</Button>
            </div>
        );
    };
}
export default AdminDetails;