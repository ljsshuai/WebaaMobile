const Login = 'login';
const LoginOut = 'loginOut';
import createHistory from 'history/createHashHistory';
import fetch from '../component/fetch';
const history = createHistory();
const initData = {
    token: localStorage.getItem('token'),
    isLogin: localStorage.getItem('isLogin'),
    user: 'lili',
    tableData:[],
    tableDataUs:[],
    websitetableData:[],
    websitetotal:0,
    usertableData:[],
    accesstableData:[],
    frontQuerytableData:[],
    accesstotal:0,
    roletableData:[],
    roletotal:0,
    usertotal:0,
    roleAccess:localStorage.getItem('roleAccess')?JSON.parse(localStorage.getItem('roleAccess')):null,
    total:0,
    _token:localStorage.getItem('_token')
}

console.dir(history)
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



export function userLogin(state = initData, action) {
    switch (action.type) {
        case Login:
            localStorage.setItem('isLogin', true)
            localStorage.setItem('_token',action.userdata.data.token);
            localStorage.setItem('roleAccess',JSON.stringify(action.userdata.data.roleAccess));
            return Object.assign(state,{ roleAccess:action.userdata.data.roleAccess,isLogin: true,_token:action.userdata.data.token, token: action.userdata,user:action.userdata.data._id})
        case LoginOut:
            localStorage.clear();
            return { isLogin: false }
        case 'article':
            if(action.tableData.status==='ok'){

                return Object.assign(state,{tableData:action.tableData.data.listdata,total:action.tableData.data.total})
            }else{
                localStorage.clear();
                return Object.assign(state,{isLogin:false})
            }
        case 'website':
            if(action.tableData.status==='ok'){
                console.log(action.tableData.data.data,'website')
                return Object.assign(state,{websitetableData:action.tableData.data.listdata,websitetotal:action.tableData.data.total})
            }else{
                localStorage.clear();
                return Object.assign(state,{isLogin:false})
            }
        case 'websitefrontQuery':
            if(action.tableData.status==='ok'){
                console.log(action.tableData.data.data,'websitefrontQuery')
                return Object.assign(state,{frontQuerytableData:action.tableData.data.listdata,websitetotal:action.tableData.data.total})
            }else{
                localStorage.clear();
                return Object.assign(state,{isLogin:false})
            }
        case 'editPassword':
            if(action.tableData.status==='ok'){
                console.log(action.tableData.data.data,'user')
                return Object.assign(state,{usertableData:action.tableData.data.listdata,usertotal:action.tableData.data.total})
            }else{
                localStorage.clear();
                return Object.assign(state,{isLogin:false})
            }
        case 'access':
            if(action.tableData.status==='ok'){
                console.log(action.tableData.data.data,'access')
                return Object.assign(state,{accesstableData:action.tableData.data.listdata,accesstotal:action.tableData.data.total})
            }else{
                localStorage.clear();
                return Object.assign(state,{isLogin:false})
            }
        case 'role':
            if(action.tableData.status==='ok'){
                console.log(action.tableData.data.data,'role')
                return Object.assign(state,{roletableData:action.tableData.data.listdata,roletotal:action.tableData.data.total})
            }else{
                localStorage.clear();
                return Object.assign(state,{isLogin:false})
            }


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
export function ArticleFn(type,formValue) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            fetch('article', Object.assign({type:type},formValue)).then(data => {
                    type==='delete'?null:dispatch(article(data))
                    resolve(data)
            })
        })
    }
}
export function websiteFn(type,formValue) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            fetch('webSite', Object.assign({type:type},formValue)).then(data => {
                if(type==='frontQuery'){
                    type==='delete'?null:dispatch({ type: 'websitefrontQuery', tableData: data })
                }else{
                    type==='delete'?null:dispatch({ type: 'website', tableData: data })
                }
                resolve(data)
            })
        })
    }
}
export function userFn(type,formValue) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            fetch('editPassword', Object.assign({type:type},formValue)).then(data => {
                type==='delete'?null:dispatch({ type: 'editPassword', tableData: data })
                resolve(data)
            })
        })
    }
}


export function accessFn(type,formValue) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            fetch('access', Object.assign({type:type},formValue)).then(data => {
                type==='delete'?null:dispatch({ type: 'access', tableData: data })
                resolve(data)
            })
        })
    }
}
export function roleFn(type,formValue) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            fetch('role', Object.assign({type:type},formValue)).then(data => {
                type==='delete'?null:dispatch({ type: 'role', tableData: data })
                resolve(data)
            })
        })
    }
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
export function aboutUsFn(type,formValue) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            fetch('AboutUs', Object.assign({type:type},formValue)).then(data => {
                    type==='delete'?null:dispatch(aboutUs(data))
                resolve(data)
            })
        })
    }
}



export function loginout() {
    return { type: LoginOut }
}