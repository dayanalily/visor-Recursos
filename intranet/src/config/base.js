let api = "http://[::1]:3000/"; //'http://192.168.1.87:4444/';
if(window.location.host.match('localhost')){
    //api = 'http://localhost:5000/';
}

export default{
    api,
   // cdn: 'https://cdn.gardenhouse.smartraining.cl/',
    config : {headers: {'Authorization: Bearer ': sessionStorage.token}}
}
