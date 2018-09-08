var React = require('react')
import {SearchBar,NavBar,List,InputItem,Button,TextareaItem} from 'antd-mobile';
import MangerHeader from './manger_header';
import '../public/css/managerdetailsrg.css';
class ManagerDetailsRg extends React.Component {
    constructor(){
        super();
        this.state={

        };
    }
    render(){
        return(
            <div>
                <MangerHeader/>
                <List style={{width:'90%',margin:'0  auto'}}>
                    <table>
                        <tr>
                            <td>类型：</td>
                            <td><select><option>充值</option><option>兑换</option><option>机台</option></select></td>
                            <td>*</td>
                        </tr>
                        <tr>
                            <td>账户名:</td>
                            <td><input /></td>
                            <td>*</td>
                        </tr>
                        <tr>
                            <td>密码:</td>
                            <td><input /></td>
                            <td>*</td>
                        </tr>
                        <tr>
                            <td>备注:</td>
                            <td><input /></td>
                            <td>*</td>
                        </tr>
                        <tr>
                            <td>姓名:</td>
                            <td><input /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>性别:</td>
                            <td><select><option>男</option><option>女</option></select></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>身份证:</td>
                            <td><input /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>手机号1:</td>
                            <td><input /></td>
                            <td>*</td>
                        </tr>
                        <tr>
                            <td>手机号2:</td>
                            <td><input /></td>
                            <td>*</td>
                        </tr>
                        <tr>
                            <td>微信号:</td>
                            <td><input /></td>
                            <td>*</td>
                        </tr>
                        <tr>
                            <td>QQ号:</td>
                            <td><input /></td>
                            <td>*</td>
                        </tr>
                        <tr>
                            <td>住址:</td>
                            <td><input /></td>
                            <td>*</td>
                        </tr>
                    </table>
                    <TextareaItem style={{fontSize:'14px'}} value="(*为必填，其余信息可在详细资料进行完善)" disabled/>

                </List>
                <Button type="primary">确认修改</Button>
            </div>
        );
    };
}
export default ManagerDetailsRg;