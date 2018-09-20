var React = require('react')
import {NavBar,Icon,Button} from 'antd-mobile';
import {Link,  Redirect,withRouter  } from 'react-router-dom'
class MangerHeader extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    rightContent={<Button type="warning" style={{height:'34px',lineHeight:'34px',width:'60px',fontSize:'13px',background:'#87cff7'}}>刷新</Button>}
                >Reference</NavBar>
            </div>
        );
    };
}
MangerHeader=withRouter(MangerHeader);
export default MangerHeader;