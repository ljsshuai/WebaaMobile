var React = require('react');
var React = require('react');
import {SearchBar,NavBar,List,InputItem,TextareaItem} from 'antd-mobile';
import { Form, Icon,Button, Input,Select,Radio} from 'antd';
import MangerHeader from './manger_header';
const FormItem = Form.Item;
const Item = List.Item;
import '../public/css/managerrecharge.css';
class MangereCharge extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ID:'14',
            beizhu:'充值经理',
            dqjf:'794450',
            money:0
        };
    }

    tenoClick(e,es){
        const Number =this.state.money+parseInt(e.target.attributes['number'].value);
        console.log( es,e.target.attributes['number'].value,this.props);
        this.props.form.setFieldsValue({
            inputValue:this.state.money+Number
        })
        this.setState(
            {money: Number }
        );
    }
    cleanClick(){
       this.setState(
           {money:0}
       )
        console.log(money);
    }
    render(){
        const { getFieldDecorator } = this.props.form;
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
                <NavBar style={{background:'#606060'}}>充值</NavBar>
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
                                {getFieldDecorator('inputValue', {
                                })(
                                    <Input type="phone"  style={{width:'150px'}}></Input>
                                )}
                                <Button size="small" type="primary" htmlType="submit" inline
                                        style={{verticalAlign: 'middle', marginLeft: '30px'}} onClick={this.cleanClick.bind(this)}>
                                    清空
                                </Button>
                            </FormItem>
                        </Item>
                        <Item>
                            <div style={{textAlign:'center'}}>
                                <Button  size="small" type="primary"  number="10"  style={{verticalAlign: 'middle', marginLeft: '15px'}} onClick={this.tenoClick.bind(this)}>十</Button>
                                <Button  size="small" type="primary" onClick={this.tenoClick.bind(this)}  number="100"  style={{verticalAlign: 'middle', marginLeft: '15px'}}>一百</Button>
                                <Button  size="small" type="primary" onClick={this.tenoClick.bind(this)} number="1000"  style={{verticalAlign: 'middle', marginLeft: '15px'}}>一千</Button>
                                <Button  size="small" type="primary" onClick={this.tenoClick.bind(this)} number="10000"  style={{verticalAlign: 'middle', marginLeft: '15px'}}>一万</Button>
                                <Button  size="small" type="primary" onClick={this.tenoClick.bind(this)} number="100000"  style={{verticalAlign: 'middle', marginLeft: '15px'}}>十万</Button>
                            </div>
                        </Item>
                    </Form>
                </List>
                <Button type="primary"  size="large" style={{width:'100%'}}>确认充值</Button>
            </div>
        );
    };
}
export default MangereCharge = Form.create({})(MangereCharge);