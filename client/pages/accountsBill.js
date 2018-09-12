var React = require('react')
import {List,SearchBar} from 'antd-mobile';
import { Form,message,Input,Button,DatePicker } from 'antd';
const { RangePicker, MonthPicker } = DatePicker;
const FormItem=Form.Item;



const Item = List.Item;
import AccountsHeader from './accountsHeader';
import '../public/css/accounts.scss';
class AccountsBill extends React.Component {
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
                span:7
            },
            wrapperCol: {
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
                <AccountsHeader title="结算账单" />
                <div className="accountsTitPay accountsBill">
                    <Form onSubmit={this.handleSubmit.bind(this)} >
                        <FormItem  {...formItemLayout} label="开始时间">
                            {getFieldDecorator('loginName', {
                                rules: [{  message: '开始时间!' }],
                            })(
                                <DatePicker  />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="结束时间">
                            {getFieldDecorator('apassword', {
                                rules: [{  message: '结束时间!' }],
                            })(
                                <DatePicker  />
                            )}
                        </FormItem>
                        <FormItem  {...formItemLayout} label="经理/服务员ID">

                            {getFieldDecorator('password', {
                                rules: [{  message: '请输入备注!' }],
                            })(
                                <Input   type="password" placeholder="(选填)"  />
                            )}
                        </FormItem>
                        <FormItem>
                            <div style={{textAlign:'center'}}>
                                <div style={{display:'inline-block',width:'100%'}}>
                                    <Button  type="primary" loading={this.state.loading} htmlType="submit" className="login-form-button">
                                        确定
                                    </Button>
                                </div>
                            </div>
                        </FormItem>
                    </Form>
                </div>

            </div>
        )
    }
}
export default AccountsBill = Form.create({})(AccountsBill);

