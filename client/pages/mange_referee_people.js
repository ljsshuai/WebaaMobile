var React = require('react');
import {Icon, Modal, Popover, List, SearchBar, NavBar, Button} from 'antd-mobile';

const PopItem = Popover.Item;
const alert = Modal.alert;
const Item = List.Item;
import MangerHeader from './manger_header';
import '../public/css/RefereePeople.css';

class RefereePeople extends React.Component {
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
            <div>
                <div>
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={()=>{this.props.url?this.props.history.push("/list"):this.props.history.push("/managerreferee")}}
                    >推荐玩家</NavBar>
                </div>
                <div>
                    <ul className='daohang3'>
                        <li><a>备注<p>共11人</p></a></li>
                        <li><a>ID<p></p><br/></a></li>
                        <li><a>P<p>共231134</p></a></li>
                        <li><a>W<p>共222152</p></a></li>
                    </ul>
                </div>
                <List className="my-list3">
                    <Item>
                        <div className="listContent3">
                            <div>
                                <div>
                                    潇洒的别墅
                                </div>
                                <div>
                                    20370
                                </div>
                                <div>
                                    0
                                </div>
                                <div>
                                    0
                                </div>
                            </div>
                        </div>
                    </Item>
                    <Item>
                        <div className="listContent3">
                            <div>
                                <div>
                                    绿叶
                                </div>
                                <div>
                                    20372
                                </div>
                                <div>
                                    0
                                </div>
                                <div>
                                    0
                                </div>
                            </div>
                        </div>
                    </Item>
                </List>


            </div>
        );
    };
}

export default RefereePeople;