var React = require('react');
import {NavBar,Icon,Button,List} from 'antd-mobile';
import { Form,Input,Select} from 'antd';
const FormItem = Form.Item;
const Item = List.Item;
class PlayerSeal extends React.Component{
    constructor(props){
        super(props);
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
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>{this.props.url?this.props.history.push("/list"):this.props.history.push("/setup")}}
                >玩家封号</NavBar>
                <div >
                <List className="my-list" >
                    <Form  className="addManager-form" >
                        <Item>
                            <FormItem  {...formItemLayout} label="玩家ID">
                                <Input size="default"  type="text" placeholder='请输入正确的玩家ID'  />
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem  {...formItemLayout} label="封号时间">
                                <Select defaultValue="1天" >
                                    <Option value="cz">2天</Option>
                                    <Option value="dy">3天</Option>
                                </Select>
                            </FormItem>
                        </Item>
                                <Button type="primary" style={{width:'100px',margin:'0 auto',height:'40px'}}>确定</Button>
                    </Form>
                </List>
            </div>
                <List>
                    <NavBar style={{background:'#f5f5f9',color:'black',marginTop:'150px'}}>当前无封号</NavBar>
                </List>
            </div>
     );
    };
}
export default PlayerSeal;