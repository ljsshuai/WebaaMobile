import Login from "./login";
var React = require('react')
import {List,NavBar,Icon,WingBlank,SearchBar,WhiteSpace,Picker} from 'antd-mobile';
const Item = List.Item;
import {Switch,Route} from 'react-router-dom'
import '../public/css/userlist.css';
import EditPassword from "./editPassword";
class UserList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            user:{
                accounts:654,
                id:66,
                intergral:46045640
            }
        }
    }
    render(){
        console.log(this.props.match.url)
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>{this.props.history.push("/list")}}
                >个人信息</NavBar>
                <div className="user_main">
                    <div className="user_main_list1">账号：{this.state.user.accounts} <div className="user_main_right"> ID:{this.state.user.id}</div></div>
                    <div className="user_main_list2">积分：{this.state.user.intergral}</div>
                </div>
                    <List renderHeader={() => ''} className="editpassword">
                        <Item arrow="horizontal" onClick={()=>{this.props.history.push(`${this.props.match.url}/editPassword`)}}>修dd改密码</Item>
                    </List>
                <List   renderHeader={() => '通过手机号码查询账号'} className="listTitle">
                    <Item >
                        <SearchBar  placeholder="Search" maxLength={8} />
                    </Item>
                </List>

            </div>
        )
    }
}

const userRoutes = ({ match }) => (
    <div>
        <Route exact path={`${match.url}/editPassword`} component={EditPassword} />
        <Route exact path={`${match.url}/`} component={UserList} />
    </div>
);


export default userRoutes;