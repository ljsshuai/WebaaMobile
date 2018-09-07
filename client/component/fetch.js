import  config from '../../public/config';
// import fetch from 'isomorphic-fetch';
function fetchFn(url,req){
    return  new Promise((resolve, reject) =>{
        var formData = new FormData();
        for (var i in req){
            formData.append(i,req[i])
        }
        formData.append('_token',localStorage.getItem('_token'));
        console.log(config.url+'api/'+url)
        fetch(config.url+'api/'+url, {
            headers: {
                "Authorization": "Bearer "+localStorage.getItem('_token')
            },
            method: 'POST',
            body:formData,
            // credentials: 'include' //   强制加入d凭据头
        }).then(res => {

            return res.json()
        }).then(resdata => {
            resolve(resdata)
        }).catch(err => {
            console.log(err)
            reject(err)
        });
    })
}


module.exports=fetchFn;