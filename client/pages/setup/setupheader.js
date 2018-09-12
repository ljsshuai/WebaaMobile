var React = require('react')
import {NavBar,Icon,Button} from 'antd-mobile';
import {Link,  Redirect,withRouter  } from 'react-router-dom'
class SetupHeader extends React.Component{
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
                >设置</NavBar>

            </div>
        );
    };
}
SetupHeader=withRouter(SetupHeader);
export default SetupHeader;