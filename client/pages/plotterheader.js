var React = require('react')
import {NavBar,Icon,Button} from 'antd-mobile';
import {Link,  Redirect,withRouter  } from 'react-router-dom'
class PlotterHeader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    rightContent={<Icon onClick={()=>{this.props.history.push("/manger/plotteradd")}} type="ellipsis"/>}
                    onLeftClick={()=>{this.props.url?this.props.history.push("/list"):this.props.history.push("/managerstatus")}}
                >打印机管理</NavBar>
            </div>
        );
    };
}
PlotterHeader=withRouter(PlotterHeader);
export default PlotterHeader;