
var React = require('react');
import {Icon, Modal, Popover, List, SearchBar, NavBar, Button} from 'antd-mobile';
import { Form} from 'antd';
const FormItem=Form.Item;
const PopItem = Popover.Item;
const alert = Modal.alert;
const Item = List.Item;
import PlotterHeaders from './plotterheader';
import '../public/css/managerstatus.css';

class ManagerStatus extends React.Component {
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

    render() {
        const formItemLayout = {
            labelCol: {
                span:6
            },
            wrapperCol: {
                span:18
            },
        };
        return (
            <div className="aaa">
                <PlotterHeaders url="/"/>
                <div>
                    <ul className='AM_daohang'>
                        <li><a>备注</a></li>
                        <li><a>账号</a></li>
                        <li><a>状态</a></li>
                    </ul>
                </div>
                <List>
                </List>
                <div className='plottonoff'>
                    <div>打印总开关:已开启<Button size="small"  type="primary" htmlType="submit" inline style={{verticalAlign:'middle',marginLeft:'50px'}}>禁用</Button>
                    </div>
                </div>
            </div>
        );
    };
}

export default ManagerStatus;