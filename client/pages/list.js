var React = require('react')
import { List ,Button,WingBlank} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
import HeaderTitle from "../component/headerTitle"
import {connect} from 'react-redux';
import createHistory from 'history/createHashHistory';
const history = createHistory();
import {loginFn} from '../actions/index.redux'
class IndexList extends React.Component {
    constructor(...args){
        super(...args);
        this.state={
            loading:false
        }
    }
    componentDidMount(){
        document.getElementsByTagName('title')[0].innerText='登录页'
    }
    handleSubmit(e){
        e.preventDefault();
        var _thisState=this
        this.props.form.validateFields((err, values) => {
            var formData = this
                .props
                .form
                .getFieldsValue();
            if(!err){
                this.setState({loading:true});
                this.props.loginFn(values).then(data=>{
                    message.info(data.msg);
                    if(data.status==='ok'){
                        history.push('/index');
                    }else{
                        this.setState({loading:false});
                    }
                })
            }
        });
    }
    render() {
        return (
            <div>
                <HeaderTitle headertitle="General Manager"/>
                <List renderHeader={() => ''} className="my-list">
                    <Item arrow="horizontal" onClick={() => {}}>个人信的息</Item>
                </List>
                <List renderHeader={() => ''} className="my-list">
                    <Item arrow="horizontal" onClick={() => {}}>经理管理</Item>
                    <Item arrow="horizontal" onClick={() => {}}>管理员管理</Item>
                    <Item arrow="horizontal" onClick={() => {}}>推荐人管理</Item>
                    <Item arrow="horizontal" onClick={() => {}}>机台管理</Item>
                    <Item arrow="horizontal" onClick={() => {}}>打印机管理</Item>
                </List>
                <List renderHeader={() => ''} className="my-list">
                    <Item arrow="horizontal" onClick={() => {}}>账目表</Item>
                    <Item arrow="horizontal" onClick={() => {}}>设置</Item>
                </List>
                <List renderHeader={() => ''} className="my-list">
                    <Item arrow="horizontal" onClick={() => {}}>玩家信息</Item>
                </List>
                <WingBlank className="indexList" style={{marginTop:20,padding:5}}>
                    <Button  size="large" type="primary">退出登录</Button>

                </WingBlank>
            </div>
        );
    }
}


const mapStatetoProps=(state=>{
    return {state}
});
const actionCreators={loginFn}
IndexList=connect(mapStatetoProps,actionCreators)(IndexList)

export default IndexList ;