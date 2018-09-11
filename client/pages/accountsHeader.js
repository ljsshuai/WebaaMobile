var React = require('react')
import {NavBar,Icon,Button} from 'antd-mobile';
import {Link,  Redirect,withRouter  } from 'react-router-dom'
class AccountsHeader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log( this.props.btn)
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>{this.props.url?this.props.history.push("/list"):this.props.history.push("/accounts")}}
                    rightContent={[
                        this.props.btn?<Button type="primary" className="accountHeaderBtn" inline size="small"  >账目清零</Button>:null,
                    ]}
                >{this.props.title?this.props.title:"线上总账"}</NavBar>
            </div>
        );
    };
}
AccountsHeader=withRouter(AccountsHeader);
export default AccountsHeader;