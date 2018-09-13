var React = require('react');
import {SearchBar,NavBar,List,InputItem,TextareaItem} from 'antd-mobile';
import { Form, Icon,Button, Input,Select,Radio} from 'antd';
const FormItem = Form.Item;
const Item = List.Item;
import MangerHeader from './manger_header';
import '../public/css/managerrecharge.css';
class MangereCharge extends React.Component{
    constructor(){
        super();
        this.state={
            ID:'14',
            beizhu:'充值经理',
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
                <MangerHeader/>
                <div className="my_integration">我的积分：{this.state.dqjf}</div>
                <List className="my-list">
                    <Form  className="addManager-form" >
                        <Item>
                            <FormItem   {...formItemLayout}  label="经理ID"  >
                                <Input type="phone" defaultValue={this.state.ID} style={{border:'0px'}}></Input>
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem   {...formItemLayout}  label="经理备注" style={{border:'0px'}}>
                                <Input type="phone" defaultValue={this.state.beizhu} style={{border:'0px'}}></Input>
                            </FormItem>
                        </Item>
                        <Item>
                            <FormItem   {...formItemLayout}  label="当前积分"  >
                                <Input type="phone" defaultValue={this.state.dqjf} style={{border:'0px'}}></Input>
                            </FormItem>
                        </Item>
                        <Item>
                        <FormItem style={{marginBottom:'0px'}} {...formItemLayout} label="充值金额">
                            <Input type="phone" defaultValue={this.state.jine} style={{width:'150px'}}></Input>
                            <Button size="small" type="primary" htmlType="submit" inline
                                    style={{verticalAlign: 'middle', marginLeft: '30px'}}>
                                清空
                            </Button>
                        </FormItem>
                        </Item>
                        <Item>
                            <div style={{textAlign:'center'}}>
                                <Button size="small" type="primary" htmlType="submit" inline style={{verticalAlign: 'middle', marginLeft: '15px'}}>十</Button>
                                <Button size="small" type="primary" htmlType="submit" inline style={{verticalAlign: 'middle', marginLeft: '15px'}}>一百</Button>
                                <Button size="small" type="primary" htmlType="submit" inline style={{verticalAlign: 'middle', marginLeft: '15px'}}>一千</Button>
                                <Button size="small" type="primary" htmlType="submit" inline style={{verticalAlign: 'middle', marginLeft: '15px'}}>一万</Button>
                                <Button size="small" type="primary" htmlType="submit" inline style={{verticalAlign: 'middle', marginLeft: '15px'}}>十万</Button>
                            </div>
                        </Item>
                    </Form>
                </List>
                <Button type="primary" size="large" style={{width:'100%'}}>确认充值</Button>
            </div>
        );
    };
}
export default MangereCharge;