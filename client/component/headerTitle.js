var React = require('react')
import '../public/css/login.scss';
class HeaderTitle extends React.Component {
    constructor(...args){
        super(...args);
        this.state={
            loading:false
        }
    }
    componentDidMount(){
        document.getElementsByTagName('title')[0].innerText='登录页'
    }

    render() {
        return (
            <div  className="loginTitle">
                {this.props.headertitle}
            </div>
        );
    }
}

export default HeaderTitle;