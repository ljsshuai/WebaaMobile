var React = require('react')
import {SearchBar,NavBar,List,InputItem,Button,TextareaItem} from 'antd-mobile';
import MangerHeader from './manger_header';
class ManagerBalance extends React.Component {
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
                <NavBar style={{background:'#606060'}}>强制结算</NavBar>
                <List>
                    <InputItem type="phone" value={this.state.ID}>经理ID：</InputItem>
                    <InputItem type="phone" value={this.state.beizhu}>经理备注：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>当前积分：</InputItem>
                    <TextareaItem value="(结算时收回经理积分并清空经理账目)" disabled/>
                </List>
                <Button type="primary">确认结算</Button>
            </div>
        );
    };
}
export default ManagerBalance;