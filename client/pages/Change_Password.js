var React = require('react')
import {NavBar,Icon,Button} from 'antd-mobile';
import '../public/css/changepassword.css';
 class ChangePassword extends React.Component{
    constructor(){
        super();
        this.state={

        };
    }

    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >修改密码</NavBar>
                <div className='ChangePassword_list'>
                    旧密码：<input style={{width:"70%", marginTop: "15px",opacity: '0.6'} } type="text" placeholder="请输入密码"/><br/>
                    新密码：<input style={{width:"70%", marginTop: "15px",opacity: '0.6'}} type="text" placeholder="请输入新密码"/><br/>
                    新密码：<input style={{width:"70%", marginTop: "15px",opacity: '0.6'}} type="text" placeholder="请在输入一次"/><br/>
                </div>
                <Button type="primary" className='button'>修改密码</Button>
            </div>
        );
    };
}
export default ChangePassword;