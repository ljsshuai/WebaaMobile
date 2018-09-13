var React = require('react')
import {List,TextareaItem,NavBar} from 'antd-mobile';
import { Form, Icon, Input, Button,Checkbox,message,Select,} from 'antd';
const FormItem = Form.Item;
const Item = List.Item;
const Option = Select.Option;
import AdminHeader from './adminHeader';
class AdminDetails extends React.Component {
    constructor(){
        super();
        this.state={
            ID:'14',
            beizhu:'充值管理员',
            dqjf:'794450',
            jine:'0'
        };
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
        return(
            <div>
                <AdminHeader/>
                <NavBar style={{background:'#606060'}}>详细资料</NavBar>
                <List className="my-list" >
                    <Form  className="addManager-form" >
                        <Item>
                            <FormItem  {...formItemLayout} label="管理员账号">
                                jd5555666
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="管理员ID">
                                555666
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="当前积分">
                                794450<div style={{display:'inline-block',float:'right'}}>经理类型：充值</div>
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="管理员备注">
                                <Input size="default"   type="text" defaultValue="1"  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="推荐人姓名">
                                <Input size="default"   type="text" defaultValue="1"  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="推荐人性别">
                                <Select defaultValue="男" >
                                    <Option value="cz">男</Option>
                                    <Option value="dy">女</Option>
                                </Select>
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="身份证号">
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
                            <FormItem  {...formItemLayout} label="推荐人住址">
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
        );
    };
}
export default AdminDetails;