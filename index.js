const express  = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid');
//const mysql = require('mysql2');



//const connection = async (query)=>{
//  let conn = await  mysql.createConnection({
//      host: 'localhost',
//      user: 'root',
//      database: 'data'
//    })
//    
//    
//  return conn.execute(query)
//}


// simple query
//query = "INSERT INTO `users` (`id`, `
//queryRun = "SELECT `id`, `email`, `password`, `token` FROM `users`"

//queryRun = "UPDATE `users` SET token = '"+newtoken+"', "+auth+" WHERE `id` = "+id+";"
//email`, `password`, `token`) VALUES ('"+id+"', '"+email+"', '"+password+"', '"+token+"');"
    

//queryRun = "UPDATE `users` SET token = '"+newtoken+"', "+auth+" WHERE `id` = "+id+";"

//async function connectionClose (){
//  await connection.close()
//}
  
//await connection.query("SELECT `id`, `email`, `password`, `token` FROM `users` WHERE `email`= "+email+", `password`="+password,

const cookieParser = require('cookie-parser')
// use jsons to parse body
app.use(express.json())
app.use(cookieParser());

app.get("/api",(req,res)=>{
    
    //res.cookie('token', '09884266-5cfc-4363-8959-73e84da144af', { expires: new Date(Date.now() + 900000), httpOnly: true })
    //const result = CreateUpdateQuery(uuidv4(),1)
    //let cookie = res.cookies;
    //console.log(cookie);
    //console.log(result[0])
    if(res.cookie.token == undefined && {}){
      res.redirect("/api-auth")
    }
    else{
      res.json({"status":200})
    }
    //console.log(req.cookies.token);
    
})
app.get("/api-auth",(req,res)=>{
    
  //res.cookie('token', '09884266-5cfc-4363-8959-73e84da144af', { expires: new Date(Date.now() + 900000), httpOnly: true })
  //const result = CreateSelectQuery(count=1)
  //let cookie = res.cookies;
  let answer ={
    id:1,
    
    email
  }


  let email = req.body.email
  let password = req.body.password
  //let answer = connection('SELECT `id`, `email`, `password`, `token` FROM `users` WHERE `email`="shandov466@gmail.com"')


  //if(req.body.email == )
  res.json({email:email, password: password})
  
})

app.listen(3000, () => {
    console.log(`Example app listening on port 228`)
  })
