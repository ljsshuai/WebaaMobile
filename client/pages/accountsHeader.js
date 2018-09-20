var React = require('react')
import {NavBar,Modal,Icon,Button} from 'antd-mobile';
const alert = Modal.alert;
import {Link,  Redirect,withRouter  } from 'react-router-dom'
class AccountsHeader extends React.Component{
    constructor(props){
        super(props);
    }

    onClickDel(opt) {

        // if (opt.props.value === 'DelUser') {
        //     console.log(opt.props)
            alert('账目清零', '确认账目清零？', [
                {text: '取消', onPress: () => console.log('cancel')},
                {
                    text: '确定',
                    onPress: () => {
                    }
                },
            ])
        // } else {
        //     this.props.history.push("/manger/" + opt.props.value);
        // }
    };


    render(){
        console.log( this.props.btn)
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>{this.props.url?this.props.history.push("/list"):this.props.history.push("/list")}}
                    rightContent={[
                        this.props.btn?<Button type="primary"  onClick={this.onClickDel.bind(this)} className="accountHeaderBtn" inline size="small"  >账目清零</Button>:null,
                    ]}
                >{this.props.title?this.props.title:"线上总账"}</NavBar>
            </div>
        );
    };
}
AccountsHeader=withRouter(AccountsHeader);
export default AccountsHeader;