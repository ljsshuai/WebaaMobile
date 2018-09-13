var React = require('react')
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button,Checkbox,message} from 'antd';
const FormItem = Form.Item;
import {connect} from 'react-redux';
import HeaderTitle from "../component/headerTitle"
import createHistory from 'history/createHashHistory';
const history = createHistory();
import {loginFn} from '../actions/index.redux';

class Login extends React.Component {
    constructor(...args){
      super(...args);
      this.state={
        loading:false
      }
    }
    componentDidMount(){
      document.getElementsByTagName('title')[0].innerText='登录页'
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
              history.push('/list');
              // this.props.loginFn(values).then(data=>{
              //     message.info(data.msg);
              //     if(data.status==='ok'){
              //     history.push('/index');
              //     }else{
              //         this.setState({loading:false});
              //     }
              // })
          }
        });
    }
    render() {
      const { getFieldDecorator } = this.props.form;
      const num=this.props.num;
      // console.log(this.props)
      return (
        <div  className="loginform">
            <HeaderTitle headertitle="用户登录"/>
            <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
          <FormItem>
            {getFieldDecorator('loginName', {
              rules: [{ required: true, message: '请输入用户名!' }],
            })(
              <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" placeholder="" />
            )}
          </FormItem>
                <div className="loginCheckbox">
                    <div>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>推荐人</Checkbox>
                            )}
                        </FormItem>
                    </div>
                    <div>
                        <FormItem>
                            {getFieldDecorator('remember1', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住密码</Checkbox>
                            )}
                        </FormItem>
                    </div>
                </div>


          <FormItem>
              <div style={{textAlign:'center'}}>
                  <Button size="large" type="primary" loading={this.state.loading} htmlType="submit" className="login-form-button">
                      登录
                  </Button>
              </div>
          </FormItem>
        </Form>
        
        </div>
      );
    }
  }


const mapStatetoProps=(state=>{
  return {state}
});
const actionCreators={loginFn}
Login=connect(mapStatetoProps,actionCreators)(Login)

export default Login = Form.create({})(Login);