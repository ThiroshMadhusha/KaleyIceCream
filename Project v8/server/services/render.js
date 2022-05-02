const axios = require('axios');

exports.homeRoutes = (req,res)=>{
    //Make a get request api/userss
    axios.get('http://localhost:8000/api/userss')
    .then(function(response){
        res.render('index',{userss:response.data});
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.add_user = (req,res)=>{
    res.render('add_user');
}

exports.update_user = (req,res)=>{
    axios.get('http://localhost:8000/api/userss',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render('update_user',{user:userdata.data});
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.user_profile = (req,res)=>{
    axios.get('http://localhost:8000/api/userss',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render('user_profile',{user:userdata.data});
    })
    .catch(err=>{
        res.send(err);
    })
}