var React = require('react')
import {List,TextareaItem,NavBar} from 'antd-mobile';
import { Form, Icon, Input, Button,Checkbox,message,Select,} from 'antd';
const FormItem = Form.Item;
const Item = List.Item;
const Option = Select.Option;
import MangerHeader from './manger_header';
import '../public/css/addManager.scss';
class ManagerDetails extends React.Component {
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
                <MangerHeader/>
                <NavBar style={{background:'#606060'}}>详细资料</NavBar>
                <List className="my-list">
                    <Form onSubmit={this.handleSubmit.bind(this)} className="addManager-form" >
                        <Item>
                            <FormItem   {...formItemLayout}  label="经理账号"  >
                                sh1111
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="经理ID">
                                14
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="当前积分">
                                794450
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="经理备注">
                                    <Input size="default"   type="text" defaultValue="充值经理"  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="经理姓名">
                                    <Input size="default"   type="text" defaultValue="备注"  />
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
                                <Input size="default"   type="text" defaultValue="身份证"  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="手机号1">
                                    <Input size="default"  type="password" defaultValue="手机号1"  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="手机号2">
                                    <Input size="default"   type="text" defaultValue="手机号2"  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="微信号">
                                    <Input size="default"   type="text" defaultValue="微信号"  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="QQ号">
                                    <Input size="default"   type="text" defaultValuer="QQ号"  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="住址">
                                    <Input size="default"  type="text" defaultValue="住址" />
                            </FormItem>
                        </Item>
                        <FormItem>
                            <div style={{textAlign:'center'}}>
                                <Button size="large"  type="primary" loading={this.state.loading} htmlType="submit" className="login-form-button">
                                    确定修改
                                </Button>
                            </div>
                        </FormItem>
                    </Form>
                </List>
            </div>
        )
    }
}
export default ManagerDetails = Form.create({})(ManagerDetails);