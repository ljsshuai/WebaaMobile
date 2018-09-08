var React = require('react')
import {NavBar,Icon,WingBlank,SearchBar,WhiteSpace,Picker} from 'antd-mobile';
import '../public/css/userlist.css';
class UserList extends React.Component {
        static defaultProps = {
            accounts : 'shjj99',
            id :'13',
            intergral : '400900'
        };

    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}

                >个人信息</NavBar>
                <div className="user_main">
                    <div className="user_main_list1">账号：{this.props.accounts} <div className="user_main_right"> ID:{this.props.id}</div></div>
                    <div className="user_main_list2">积分：{this.props.intergral}</div>
                </div>
                <div>


                </div>
                <div className='bgcolor'>
                    <WingBlank><div className="sub-title">通过手机号码查询账号</div></WingBlank>
                    <SearchBar  placeholder="Search" maxLength={8} />
                </div>
            </div>
        )
    }
}
export default UserList;