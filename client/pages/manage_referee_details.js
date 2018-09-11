var React = require('react')
import {List,TextareaItem,NavBar,InputItem} from 'antd-mobile';
import { Form, Icon, Input, Button,Checkbox,message,Select,} from 'antd';
const FormItem = Form.Item;
const Item = List.Item;
const Option = Select.Option;
import Refereeheader from './refereeheader';
import '../public/css/addManager.scss';
class RefereeAdd extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user:{
                accounts:654,
                id:66,
                intergral:46045640
            },
            loading:false
        }
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
    render(){
        const formItemLayout = {
            labelCol: {
                span:5
            },
            wrapperCol: {
                offset:1,
                span:17
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const { getFieldDecorator } = this.props.form;

        return(
            <div>
                <div>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={()=>{this.props.url?this.props.history.push("/list"):this.props.history.push("/managerreferee")}}
                    >推荐人管理</NavBar>
                </div>
                <NavBar style={{background:'#606060'}}>详细资料</NavBar>
                <List style={{margin:'0  auto'}}>
                    <InputItem type="phone" value={this.state.ID}>推荐人账号： </InputItem>
                    <InputItem type="phone" value={this.state.beizhu}>推荐人ID：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>推荐人提成：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>推荐人备注：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>推荐人姓名：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>推荐人性别：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>身份证号码：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>手机号1：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>手机号2：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>微信号：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>QQ号：</InputItem>
                    <InputItem type="phone" value={this.state.dqjf}>住址：</InputItem>
                </List>
                <Button type="primary">确认修改</Button>
            </div>
        )
    }
}
export default RefereeAdd = Form.create({})(RefereeAdd);