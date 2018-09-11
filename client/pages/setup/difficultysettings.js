var React = require('react');
import {List,NavBar,Icon,WingBlank,SearchBar,WhiteSpace,Picker} from 'antd-mobile';
const Item=List.Item;
class DifficultySettings extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user:{
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
                <List renderHeader={() => ''}>
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(`${this.props.match.url}/difficultysettings`)}}>难度设置</Item>
                </List>
                <List renderHeader={() => ''}>
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(`${this.props.match.url}/editPassword`)}}>游戏设置</Item>
                </List>
                <List renderHeader={() => ''}>
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(`${this.props.match.url}/editPassword`)}}>房间设置</Item>
                </List>
                <List renderHeader={() => ''}>
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(`${this.props.match.url}/editPassword`)}}>广播设置</Item>
                </List>
                <List renderHeader={() => ''}>
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(`${this.props.match.url}/editPassword`)}}>游戏启停</Item>
                </List>
                <List renderHeader={() => ''}>
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(`${this.props.match.url}/editPassword`)}}>玩家封号</Item>
                </List>
                <List renderHeader={() => ''}>
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(`${this.props.match.url}/editPassword`)}}>活动设置</Item>
                </List>
                <List renderHeader={() => ''}>
                    <Item arrow="horizontal" onClick={()=>{this.props.history.push(`${this.props.match.url}/editPassword`)}}>清除设置</Item>
                </List>
            </div>
        )
    }
}
export default DifficultySettings;