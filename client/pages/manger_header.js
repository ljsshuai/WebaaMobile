var React = require('react')
import {NavBar,Icon,Button} from 'antd-mobile';
class MangerHeader extends React.Component{
    constructor(){
        super();
        this.state={

        };
    }
    render(){
        return(
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    rightContent={<Icon  type="ellipsis" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >经理管理</NavBar>
            </div>
        );
    };
}
export default MangerHeader;