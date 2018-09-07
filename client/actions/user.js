const Login = 'login';
const LoginOut = 'loginOut';
import fetch from '../component/fetch';
const initData = {
    // token: localStorage.getItem('token'),
    // isLogin: localStorage.getItem('isLogin'),
    user: 'test',
}

if (initData.isLogin) {
    // fetch
    // var formData = new FormData();
    // formData.append('token', initUser.token);
    // var opts = {
    //     method: "POST", //请求方法
    //     body: formData, //请求体
    //     credentials: 'include'
    // }
    // fetch('http://43.246.214.1/zjh/admin/info/q', opts).then(res => {
    //     return res.json();
    // }).then(resData => {
    //     if (resData.status > 650) {
    //         initUser.isLogin = false;
    //         history.push('./')
    //     }
    // }).catch((error) => {
    //     initUser.isLogin = false;
    //     history.push('./')
    // })
}



export function user(state = initData, action) {
    switch (action.type) {
        case Login:
            localStorage.setItem('isLogin', true)
            localStorage.setItem('_token',action.userdata.data.token);
            localStorage.setItem('roleAccess',JSON.stringify(action.userdata.data.roleAccess));
            return Object.assign(state,{ roleAccess:action.userdata.data.roleAccess,isLogin: true,_token:action.userdata.data.token, token: action.userdata,user:action.userdata.data._id})
        case LoginOut:
            localStorage.clear();
            return { isLogin: false }
        // case 'article':
        //     if(action.tableData.status==='ok'){
        //
        //         return Object.assign(state,{tableData:action.tableData.data.listdata,total:action.tableData.data.total})
        //     }else{
        //         localStorage.clear();
        //         return Object.assign(state,{isLogin:false})
        //     }
        // case 'website':
        //     if(action.tableData.status==='ok'){
        //         console.log(action.tableData.data.data,'website')
        //         return Object.assign(state,{websitetableData:action.tableData.data.listdata,websitetotal:action.tableData.data.total})
        //     }else{
        //         localStorage.clear();
        //         return Object.assign(state,{isLogin:false})
        //     }
        // case 'websitefrontQuery':
        //     if(action.tableData.status==='ok'){
        //         console.log(action.tableData.data.data,'websitefrontQuery')
        //         return Object.assign(state,{frontQuerytableData:action.tableData.data.listdata,websitetotal:action.tableData.data.total})
        //     }else{
        //         localStorage.clear();
        //         return Object.assign(state,{isLogin:false})
        //     }
        // case 'editPassword':
        //     if(action.tableData.status==='ok'){
        //         console.log(action.tableData.data.data,'user')
        //         return Object.assign(state,{usertableData:action.tableData.data.listdata,usertotal:action.tableData.data.total})
        //     }else{
        //         localStorage.clear();
        //         return Object.assign(state,{isLogin:false})
        //     }
        // case 'access':
        //     if(action.tableData.status==='ok'){
        //         console.log(action.tableData.data.data,'access')
        //         return Object.assign(state,{accesstableData:action.tableData.data.listdata,accesstotal:action.tableData.data.total})
        //     }else{
        //         localStorage.clear();
        //         return Object.assign(state,{isLogin:false})
        //     }
        // case 'role':
        //     if(action.tableData.status==='ok'){
        //         console.log(action.tableData.data.data,'role')
        //         return Object.assign(state,{roletableData:action.tableData.data.listdata,roletotal:action.tableData.data.total})
        //     }else{
        //         localStorage.clear();
        //         return Object.assign(state,{isLogin:false})
        //     }


        default:
            return state
    }
}



export function login(userdata) {
    return { type: Login, userdata: userdata }
}
export function loginFn(resdata) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            fetch('userLogin',{'name':resdata.loginName,'password':resdata.password}).then(data => {
                if(data.status==='ok') dispatch(login(data))
                resolve(data)
            })
        })
    }
}
export function article(data) {
    return { type: 'article', tableData: data }
}








export function refund(data) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            fetch(data.bank_type==='支付宝'?'zfbRefund':'refund', Object.assign({data:JSON.stringify(data),_token:initData._token},{})).then(data => {
                // type==='delete'?null:dispatch({ type: 'refund', refundData: data })
                resolve(data)
            })
        })
    }
}


export function aboutUs(data) {
    return { type: 'AboutUs', tableData: data }
}



export function loginout() {
    return { type: LoginOut }
}