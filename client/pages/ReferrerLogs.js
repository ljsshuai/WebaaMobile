var React = require('react')
import {List,TextareaItem} from 'antd-mobile';
import { Form, Icon, Input, Button,Checkbox,message,Select} from 'antd';
const FormItem = Form.Item;
const Item = List.Item;
const Option = Select.Option;
import AccountsHeader from './accountsHeader';
import '../public/css/accounts.scss';
class Referrerlogs extends React.Component {
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
                <AccountsHeader title="玩家兑换记录"/>
                <div className="accountsTitSeclect ReferrerLogs">
                    <div>
                        <span>选择类型</span>
                        <Select defaultValue="xsxm" className="accountsSelect" >
                            <Option value="xsxm">充值</Option>
                            <Option value="jtxm">兑换</Option>
                        </Select>
                    </div>
                </div>
                <div className="paylistTitle ReferrerLogs">
                    <ul>
                        <li>
                            ID
                        </li>
                        <li>
                            积分
                        </li>
                        <li>
                            时间
                        </li>
                    </ul>
                </div>
                <List   className="my-list payContentlist ReferrerLogs">
                    <Item>
                        <ul>
                            <li>
                                123456
                            </li>
                            <li>
                                7000900
                            </li>
                            <li>
                                7000900
                            </li>
                        </ul>
                    </Item>
                </List>
            </div>
        )
    }
}
export default Referrerlogs = Form.create({})(Referrerlogs);

