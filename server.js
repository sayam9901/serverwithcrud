var express = require("express");
var bodyParser = require('body-parser')
const random=require("random")
var app = express();

app.use(bodyParser.json());

// app.get("/",(req,res)=>{
//     console.log(req.body);
//     res.send("hello");
// })

// app.post("/login",(req,res)=>{
//     const userName=req.body.userName;
//     const password=req.body.password;
//     console.log(userName);
//     console.log(password);
//     res.send("hbnb");
// })

// app.get("/users",(req,res)=>{
//     res.send("send users");
// })


//CRUD operations

var users=[
    {id:48589485,name:"muskan",age:17},
    {id:48589445,name:"shymi",age:47},
    {id:48589456,name:"futkan",age:57},
    {id:48589489,name:"khan",age:47}
];

//get request to get the user from local-database
 app.get("/api/users",(req,res)=>{
    res.json(users);
 })
 
 //search user data by using the id that is dynamic in api call
 app.get("/api/users/:id",(req,res)=>{
    const id= parseInt(req.params.id);
    const user= users.find((user)=>user.id===id);
    if(!user){
        res.status(404).json({message:"user donesnt exits for that id"})
    }
    res.send(user);
 })
 //create and post the new data to the dataabse

 app.post("/api/users",(req,res)=>{

    if(!req.body.name || !req.body.age ){
        res.status(400).json({message:"enter the correct and compelete data only"})
    }
    const user={name:req.body.name,age:req.body.age,id:random.int(0,10000000)}
    users.push(user);
    res.send("hehehe")
 })

app.listen(8000,()=>{
    console.log("your server is running on port 8000")
})