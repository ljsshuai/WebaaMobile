var React = require('react')
import {List, SearchBar} from 'antd-mobile';
import {Radio, Form, message, Input, Button, DatePicker, Select} from 'antd';

const {RangePicker, MonthPicker} = DatePicker;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;


const Item = List.Item;
import AccountsHeader from './accountsHeader';
import '../public/css/accounts.scss';

class GetGamer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                accounts: 654,
                id: 66,
                intergral: 46045640
            },
            loading: false,
            value: '',
            logsFromVisible: false
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        var _thisState = this
        this.props.form.validateFields((err, values) => {
            var formData = this
                .props
                .form
                .getFieldsValue();
            if (!err) {
                this.setState({loading: true});
                this.props.loginFn(values).then(data => {
                    message.info(data.msg);
                    if (data.status === 'ok') {
                        history.push('/index');
                    } else {
                        this.setState({loading: false});
                    }
                })
            }
        });
    }

    RadioonChange(e) {
        console.log(e.target.value, 11)


        if (e.target.value == 2) {

            this.refs.garmerContent.innerHTML = '<div>\n' +
                '                <div class="logsContentTitle">\n' +
                '                    <ul>\n' +
                '                        <li>\n' +
                '                            类型\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            金额\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            时间\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            余额\n' +
                '                        </li>\n' +
                '                    </ul>\n' +
                '                </div>\n' +
                '                <div ref="logsContent" id="logsContent" class="logsContent">\n' +
                '                    <ul>\n' +
                '                        <li>\n' +
                '                            <ul>\n' +
                '                                <li>\n' +
                '                                    类型\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    金额\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    时间\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    余额\n' +
                '                                </li>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            <ul>\n' +
                '                                <li>\n' +
                '                                    类型\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    金额\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    时间\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    余额\n' +
                '                                </li>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            <ul>\n' +
                '                                <li>\n' +
                '                                    类型\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    金额\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    时间\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    余额\n' +
                '                                </li>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            <ul>\n' +
                '                                <li>\n' +
                '                                    类型\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    金额\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    时间\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    余额\n' +
                '                                </li>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            <ul>\n' +
                '                                <li>\n' +
                '                                    类型\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    金额\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    时间\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    余额\n' +
                '                                </li>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            <ul>\n' +
                '                                <li>\n' +
                '                                    类型\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    金额\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    时间\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    余额\n' +
                '                                </li>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            <ul>\n' +
                '                                <li>\n' +
                '                                    类型\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    金额\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    时间\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    余额\n' +
                '                                </li>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            <ul>\n' +
                '                                <li>\n' +
                '                                    类型\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    金额\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    时间\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    余额\n' +
                '                                </li>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            <ul>\n' +
                '                                <li>\n' +
                '                                    类型\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    金额\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    时间\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    余额\n' +
                '                                </li>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            <ul>\n' +
                '                                <li>\n' +
                '                                    类型\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    金额\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    时间\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    余额\n' +
                '                                </li>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            <ul>\n' +
                '                                <li>\n' +
                '                                    类型\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    金额\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    时间\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    余额\n' +
                '                                </li>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            <ul>\n' +
                '                                <li>\n' +
                '                                    类型\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    金额\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    时间\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    余额\n' +
                '                                </li>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            <ul>\n' +
                '                                <li>\n' +
                '                                    类型\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    金额\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    时间\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    余额\n' +
                '                                </li>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            <ul>\n' +
                '                                <li>\n' +
                '                                    类型\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    金额\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    时间\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    余额\n' +
                '                                </li>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            <ul>\n' +
                '                                <li>\n' +
                '                                    类型\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    金额\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    时间\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    余额\n' +
                '                                </li>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            <ul>\n' +
                '                                <li>\n' +
                '                                    类型\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    金额\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    时间\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    余额\n' +
                '                                </li>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                        <li>\n' +
                '                            <ul>\n' +
                '                                <li>\n' +
                '                                    类型\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    金额\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    时间\n' +
                '                                </li>\n' +
                '                                <li>\n' +
                '                                    余额\n' +
                '                                </li>\n' +
                '                            </ul>\n' +
                '                        </li>\n' +
                '                    </ul>\n' +
                '                </div>\n' +
                '            </div>'


            this.setState({
                logsFromVisible: true,
                value: e.target.value
            })
            console.log(document.getElementById('logsContent'))
            document.getElementById('logsContent').style.height = window.document.getElementsByTagName('body')[0].clientHeight - 256 + 'px';

        } else if (e.target.value == 1) {
            this.refs.garmerContent.innerHTML = '<div class="garmerDetails">\n' +
                '                        <ul>\n' +
                '                            <li>\n' +
                '                                <div>\n' +
                '                                    玩家ID\n' +
                '                                </div>\n' +
                '                                <div>\n' +
                '                                    20363\n' +
                '                                </div>\n' +
                '                            </li>\n' +
                '                            <li>\n' +
                '                                <div>\n' +
                '                                    昵称\n' +
                '                                </div>\n' +
                '                                <div>\n' +
                '                                    优雅的牧羊犬\n' +
                '                                </div>\n' +
                '                            </li>\n' +
                '                            <li>\n' +
                '                                <div>\n' +
                '                                    备注\n' +
                '                                </div>\n' +
                '                                <div>\n' +
                '                                    空空如也\n' +
                '                                </div>\n' +
                '                            </li>  <li>\n' +
                '                            <div>\n' +
                '                                台面积分\n' +
                '                            </div>\n' +
                '                            <div>\n' +
                '                                77\n' +
                '                            </div>\n' +
                '                        </li>\n' +
                '                            <li>\n' +
                '                                <div>\n' +
                '                                    总充值\n' +
                '                                </div>\n' +
                '                                <div>\n' +
                '                                    700\n' +
                '                                </div>\n' +
                '                            </li>\n' +
                '                            <li>\n' +
                '                                <div>\n' +
                '                                    总兑换\n' +
                '                                </div>\n' +
                '                                <div>\n' +
                '                                    1000\n' +
                '                                </div>\n' +
                '                            </li>\n' +
                '                            <li>\n' +
                '                                <div>\n' +
                '                                    推荐人ID\n' +
                '                                </div>\n' +
                '                                <div>\n' +
                '                                    111222\n' +
                '                                </div>\n' +
                '                            </li>  <li>\n' +
                '                            <div>\n' +
                '                                电话号码\n' +
                '                            </div>\n' +
                '                            <div>\n' +
                '                                15900504607\n' +
                '                            </div>\n' +
                '                        </li>\n' +
                '                            <li>\n' +
                '                                <div>\n' +
                '                                    账号\n' +
                '                                </div>\n' +
                '                                <div>\n' +
                '                                    15900504607\n' +
                '                                </div>\n' +
                '                            </li>\n' +
                '\n' +
                '                        </ul>\n' +
                '\n' +
                '                    </div>';
            this.setState({
                logsFromVisible: false,
                value: e.target.value
            })
            document.getElementsByClassName('garmerDetails')[0].style.height = window.document.getElementsByTagName('body')[0].clientHeight - 218 + 'px';

        } else if (e.target.value == 3) {
            this.refs.garmerContent.innerHTML =`没有权限页面`
            this.setState({
                logsFromVisible: false,
                value: e.target.value
            })
        } else {
            this.refs.garmerContent.innerHTML =`<div>
                        <div class="logsContentTitle loginLogsTitle">
                            <ul>
                                <li> 登录时间
                                </li>
                                <li> IP
                                </li>
                            </ul>
                        </div>
                        <div ref="logsContent" id="logsContent" class="logsContent loginLogs">
                            <ul>
                                <li>
                                    <ul>
                                        <li> 登录时间
                                        </li>
                                        <li> IP
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li> 登录时间
                                        </li>
                                        <li> IP
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li> 登录时间
                                        </li>
                                        <li> IP
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li> 登录时间
                                        </li>
                                        <li> IP
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li> 登录时间
                                        </li>
                                        <li> IP
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li> 登录时间
                                        </li>
                                        <li> IP
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li> 登录时间
                                        </li>
                                        <li> IP
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li> 登录时间
                                        </li>
                                        <li> IP
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li> 登录时间
                                        </li>
                                        <li> IP
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li> 登录时间
                                        </li>
                                        <li> IP
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li> 登录时间
                                        </li>
                                        <li> IP
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li> 登录时间
                                        </li>
                                        <li> IP
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li> 登录时间
                                        </li>
                                        <li> IP
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li> 登录时间
                                        </li>
                                        <li> IP
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li> 登录时间
                                        </li>
                                        <li> IP
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>`
                this.setState({
                logsFromVisible: false,
                value: e.target.value
            })
            document.getElementById('logsContent').style.height = window.document.getElementsByTagName('body')[0].clientHeight - 256 + 'px';
        }





    }

    render() {
        const formItemLayout = {
            labelCol: {
                span: 7
            },
            wrapperCol: {
                span: 15
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
        const {getFieldDecorator} = this.props.form;

        return (
            <div>
                <AccountsHeader title="玩家信息"/>
                <div className="accountsTitPay accountsBill getGamer">
                    <Form onSubmit={this.handleSubmit.bind(this)}>
                        <FormItem  {...formItemLayout} label="玩家ID">
                            {getFieldDecorator('password', {
                                rules: [{message: '请输入玩家ID!'}],
                            })(
                                <Input type="password" placeholder="玩家ID"/>
                            )}
                        </FormItem>
                        <FormItem  {...formItemLayout} label="查询类型">
                            {getFieldDecorator('radiovalue', {})(
                                <RadioGroup onChange={this.RadioonChange.bind(this)} value={this.state.value}>
                                    <Radio value={1}>基本信息</Radio>
                                    <Radio value={2}>历史记录</Radio>
                                    <Radio value={3}>押注记录</Radio>
                                    <Radio value={4}>登录记录</Radio>
                                </RadioGroup>
                            )}
                        </FormItem>


                        {this.state.logsFromVisible ? <div>
                            <FormItem  {...formItemLayout} label="开始时间">
                                {getFieldDecorator('loginName', {
                                    rules: [{message: '开始时间!'}],
                                })(
                                    <DatePicker/>
                                )}
                            </FormItem>

                            <FormItem {...formItemLayout} label="结束时间">
                                {getFieldDecorator('apassword', {
                                    rules: [{message: '结束时间!'}],
                                })(
                                    <DatePicker/>
                                )}
                            </FormItem>
                        </div> : null}
                        {this.state.value == 3 ? <div>
                            <FormItem  {...formItemLayout} label="房间">
                                {getFieldDecorator('fj', {
                                    rules: [{message: '房间'}],
                                })(
                                    <Select defaultValue="xsxm" className="accountsSelect">
                                        <Option value="xsxm">room1</Option>
                                        <Option value="jtxm">room2</Option>
                                    </Select>
                                )}
                            </FormItem>

                            <FormItem {...formItemLayout} label="局数">
                                {getFieldDecorator('js', {
                                    rules: [{message: '局数'}],
                                })(
                                    <Select defaultValue="xsxm1" className="accountsSelect">
                                        <Option value="xsxm1">前一局</Option>
                                        <Option value="jtxm1">当前局</Option>
                                    </Select>
                                )}
                            </FormItem>
                        </div> : null}

                        <FormItem>
                            <div style={{textAlign: 'center'}}>
                                <div style={{display: 'inline-block', width: '100%'}}>
                                    <Button type="primary" loading={this.state.loading} htmlType="submit"
                                            className="login-form-button">
                                        查询
                                    </Button>
                                </div>
                            </div>
                        </FormItem>
                    </Form>
                </div>
                <div ref="garmerContent">

                </div>

            </div>
    )
    }
    }
    export default GetGamer = Form.create({})(GetGamer);

