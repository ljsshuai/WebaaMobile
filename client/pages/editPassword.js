var React = require('react')
import {List,NavBar,WingBlank,SearchBar,WhiteSpace,Picker} from 'antd-mobile';
const Item = List.Item;
import { Form, Icon, Input, Button,Checkbox,message} from 'antd';
const FormItem = Form.Item;

import '../public/css/userlist.css';
class Editpassword extends React.Component {
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
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>{this.props.history.push("/userlist")}}

                >修改密码</NavBar>
                <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                    <FormItem  {...formItemLayout} label="用户名">

                        {getFieldDecorator('loginName', {
                            rules: [{ required: true, message: '请输入用户名!' }],
                        })(
                            <Input size="large"  placeholder="用户名" />
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="密码">

                        {getFieldDecorator('apassword', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input size="large"  type="password" placeholder="密码" placeholder="" />
                        )}
                    </FormItem>
                    <FormItem  {...formItemLayout} label="确认密码">

                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input size="large"  type="password" placeholder="密码" placeholder="" />
                        )}
                    </FormItem>
                    <FormItem>
                        <div style={{textAlign:'center'}}>
                            <Button size="large" type="primary" loading={this.state.loading} htmlType="submit" className="login-form-button">
                                提交
                            </Button>
                        </div>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
export default Editpassword = Form.create({})(Editpassword);