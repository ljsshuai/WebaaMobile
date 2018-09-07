import React from 'react';
import { Route ,Redirect,Switch} from 'react-router-dom'
import { Layout } from 'antd';

import articleList from '../pages/articleList'

import {connect} from "react-redux";
import {loginout} from "../actions/index.redux";
const { Content } = Layout

class Contents extends React.Component {
  constructor(...args){
    super(...args);
  }

  render() {
        console.log(this.props.roleAccess,999999)
    return (
      <Content className="content">
      <Switch>
          <Route path="/index/articleList"  component={articleList} />
            <Redirect to="/index"></Redirect>
          </Switch>
      </Content>
    );
  }
}
// const mapStatetoProps=(state=>{
//     return {state}
// });
// const actionCreators={loginout}
// Contents=connect(mapStatetoProps,actionCreators)(Contents)
// {(()=>{
//     return   this.props.roleAccess.map(val=>{
//             console.log(val,6666)
//             switch (val.urls) {
//                 case 'index/userlist':
//                     return <Route path={`/${val.urls}`} key={`/${val.urls}`} component={userlist}/>
//                     break;
//                 case 'index/rolelist':
//                     return <Route path={`/${val.urls}`} key={`/${val.urls}`} component={rolelist}/>
//                     break;
//                 case 'index/access':
//                     return <Route path={`/${val.urls}`} key={`/${val.urls}`} component={access}/>
//                     break;
//                 case 'index/Website':
//                     return <Route path={`/${val.urls}`} key={`/${val.urls}`} component={Website}/>
//                     break;
//                 default:
//                     break;
//             }
//         }
//     )
// })()}

export default Contents