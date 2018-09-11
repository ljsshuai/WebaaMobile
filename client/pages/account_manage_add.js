var React = require('react');
import { Modal, Popover, List} from 'antd-mobile';
import { Form, Icon, Input, Button,Checkbox,message,} from 'antd';
const PopItem = Popover.Item;
const alert = Modal.alert;
const Item = List.Item;
const FormItem=Form.Item
import AccountManageHeader from './account_manage_header';

class AccountAdd extends React.Component {
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
                span:6
            },
            wrapperCol: {
                span:18
            },
        };
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <AccountManageHeader />
                <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                    <FormItem  {...formItemLayout} label="账号">
                        {getFieldDecorator('loginName', {
                            rules: [{ required: true, message: '请输入账号!' }],
                        })(
                            <Input size="large"  placeholder="登录账号" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="密码">

                        {getFieldDecorator('apassword', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input size="large"  type="password" placeholder="登入密码" placeholder="请输入密码" />
                        )}
                    </FormItem>
                    <FormItem  {...formItemLayout} label="备注">

                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入备注!' }],
                        })(
                            <Input size="large"  type="password" placeholder="备注" placeholder="请输入备注" />
                        )}
                    </FormItem>
                    <FormItem>
                        <div style={{textAlign:'center'}}>
                            <div style={{display:'inline-block',width:'100px'}}>
                            <Button size="small" type="primary" loading={this.state.loading} htmlType="submit" className="login-form-button">
                                确定
                            </Button>
                            </div>
                            <div style={{display:'inline-block',width:'100px',marginLeft:'50px'}}>
                            <Button size="small" type="primary" loading={this.state.loading} htmlType="submit" className="login-form-button">
                                取消
                            </Button>
                            </div>
                        </div>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
export default AccountAdd= Form.create({})(AccountAdd);