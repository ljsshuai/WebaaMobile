var React = require('react')
import {List,TextareaItem} from 'antd-mobile';
import { Form, Icon, Input, Button,Checkbox,message,Select} from 'antd';
const FormItem = Form.Item;
const Item = List.Item;
const Option = Select.Option;
import AccountsHeader from './accountsHeader';
import '../public/css/accounts.scss';
class AccountsAll extends React.Component {
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
            <div className="accountsParent">
                <AccountsHeader title="账目表"/>
                <div className="accountsTitSeclect">
                    <div>
                            <span>类型选择</span>
                            <Select defaultValue="xsxm" className="accountsSelect" >
                                <Option value="xsxm">线上项目</Option>
                                <Option value="jtxm">机台项目</Option>
                            </Select>
                    </div>
                    <div>
                        <span>房间选择</span>
                        <Select defaultValue="xsxm" className="accountsSelect" >
                                <Option value="xsxm">所有总账</Option>
                                <Option value="jtxm">房间一</Option>
                                 <Option value="jtxm">房间n</Option>
                            </Select>
                    </div>
                </div>
                <div className="listContentTitle">
                    P-W
                </div>
                <List  renderHeader={() => ''} className="my-list">
                        <Item>
                            <div className="listItem">
                                <span>P</span>
                                <i>405465</i>
                            </div>
                        </Item>
                </List>
                <List  renderHeader={() => ''} className="my-list">
                    <Item>
                        <div className="listItem">
                            <span>W</span>
                            <i>405566465</i>
                        </div>
                    </Item>
                </List>
                <div className="listContentTitle" style={{  marginTop:'24px'
                }}>
                    总账
                </div>
                <List  renderHeader={() => ''} className="my-list">
                    <Item>
                        <div className="listItem">
                            <span>玩家总充值</span>
                            <i>405465</i>
                        </div>
                    </Item>
                </List>
                <List  renderHeader={() => ''} className="my-list">
                    <Item>
                        <div className="listItem">
                            <span>玩家总台面积分</span>
                            <i>405566465</i>
                        </div>
                    </Item>
                </List>
                <List  renderHeader={() => ''} className="my-list">
                    <Item>
                        <div className="listItem">
                            <span>系统送分</span>
                            <i>405566465</i>
                        </div>
                    </Item>
                </List>
                <List  renderHeader={() => ''} className="my-list">
                    <Item>
                        <div className="listItem">
                            <span>玩家总兑换</span>
                            <i>405566465</i>
                        </div>
                    </Item>
                </List>
                <List  renderHeader={() => ''} className="my-list">
                    <Item>
                        <div className="listItem">
                            <span>总和</span>
                            <i>405566465</i>
                        </div>
                    </Item>
                </List>
            </div>
        )
    }
}
export default AccountsAll = Form.create({})(AccountsAll);

