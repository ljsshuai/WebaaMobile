var React = require('react');
import {Icon, Modal, Popover, List, SearchBar, NavBar, Button} from 'antd-mobile';

const PopItem = Popover.Item;
const alert = Modal.alert;
const Item = List.Item;
import AccountManageHeader from './account_manage_header';
import '../public/css/accountmanage.css';

class AccountManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            selected: '',
            visible1:false
        }
    }

    handleVisibleChange(visible) {
        console.log(visible)
        // this.setState({
        //     visible,
        // });
    };

    onSelect(opt) {
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
        if (opt.props.value === 'DelUser') {
            console.log(opt.props)
            alert('删除用户', '确认删除该用户？', [
                {text: '取消', onPress: () => console.log('cancel')},
                {
                    text: '确定',
                    onPress: () => {
                    }
                    // new Promise((resolve) => {
                    //     Toast.info('onPress Promise', 1);
                    //     setTimeout(resolve, 1000);
                    // }),
                },
            ])
        } else {
            this.props.history.push("/manger/" + opt.props.value);
        }
    };

    render() {
        return (
            <div className="aaa">
                <AccountManageHeader url="/"/>
                <div>
                    <ul className='AM_daohang'>
                        <li><a>备注</a></li>
                        <li><a>账号</a></li>
                        <li><a>状态</a></li>
                    </ul>
                </div>
                <List>
                    <Item  arrow="horizontal" onClick={() => {this.props.history.push("/accountmore")}}><div  className="accountDiv">
                        <div>123</div><div>456</div><div>789</div>
                    </div></Item>
                    <Item  arrow="horizontal" onClick={() => {}}><div  className="accountDiv">
                        <div>123</div><div>456</div><div>789</div>
                    </div></Item>
                </List>
            </div>
        );
    };
}

export default AccountManage;