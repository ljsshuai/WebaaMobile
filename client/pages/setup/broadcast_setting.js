import SetUpRoutes from "./admin_setup";

var React = require('react')
import {List,TextareaItem,NavBar,extareaItem} from 'antd-mobile';
import { createForm } from 'rc-form';
import { Form, Icon, Input, Button,Checkbox,message,Select,Radio} from 'antd';
const FormItem = Form.Item;
const Item = List.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
import SetupHeader from './setupheader'
class BroadcastSetting extends React.Component {
    constructor(props){
        super(props);
        this.state={
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
        const { getFieldProps } = this.props.form;
        return(
            <div>
                    <SetupHeader/>
                <List className="my-list">
                    <Form onSubmit={this.handleSubmit.bind(this)} className="addManager-form" >
                        <Item>
                            <FormItem   {...formItemLayout}  label="选择房间"  >
                                <Select defaultValue="所有房间" >
                                    <Option value="cz">房间1</Option>
                                    <Option value="dy">房间2</Option>
                                </Select>
                            </FormItem>
                            <List>
                            <TextareaItem style={{width:'100%'}}
                                          {...getFieldProps('note1')}
                                          rows={5}
                                          placeholder="输入广播内容"
                            />
                                <RadioGroup name="radiogroup" defaultValue={1}>
                                    <Radio value={1}>即时</Radio>
                                    <Radio value={2}>轮播</Radio>
                                </RadioGroup>
                                <Button style={{marginLeft:'60px'}}>清除</Button>
                                <Button type="primary" style={{marginLeft:'5px'}}>发送</Button>
                            </List>
                        </Item>
                         </Form>
                         </List>
                        <Item>
                            <div style={{fontSize:'13PX'}}>轮播间隔<Input style={{width:'70px'}}/>分钟<Input style={{width:'40px'}}/>秒<Button type="primary" style={{marginLeft:'65px'}}>修改</Button></div>
                        </Item>
                    <NavBar style={{marginTop:'10px'}}>轮播消息列表</NavBar>
            </div>
        )
    }
}
export default BroadcastSetting = Form.create({})(BroadcastSetting);

