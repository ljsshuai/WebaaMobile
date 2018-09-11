var React = require('react');
import { Modal, Popover, List,Button} from 'antd-mobile';
import { Form, Icon, Input, Checkbox,message,} from 'antd';
const PopItem = Popover.Item;
const alert = Modal.alert;
const Item = List.Item;
const FormItem=Form.Item;
import AccountManageHeader from './account_manage_header';

class AccountMore extends React.Component {
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
                <List>
                <AccountManageHeader url="/"/>
                <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                    <FormItem  {...formItemLayout} label="账号">
                        11111111111
                    </FormItem>
                    <FormItem {...formItemLayout} label="密码">
                            <Input size="large"  type="password"  placeholder="重置登录密码" />
                    </FormItem>
                    <FormItem  {...formItemLayout} label="备注">
                            <Input size="large"  type="password"  placeholder="单挑" />
                    </FormItem>
                    <FormItem  {...formItemLayout} label="设备型号">
                       12222222222
                        <Button size="small"  type="primary" htmlType="submit" inline style={{verticalAlign:'middle',marginLeft:'30px'}}>
                            清除
                        </Button>
                    </FormItem>
                    <FormItem  {...formItemLayout} label="状态">
                        启用
                        <Button size="small"  type="primary" htmlType="submit" inline style={{verticalAlign:'middle',marginLeft:'30px'}}>
                            禁用
                        </Button>
                    </FormItem>
                    <FormItem>
                        <div style={{textAlign:'center'}}>

                                <Button size="small" type="primary" loading={this.state.loading} htmlType="submit" className="login-form-button" style={{marginTop:'10px'}}>
                                    确定
                                </Button>
                                <Button size="small"  type="warning" style={{marginTop:'10px'}}>删除</Button>

                                <Button size="small" type="primary" loading={this.state.loading} htmlType="submit" className="login-form-button" style={{marginTop:'10px'}}>
                                    取消
                                </Button>
                        </div>
                    </FormItem>
                </Form>
                </List>
            </div>
        )
    }
}
export default AccountMore= Form.create({})(AccountMore);