import RefereeHeader from "./refereeheader";
var React = require('react');
import {Icon, Modal, Popover, List, SearchBar, NavBar, Button} from 'antd-mobile';
const PopItem = Popover.Item;
const alert = Modal.alert;
const Item = List.Item;
import '../public/css/managerreferee.css';


class MangerReferee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            selected: '',
            visible1:false,
            people:12,
            sum:327080,
            date:new Date(),
        }
    }

/*    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(), 1000)
    }
    //同样，每当Clock生成的这个DOM被移除的时候，我们也会想要清除定时器，这在React中被称为卸载。
    componentWillUnmount(){
        clearInterval(this.timerID)
    }*/
    tick(){
        //setState更新组件局部状态
        this.setState({
            date:new Date()
        })
    }
    handleVisibleChange(visible) {

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
                <RefereeHeader url="/"/>
                <div className="referee_main">
                    <div className="user_main_list1" id="time" >{this.state.date.toLocaleString()}</div>
                    <div className="user_main_list2">推荐人数：{this.state.people}<div className="user_main_right"> 总总技:{this.state.sum}</div></div>
                </div>
                <div>
                    <ul className='daohang2'>
                        <li><a>状态</a></li>
                        <li><a>ID</a></li>
                        <li><a>备注名</a></li>
                        <li><a>总计</a></li>
                    </ul>
                </div>
                <List className="my-list2">
                    <Item>
                        <div className="listContent2">
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
                                             visible={this.state.visible1}
                                             overlay={[
                                                 (<PopItem key="42" value="refereeLimit"
                                                           data-seed="logId">兑换限额</PopItem>),
                                                 (<PopItem key="53" value="refereepeople"
                                                           style={{whiteSpace: 'nowrap'}}>推荐玩家</PopItem>),
                                                 (<PopItem key="14" value="refereedetails"
                                                           style={{whiteSpace: 'nowrap'}}>详细资料</PopItem>),
                                                 (<PopItem key="25" value="DelUser"
                                                           style={{whiteSpace: 'nowrap'}}>删除用户</PopItem>),
                                                 (<PopItem key="66" value="refereerecharge">
                                                     <span style={{marginRight: 5}}>充值</span>
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
                    <Item>
                        <div className="listContent2">
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
                                                           data-seed="logId">兑换限额</PopItem>),
                                                 (<PopItem key="5" value="mangerbalance"
                                                           style={{whiteSpace: 'nowrap'}}>推荐玩家</PopItem>),
                                                 (<PopItem key="1" value="mangerdetails"
                                                           style={{whiteSpace: 'nowrap'}}>详细资料</PopItem>),
                                                 (<PopItem key="2" value="DelUser"
                                                           style={{whiteSpace: 'nowrap'}}>删除用户</PopItem>),
                                                 (<PopItem key="6" value="mangerrepassworld">
                                                     <span style={{marginRight: 5}}>充值</span>
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

export default MangerReferee;