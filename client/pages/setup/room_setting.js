import SetUpRoutes from "./admin_setup";

var React = require('react')
import {List,TextareaItem,NavBar} from 'antd-mobile';
import { Form, Icon, Input, Button,Checkbox,message,Select} from 'antd';
const FormItem = Form.Item;
const Item = List.Item;
const Option = Select.Option;
import SetupHeader from './setupheader'
class RoomSetting extends React.Component {
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
                <div style={{ position:'fixed',top:'0px',zIndex:'888',width:'100%',left:'0'}}>
                <SetupHeader/>
                <List className="my-list">
                    <Form onSubmit={this.handleSubmit.bind(this)} className="addManager-form" >
                    <div style={{textAlign:'center'}}>服务器：112.74.44.74</div>
                    <FormItem   {...formItemLayout}  label="选择房间"  >
                        <Select defaultValue="Room 1" >
                            <Option value="cz">Room 1</Option>
                            <Option value="dy">Room 2</Option>
                            <Option value="jt" >Room 3</Option>
                        </Select>
                    </FormItem>
                    </Form>
                </List>
                </div>
                <List className="my-list">
                    <Form onSubmit={this.handleSubmit.bind(this)} className="addManager-form" >
                        <Item>
                            <FormItem  {...formItemLayout} label="房间状态">
                                    <Input size="default"  type="text" value='正常'  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem   {...formItemLayout}  label="是否连接打印机"  >
                                <Select defaultValue="否" >
                                    <Option value="cz">是</Option>
                                    <Option value="dy">否</Option>
                                </Select>
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem   {...formItemLayout}  label="是否开启幸运位"  >
                                <Select defaultValue="否" >
                                    <Option value="cz">是</Option>
                                    <Option value="dy">否</Option>
                                </Select>
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem   {...formItemLayout}  label="是否开启预警"  >
                                <Select defaultValue="否" >
                                    <Option value="cz">是</Option>
                                    <Option value="dy">否</Option>
                                </Select>
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem   {...formItemLayout}  label="是否开启积分"  >
                                <Select defaultValue="否" >
                                    <Option value="cz">是</Option>
                                    <Option value="dy">否</Option>
                                </Select>
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem   {...formItemLayout}  label="是否明牌"  >
                                <Select defaultValue="否" >
                                    <Option value="cz">是</Option>
                                    <Option value="dy">否</Option>
                                </Select>
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem   {...formItemLayout}  label="是否彩金"  >
                                <Select defaultValue="否" >
                                    <Option value="cz">是</Option>
                                    <Option value="dy">否</Option>
                                </Select>
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem   {...formItemLayout}  label="牌路控制"  >
                                <Select defaultValue="1" >
                                    <Option value="cz">1</Option>
                                    <Option value="dy">2</Option>
                                </Select>
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem   {...formItemLayout}  label="特殊奖出现概率"  >
                                <Select defaultValue="50" >
                                    <Option value="cz">100</Option>
                                    <Option value="dy">150</Option>
                                </Select>
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem   {...formItemLayout}  label="赔率模式"  >
                                <Select defaultValue="1:0.95" >
                                    <Option value="cz">是</Option>
                                    <Option value="dy">否</Option>
                                </Select>
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="下注时间">
                                <Input size="default"  type="text" placeholder='下注时间.....'  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="开牌时间">
                                <Input size="default"  type="text" placeholder='开牌时间.....'  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="开局时间">
                                <Input size="default"  type="text" placeholder='开局时间.....'  />
                            </FormItem>
                        </Item>
                            <NavBar style={{background:'#606060'}}>机台房间设置</NavBar>
                        <Item>
                            <FormItem  {...formItemLayout} label="桌面小押注">
                                <Input size="default"  type="text" placeholder='桌面最小限红.....'  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="桌面限红">
                                <Input size="default"  type="text" placeholder='桌面限红.....'  />
                            </FormItem>
                        </Item>
                        <NavBar style={{background:'#606060'}}>线上房间设置</NavBar>
                        <Item>
                            <FormItem  {...formItemLayout} label="线上最小押注">
                                <Input size="default"  type="text" placeholder='线上最小限红.....'  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="线上限红">
                                <Input size="default"  type="text" placeholder='线上限红.....'  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="线上暴击">
                                <Input size="default"  type="text" placeholder='线上暴击.....'  />
                            </FormItem>
                        </Item>
                        <Item>
                        <FormItem  {...formItemLayout} label="线上试分值">
                            <Input size="default"  type="text" placeholder='线上试分值.....'  />
                        </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="线上蓝筹码">
                                <Input size="default"  type="text" placeholder='线上蓝筹码.....'  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="线上红筹码">
                                <Input size="default"  type="text" placeholder='线上红筹码.....'  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="线上黑筹码">
                                <Input size="default"  type="text" placeholder='线上黑筹码.....'  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="线上对项限红">
                                <Input size="default"  type="text" placeholder='线上限制红.....'  />
                            </FormItem>
                        </Item>
                            <div style={{textAlign:'center',position:'fixed',bottom:'0',width:'100%',zIndex:'888'}}>
                                <Button size="large"  type="primary" loading={this.state.loading} htmlType="submit" className="login-form-button">
                                    确认
                                </Button>
                            </div>
                    </Form>
                </List>
            </div>
        )
    }
}
export default RoomSetting = Form.create({})(RoomSetting);

