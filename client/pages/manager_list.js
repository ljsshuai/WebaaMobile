var React = require('react');
import {Icon, Modal, Popover, List, SearchBar, NavBar, Button} from 'antd-mobile';

const PopItem = Popover.Item;
const alert = Modal.alert;
const Item = List.Item;
import MangerHeader from './manger_header';
import '../public/css/managerlist.css';

class MangerList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            selected: '',
        }
    }

    handleVisibleChange(visible) {
        this.setState({
            visible,
        });
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
            <div>
                <MangerHeader url="/"/>
                <SearchBar showCancelButton placeholder="请输入ID(五位数字)"/>
                <div>
                    <ul className='daohang'>
                        <li><a>状态</a></li>
                        <li><a>类型</a></li>
                        <li><a>备注名</a></li>
                        <li><a>当前积分</a></li>
                        <li><a>功能操作</a></li>
                    </ul>
                </div>
                <List className="my-list">
                    <Item>
                        <div className="listContent">
                            <div>
                                <div>
                                    aa
                                </div>
                                <div>
                                    aa
                                </div>
                                <div>
                                    aa
                                </div>
                                <div>
                                    aa
                                </div>
                                <div>
                                    <Popover mask
                                             overlayClassName="fortest"
                                             overlayStyle={{color: 'currentColor'}}
                                             visible={this.state.visible}
                                             overlay={[
                                                 (<PopItem key="4" value="mangerecharge"
                                                           data-seed="logId">充值</PopItem>),
                                                 (<PopItem key="5" value="mangerbalance"
                                                           style={{whiteSpace: 'nowrap'}}>强制结算</PopItem>),
                                                 (<PopItem key="1" value="mangerdetails"
                                                           style={{whiteSpace: 'nowrap'}}>详细资料</PopItem>),
                                                 (<PopItem key="2" value="DelUser"
                                                           style={{whiteSpace: 'nowrap'}}>删除用户</PopItem>),
                                                 (<PopItem key="6" value="mangerrepassworld">
                                                     <span style={{marginRight: 5}}>重置密码</span>
                                                 </PopItem>),
                                             ]}
                                             align={{
                                                 overflow: {adjustY: 0, adjustX: 0},
                                                 offset: [-10, 0],
                                             }}
                                             onVisibleChange={this.handleVisibleChange.bind(this)}
                                             onSelect={this.onSelect.bind(this)}
                                    >
                                        <div
                                        >
                                            <Icon type="ellipsis"/>
                                        </div>
                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </Item>

                </List>


            </div>
        );
    };
}

export default MangerList;