var React = require('react')
var ReactDOM = require('react-dom')
import Contents from './component/content';
import {Link, history, Redirect} from 'react-router-dom';
// import './public/css/login.css';
import {allMenu} from './utils/menu';
import {connect} from 'react-redux';
import {loginout, loginFn, login} from './actions/index.redux'
import {Flex, WhiteSpace} from 'antd-mobile';

const PlaceHolder = ({className = '', ...restProps}) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);



class Index extends React.Component {
    constructor(...args) {
        super(...args);//
        this.state = {
            username: 'parry',
            age: 20000,
            collapsed: false,
            openKeys: [],
            allMenuparend: [],
            localToken: null
        }
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentWillMount() {
        //定义你的逻辑即可
        this.setState({
            localToken: localStorage.getItem('token')
        })

    }

    componentDidMount() {
        document.getElementsByTagName('title')[0].innerText = '组件化网站管理'
        let arraprend = [];
        allMenu.map(value => {
            arraprend.push(value.url)
        });
        // var LocalStorageVal=localStorage.getItem('token')
        this.setState({
            allMenuparend: arraprend,
        })
        this.render();
    }

    changeUserInfo() {
        this.setState({age: 50});

    }

    handleChildVal(ev) {
        this.setState({
            age: ev.target.value
        })
    }

    getNavMenuItems(menusData, acl) {
        if (!menusData) {
            return [];
        }
        var roleAccess = this.props.state.userLogin.roleAccess ? this.props.state.userLogin.roleAccess.map(val => val.urls) : null;
        return menusData.map((item) => {
            if (!item.name) {
                return null;
            }
            let itemPath;
            if (item.children && item.children.some(child => child.name)) {
                return (
                    <SubMenu key={item.url} title={<span><Icon type={item.icon}/><span>{item.name}</span></span>}>
                        {this.getNavMenuItems(item.children, item.url === 'system' ? 'acl' : null)}
                    </SubMenu>
                );
            }
            const icon = item.icon && <Icon type={item.icon}/>;
            if (acl === 'acl' && this.props.state.userLogin.roleAccess) {
                console.log(roleAccess, item.url)
                return roleAccess.indexOf(item.url) !== -1 ? (
                    <Menu.Item key={item.url}>
                        <Link to={`/${item.url}`}>
                            <Icon type={item.icon}/><span className="nav-text">{item.name}</span>
                        </Link>
                    </Menu.Item>
                ) : null;
            } else {
                return (
                    <Menu.Item key={item.url}>
                        <Link to={`/${item.url}`}>
                            <Icon type={item.icon}/><span className="nav-text">{item.name}</span>
                        </Link>
                    </Menu.Item>
                );

            }

        });
    }

    LoginOut(e) {
        e.preventDefault()
        console.log(this.props);

        this.props.loginout();
    }

    onOpenChange(openKeys) {
        const lastOpenKey = openKeys[openKeys.length - 1];
        openKeys.find(function (key) {
        })
        if (this.state.allMenuparend.indexOf(lastOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: lastOpenKey ? [lastOpenKey] : [],
            });
        }
    }

    render() {

        const app =   <div className="flex-container">
            <div className="sub-title">Basic</div>

            <div className="sub-title">Basic</div>
        </div>
        const isLogin =  app
        return isLogin
    }
}


const mapStatetoProps = (state => {
    return {state}
});
const actionCreators = {loginout, login, loginFn}
Index = connect(mapStatetoProps, actionCreators)(Index)

export default Index
// Index=connect()(Index)

