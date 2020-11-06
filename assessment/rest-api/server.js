var express=require('express');

var app=express();

var userList=require('./user.json');

var cors = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
}
app.use(cors);

app.get("/showAll",function(req,res){

res.status(200).send(bookList);

})

.get('/:username', function (req, res) {
    // find an object from `data` array match by `id`
    var user=req.query.username;

  

    userList.forEach(user1=>{
if(user1.username==user){
        console.log("choose a different username");

    }
    else{

        return user1.username+" "+user1.city+" "+user1.email+" "+user1.phone;
    }
});
    res.status(200).send(newBookList);
});



app.listen('3000',function(){

    console.log('server 3000');
})
