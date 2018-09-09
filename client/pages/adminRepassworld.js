var React = require('react')
import {SearchBar,NavBar,List,InputItem,Button,TextareaItem} from 'antd-mobile';
import AdminHeader from './adminHeader';
class AdminRepsd extends React.Component {
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
                <AdminHeader/>
                <NavBar style={{background:'#606060'}}>重置密码</NavBar>
                <List>
                    <InputItem type="phone" value={this.state.ID}>管理员ID：</InputItem>
                    <InputItem type="phone" value={this.state.beizhu}>管理员备注：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>当前积分：</InputItem>
                    <TextareaItem value="(重置后密码默认为123456)" disabled/>
                </List>
                <Button type="primary">重置密码</Button>
            </div>
        );
    };
}
export default AdminRepsd;