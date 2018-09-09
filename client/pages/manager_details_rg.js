var React = require('react')
import {List,NavBar,WingBlank,SearchBar,WhiteSpace,Picker,TextareaItem} from 'antd-mobile';
const Item = List.Item;
import { Form, Icon, Input, Button,Checkbox,message,Select} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import '../public/css/userlist.css';
class ManagerDetailsRg extends React.Component {
    constructor(props){
        super(props)
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
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
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
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>{this.props.history.push("/userlist")}}
                >经理管理</NavBar>

                <Form onSubmit={this.handleSubmit.bind(this)} className="login-form" >
                    <FormItem   {...formItemLayout} label="类型"  >
                        <Select defaultValue="充值" >
                            <Option value="cz">充值</Option>
                            <Option value="dy">兑换</Option>
                            <Option value="jt" >机台</Option>
                        </Select>
                    </FormItem>

                    <FormItem {...formItemLayout} label="账户名">
                        {getFieldDecorator('apassword', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input size="default"  type="password" placeholder="账户名" placeholder="" />
                        )}
                    </FormItem>

                    <FormItem  {...formItemLayout} label="密码">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input size="default"  type="password" placeholder="密码" placeholder="" />
                        )}
                    </FormItem>

                    <FormItem  {...formItemLayout} label="备注">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input size="default"  type="password" placeholder="备注" placeholder="" />
                        )}
                    </FormItem>

                    <FormItem  {...formItemLayout} label="姓名">
                            <Input size="default"  type="password" placeholder="姓名" placeholder="" />
                    </FormItem>

                    <FormItem  {...formItemLayout} label="性别">
                        <Select defaultValue="男" >
                            <Option value="cz">男</Option>
                            <Option value="dy">女</Option>
                        </Select>
                    </FormItem>

                    <FormItem  {...formItemLayout} label="身份证">
                        <Input size="default"  type="password" placeholder="身份证" placeholder="" />
                    </FormItem>

                    <FormItem  {...formItemLayout} label="手机号1">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input size="default"  type="password" placeholder="手机号1" placeholder="" />
                        )}
                    </FormItem>

                    <FormItem  {...formItemLayout} label="手机号2">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input size="default"  type="password" placeholder="手机号2" placeholder="" />
                        )}
                    </FormItem>

                    <FormItem  {...formItemLayout} label="微信号">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input size="default"  type="password" placeholder="微信号" placeholder="" />
                        )}
                    </FormItem>

                    <FormItem  {...formItemLayout} label="QQ号">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input size="default"  type="password" placeholder="QQ号" placeholder="" />
                        )}
                    </FormItem>

                    <FormItem  {...formItemLayout} label="住址">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input size="default"  type="password" placeholder="住址" placeholder="" />

                        )}
                    </FormItem>
                    <TextareaItem style={{fontSize:'14px'}} value="(*为必填，其余信息可在详细资料进行完善)" disabled/>
                    <FormItem>
                        <div style={{textAlign:'center'}}>
                            <Button size="default" type="primary" loading={this.state.loading} htmlType="submit" className="login-form-button">
                                提交
                            </Button>
                        </div>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
export default ManagerDetailsRg = Form.create({})(ManagerDetailsRg);

