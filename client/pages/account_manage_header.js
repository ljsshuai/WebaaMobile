var React = require('react')
import {NavBar,Icon,Button} from 'antd-mobile';
import {Link,  Redirect,withRouter  } from 'react-router-dom'
class AccountManageHeader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    rightContent={<Icon onClick={()=>{this.props.history.push("/manger/accountadd")}} type="ellipsis"/>}
                    onLeftClick={()=>{this.props.url?this.props.history.push("/list"):this.props.history.push("/accountmanage")}}
                >机台账号管理</NavBar>
            </div>
        );
    };
}
AccountManageHeader=withRouter(AccountManageHeader);
export default AccountManageHeader;