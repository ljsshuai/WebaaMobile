import EditPassword from "../editPassword";

var React = require('react')
import {List,NavBar,Icon,WingBlank,SearchBar,WhiteSpace,Picker} from 'antd-mobile';
const Item=List.Item;
import {Route} from "react-router-dom";
import RoomSetting from './room_setting';
import BroadcastSetting from './broadcast_setting'
import GameStart from './gamestart';
import PlayerSeal from "./PlayerSeal";
class setUpList extends React.Component {
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
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>{this.props.history.push("/list")}}
                >设置</NavBar>
                <List>
                    <Item arrow="horizontal" >难度设置</Item>
                </List>
                <List>
                    <Item arrow="horizontal" >游戏设置</Item>
                </List>
                <List>
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(`${this.props.match.url}/roomsetting`)}}>房间设置</Item>
                </List>
                <List>
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(`${this.props.match.url}/boradcastsetting`)}}>广播设置</Item>
                </List>
                <List>
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(`${this.props.match.url}/gamestart`)}}>游戏启停</Item>
                </List>
                <List>
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(`${this.props.match.url}/editPassword`)}}>玩家封号</Item>
                </List>
                <List>
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(`${this.props.match.url}/editPassword`)}}>活动设置</Item>
                </List>
                <List>
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(`${this.props.match.url}/editPassword`)}}>清除设置</Item>
                </List>
            </div>
        )
    }
}

const SetUpRoutes = ({ match }) => (
    <div>
        <Route exact path={`${match.url}/roomsetting`} component={RoomSetting} />
        <Route exact path={`${match.url}/boradcastsetting`} component={BroadcastSetting} />
        <Route exact path={`${match.url}/gamestart`} component={GameStart} />
        <Route exact path={`${match.url}/playerseal`} component={PlayerSeal}/>
        <Route exact path={`${match.url}/`} component={setUpList} />
    </div>
);


export default SetUpRoutes;