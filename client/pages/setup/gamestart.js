var React = require('react')
import {NavBar,Icon,Button,List} from 'antd-mobile';
import { Pagination} from 'antd';
const Item = List.Item;
class GameStart extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>{this.props.url?this.props.history.push("/list"):this.props.history.push("/setup")}}
                >游戏启停</NavBar>
                <List>
                    <Item><div style={{fontSize:'14px'}}>每天定时停机时间 <Pagination simple defaultCurrent={2} total={100} style={{display:'inline-block',verticalAlign:'middle'}}/>
                        <Button type="primary" style={{width:'46px',display:'inline-block',height:'23px',fontSize:'14px',verticalAlign:'middle',lineHeight:'23px'}}>修改</Button></div>
                    </Item>
                    <Item>
                        <div>
                        <div style={{display:'inline-block',width:'25%',fontSize:'14px'}}>房间1</div>
                        <div style={{display:'inline-block',width:'25%',fontSize:'14px'}}>正常</div>
                        <div style={{display:'inline-block',width:'25%'}}><Button type="primary" style={{width:'46px',display:'inline-block',height:'23px',fontSize:'14px',verticalAlign:'middle',lineHeight:'23px'}}>验单</Button></div>
                        <div style={{display:'inline-block',width:'25%'}}><Button type="primary" style={{width:'46px',display:'inline-block',height:'23px',fontSize:'14px',verticalAlign:'middle',lineHeight:'23px'}}>停机</Button></div>
                        </div>
                    </Item>
                    <Item>
                        <div>
                            <div style={{display:'inline-block',width:'25%',fontSize:'14px'}}>房间1</div>
                            <div style={{display:'inline-block',width:'25%',fontSize:'14px'}}>正常</div>
                            <div style={{display:'inline-block',width:'25%'}}><Button type="primary" style={{width:'46px',display:'inline-block',height:'23px',fontSize:'14px',verticalAlign:'middle',lineHeight:'23px'}}>验单</Button></div>
                            <div style={{display:'inline-block',width:'25%'}}><Button type="primary" style={{width:'46px',display:'inline-block',height:'23px',fontSize:'14px',verticalAlign:'middle',lineHeight:'23px'}}>停机</Button></div>
                        </div>
                    </Item>
                </List>
                    <div style={{textAlign:'center',marginTop:'150px'}}>
                        <div style={{display:'inline-block',width:'33.333%'}}><Button type="primary" style={{width:'80px',display:'inline-block',height:'35px',fontSize:'14px',verticalAlign:'middle',lineHeight:'35px'}}>全部开机</Button></div>
                        <div style={{display:'inline-block',width:'33.333%'}}><Button type="primary" style={{width:'80px',display:'inline-block',height:'35px',fontSize:'14px',verticalAlign:'middle',lineHeight:'35px'}}>全部停机</Button></div>
                        <div style={{display:'inline-block',width:'33.333%'}}><Button type="primary" style={{width:'80px',display:'inline-block',height:'35px',fontSize:'14px',verticalAlign:'middle',lineHeight:'35px'}}>刷新</Button></div>
                    </div>
                </div>
        );
    };
}
export default GameStart;