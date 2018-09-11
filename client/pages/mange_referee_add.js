var React = require('react')
import {List,TextareaItem,NavBar} from 'antd-mobile';
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
                <List className="my-list">
                    <Form onSubmit={this.handleSubmit.bind(this)} className="addManager-form" >
                        <Item>
                            <FormItem  {...formItemLayout} label="账户名">
                                {getFieldDecorator('apassword', {
                                    rules: [{ hasFeedback:false,required: true, message: '请输入密码!' }],
                                })(
                                    <Input size="default"  type="password" placeholder="账户名"  />
                                )}
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="密码">
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input size="default"  type="password" placeholder="密码"  />
                                )}
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem   {...formItemLayout}  label="推荐提成"  >
                                <Select defaultValue="千分之零" >
                                    <Option value="cz">千分之一</Option>
                                    <Option value="dy">千分之二</Option>
                                    <Option value="jt" >千分之三</Option>
                                </Select>
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="ID">
                                <Input size="default"  type="password" placeholder="ID"  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="备注">
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input size="default"  type="password" placeholder="备注"  />
                                )}
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="姓名">
                                <Input size="default"  type="password" placeholder="姓名"  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="性别">
                                <Select defaultValue="男" >
                                    <Option value="cz">男</Option>
                                    <Option value="dy">女</Option>
                                </Select>
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="身份证">
                                <Input size="default"  type="password" placeholder="身份证"  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="手机号1">
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input size="default"  type="password" placeholder="手机号1"  />
                                )}
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="手机号2">
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input size="default"  type="password" placeholder="手机号2"  />
                                )}
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="微信号">
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input size="default"  type="password" placeholder="微信号"  />
                                )}
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="QQ号">
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input size="default"  type="password" placeholder="QQ号"  />
                                )}
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="住址">
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input size="default"  type="password" placeholder="住址" />

                                )}
                            </FormItem>
                        </Item>
                        <Item>
                            <TextareaItem style={{fontSize:'14px'}} value="(*为必填，其余信息可在详细资料进行完善)" disabled/>
                        </Item>
                        <FormItem>
                            <div style={{textAlign:'center'}}>
                                <Button size="large"  type="primary" loading={this.state.loading} htmlType="submit" className="login-form-button">
                                    提交
                                </Button>
                            </div>
                        </FormItem>
                    </Form>
                </List>
            </div>
        )
    }
}
export default RefereeAdd = Form.create({})(RefereeAdd);