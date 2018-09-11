var React = require('react')
import {List,SearchBar,Button} from 'antd-mobile';
import { Form,message} from 'antd';
const Item = List.Item;
import AccountsHeader from './accountsHeader';
import '../public/css/accounts.scss';
class Referrer extends React.Component {
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
                <AccountsHeader title="推荐人账目" />
                <div className="paylistTitle Referrer">
                    <ul>
                        <li>
                            备注共12人
                        </li>
                        <li style={{height:'42px',
                            lineHeight:"42px"}}>
                           ID
                        </li>
                        <li>
                            总计
                            <p>328226</p>
                        </li>

                    </ul>
                </div>
                <List   className="payContentlist Referrer ReferrerContent">
                    <Item>
                        <ul>
                            <li>
                                充值经理
                            </li>
                            <li>
                                7000900
                            </li>
                            <li>
                                794450
                            </li>
                            <li>
                                <Button type="primary"    className="listBtn" inline size="small"  >清除结算</Button>
                            </li>
                        </ul>
                    </Item>
                    <Item>
                        <ul>
                            <li>
                                充值经理
                            </li>
                            <li>
                                7000900
                            </li>
                            <li>
                                794450
                            </li>
                            <li>
                                <Button type="primary"    className="listBtn" inline size="small"  >清除结算</Button>
                            </li>
                        </ul>
                    </Item>        <Item>
                    <ul>
                        <li>
                            充值经理
                        </li>
                        <li>
                            7000900
                        </li>
                        <li>
                            794450
                        </li>
                        <li>
                            <Button type="primary"    className="listBtn" inline size="small"  >清除结算</Button>
                        </li>
                    </ul>
                </Item>        <Item>
                    <ul>
                        <li>
                            充值经理
                        </li>
                        <li>
                            7000900
                        </li>
                        <li>
                            794450
                        </li>
                        <li>
                            <Button type="primary"    className="listBtn" inline size="small"  >清除结算</Button>
                        </li>
                    </ul>
                </Item>

                </List>
            </div>
        )
    }
}
export default Referrer = Form.create({})(Referrer);

