var React = require('react')
import { List ,WingBlank,NavBar,SearchBar,Modal} from 'antd-mobile';
const alert = Modal.alert;
import {Button,Icon} from 'antd'
const Item = List.Item;
const Brief = Item.Brief;
import '../public/css/userlist.css'
class IndexList extends React.Component {
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
    onClick(){
            alert('兑换', '是否兑换总数P？', [
                {text: '取消', onPress: () => console.log('cancel')},
                {
                    text: '确定',
                    onPress: () => {
                    }
                },
            ])
        }
    render(){
        const parentUrl=this.props.match.url;
        return(
            <div>
                <div>
                <NavBar
                    mode="dark"
                    rightContent={<Button type="warning" style={{height:'34px',lineHeight:'34px',width:'60px',fontSize:'13px',background:'#87cff7'}}>刷新</Button>}
                >Reference</NavBar>
                <div className="user_main">
                    <div>
                        <ul className='list_one'>
                            <li>2018-09-17 15:34:53</li>
                            <li>推荐人</li>
                            <li><Button size="large" type="primary" style={{height:'22px',lineHeight:'22px',width:'84px',fontSize:'13px',margin:'0 auto' }} onClick={this.onClick.bind(this)}>兑换</Button></li>
                        </ul>
                    </div>
                </div>
                <div className="user_main">
                    <div>
                        <ul className='list_one'>
                            <li>推荐人数:33</li>
                            <li>总计:320811</li>
                            <li><Button size="large" type="primary" style={{height:'22px',lineHeight:'22px',fontSize:'13px',margin:'0 auto'}}>返还积分</Button></li>
                        </ul>
                    </div>
                </div>
                <div className="user_main">
                    <div>
                        <ul className='list_one'>
                            <li>我的积分:0</li>
                            <li>总P：15536029</li>
                            <li><Button  size="small" type="primary"  className="listBtn"  onClick={()=>{this.props.history.push("/referrerlogs")}}>玩家兑换记录</Button></li>
                        </ul>
                    </div>
                </div>
                <div className="user_main">
                    <div>
                        <ul className='nav_list'>
                            <li style={{width:"25%"}}>ID</li>
                            <li style={{width:"25%"}}>总计</li>
                            <li style={{lineHeight:'20px',width:'50%'}}>备注名<br/>玩家充值</li>
                        </ul>
                    </div>
                </div>
                </div>
                <div>
                    <List>
                        <Item>
                        <ul className='nav_list_main'>
                            <li style={{width:"25%",lineHeight:'75px'}}><Icon type="android"/>20388</li>
                            <li style={{width:"25%",lineHeight:'75px'}}>0</li>
                            <li style={{width:"50%"}}><Button size="small" style={{width:'60%'}}>尚未备注</Button><Button  size="small" type="primary" style={{width:'40%'}} >修改</Button>
                            <Button  size="small" type="primary" style={{display:'block',width:'100%'}} onClick={()=>{this.props.history.push("/referee")}}>充值</Button></li>
                        </ul>
                        </Item>
                        <Item>
                            <ul className='nav_list_main'>
                                <li style={{width:"25%",lineHeight:'75px'}}><Icon type="android"/>20388</li>
                                <li style={{width:"25%",lineHeight:'75px'}}>0</li>
                                <li style={{width:"50%"}}><Button size="small" style={{width:'60%'}}>尚未备注</Button><Button  size="small" type="primary" style={{width:'40%'}}>修改</Button>
                                    <Button size="small" type="primary" style={{display:'block',width:'100%'}}>充值</Button></li>
                            </ul>
                        </Item>
                        <Item>
                            <ul className='nav_list_main'>
                                <li style={{width:"25%",lineHeight:'75px'}}><Icon type="android"/>20388</li>
                                <li style={{width:"25%",lineHeight:'75px'}}>0</li>
                                <li style={{width:"50%"}}><Button size="small" style={{width:'60%'}}>尚未备注</Button><Button  size="small" type="primary" style={{width:'40%'}}>修改</Button>
                                    <Button size="small" type="primary" style={{display:'block',width:'100%'}}>充值</Button></li>
                            </ul>
                        </Item>
                        <Item>
                            <ul className='nav_list_main'>
                                <li style={{width:"25%",lineHeight:'75px'}}><Icon type="android"/>20388</li>
                                <li style={{width:"25%",lineHeight:'75px'}}>0</li>
                                <li style={{width:"50%"}}><Button size="small" style={{width:'60%'}}>尚未备注</Button><Button  size="small" type="primary" style={{width:'40%'}}>修改</Button>
                                    <Button size="small" type="primary" style={{display:'block',width:'100%'}}>充值</Button></li>
                            </ul>
                        </Item>
                        <Item>
                            <ul className='nav_list_main'>
                                <li style={{width:"25%",lineHeight:'75px'}}><Icon type="android"/>20388</li>
                                <li style={{width:"25%",lineHeight:'75px'}}>0</li>
                                <li style={{width:"50%"}}><Button size="small" style={{width:'60%'}}>尚未备注</Button><Button  size="small" type="primary" style={{width:'40%'}}>修改</Button>
                                    <Button size="small" type="primary" style={{display:'block',width:'100%'}}>充值</Button></li>
                            </ul>
                        </Item>
                        <Item>
                            <ul className='nav_list_main'>
                                <li style={{width:"25%",lineHeight:'75px'}}><Icon type="android"/>20388</li>
                                <li style={{width:"25%",lineHeight:'75px'}}>0</li>
                                <li style={{width:"50%"}}><Button size="small" style={{width:'60%'}}>尚未备注</Button><Button  size="small" type="primary" style={{width:'40%'}}>修改</Button>
                                    <Button size="small" type="primary" style={{display:'block',width:'100%'}}>充值</Button></li>
                            </ul>
                        </Item>
                        <Item>
                            <ul className='nav_list_main'>
                                <li style={{width:"25%",lineHeight:'75px'}}><Icon type="android"/>20388</li>
                                <li style={{width:"25%",lineHeight:'75px'}}>0</li>
                                <li style={{width:"50%"}}><Button size="small" style={{width:'60%'}}>尚未备注</Button><Button  size="small" type="primary" style={{width:'40%'}}>修改</Button>
                                    <Button size="small" type="primary" style={{display:'block',width:'100%'}}>充值</Button></li>
                            </ul>
                        </Item>
                        <Item>
                            <ul className='nav_list_main'>
                                <li style={{width:"25%",lineHeight:'75px'}}><Icon type="android"/>20388</li>
                                <li style={{width:"25%",lineHeight:'75px'}}>0</li>
                                <li style={{width:"50%"}}><Button size="small" style={{width:'60%'}}>尚未备注</Button><Button  size="small" type="primary" style={{width:'40%'}}>修改</Button>
                                    <Button size="small" type="primary" style={{display:'block',width:'100%'}}>充值</Button></li>
                            </ul>
                        </Item>
                        <Item>
                            <ul className='nav_list_main'>
                                <li style={{width:"25%",lineHeight:'75px'}}><Icon type="android"/>20388</li>
                                <li style={{width:"25%",lineHeight:'75px'}}>0</li>
                                <li style={{width:"50%"}}><Button size="small" style={{width:'60%'}}>尚未备注</Button><Button  size="small" type="primary" style={{width:'40%'}}>修改</Button>
                                    <Button size="small" type="primary" style={{display:'block',width:'100%'}}>充值</Button></li>
                            </ul>
                        </Item>
                        <Item>
                            <ul className='nav_list_main'>
                                <li style={{width:"25%",lineHeight:'75px'}}><Icon type="android"/>20388</li>
                                <li style={{width:"25%",lineHeight:'75px'}}>0</li>
                                <li style={{width:"50%"}}><Button size="small" style={{width:'60%'}}>尚未备注</Button><Button  size="small" type="primary" style={{width:'40%'}}>修改</Button>
                                    <Button size="small" type="primary" style={{display:'block',width:'100%'}}>充值</Button></li>
                            </ul>
                        </Item>
                        <Item>
                            <ul className='nav_list_main'>
                                <li style={{width:"25%",lineHeight:'75px'}}><Icon type="android"/>20388</li>
                                <li style={{width:"25%",lineHeight:'75px'}}>0</li>
                                <li style={{width:"50%"}}><Button size="small" style={{width:'60%'}}>尚未备注</Button><Button  size="small" type="primary" style={{width:'40%'}}>修改</Button>
                                    <Button size="small" type="primary" style={{display:'block',width:'100%'}}>充值</Button></li>
                            </ul>
                        </Item>
                        <Item>
                            <ul className='nav_list_main'>
                                <li style={{width:"25%",lineHeight:'75px'}}><Icon type="android"/>20388</li>
                                <li style={{width:"25%",lineHeight:'75px'}}>0</li>
                                <li style={{width:"50%"}}><Button size="small" style={{width:'60%'}}>尚未备注</Button><Button  size="small" type="primary" style={{width:'40%'}}>修改</Button>
                                    <Button size="small" type="primary" style={{display:'block',width:'100%'}}>充值</Button></li>
                            </ul>
                        </Item>
                        <Item>
                            <ul className='nav_list_main'>
                                <li style={{width:"25%",lineHeight:'75px'}}><Icon type="android"/>20388</li>
                                <li style={{width:"25%",lineHeight:'75px'}}>0</li>
                                <li style={{width:"50%"}}><Button size="small" style={{width:'60%'}}>尚未备注</Button><Button  size="small" type="primary" style={{width:'40%'}}>修改</Button>
                                    <Button size="small" type="primary" style={{display:'block',width:'100%'}}>充值</Button></li>
                            </ul>
                        </Item>
                    </List>
                </div>
                <div style={{textAlign:'center',position:'fixed',bottom:'0',width:'100%',zIndex:'888'}}>
                    <Button size="large"  style={{width:'100%'}} type="primary" loading={this.state.loading} htmlType="submit" className="login-form-button">
                        确认
                    </Button>
                </div>
            </div>

        )
    }
}

export default IndexList ;