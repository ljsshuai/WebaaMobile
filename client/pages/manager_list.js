var React = require('react');
import {SearchBar,NavBar} from 'antd-mobile';
import MangerHeader from './manger_header';
import '../public/css/managerlist.css';
class MangerList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <MangerHeader  url="/"/>
                    <SearchBar showCancelButton  placeholder="请输入ID(五位数字)"/>
                <div >
                    <ul className='daohang'>
                        <li><a>状态</a></li>
                        <li><a>类型</a></li>
                        <li><a>备注名</a></li>
                        <li><a>当前积分</a></li>
                        <li><a>功能操作</a></li>
                    </ul>
                </div>


            </div>
        );
    };
}
export default MangerList;