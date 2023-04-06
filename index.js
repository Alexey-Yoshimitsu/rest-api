const express  = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'data'
});

// simple query
const CreateInsertQuery = (id, email, password, token)=>{
query = "INSERT INTO `users` (`id`, `email`, `password`, `token`) VALUES ('"+id+"', '"+email+"', '"+password+"', '"+token+"');"
connection.query(query,
  function(err, results, fields) {
    console.log(err)
    console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
  }
);
}
const CreateSelectQuery = (query, count)=>{
    queryRun = "SELECT `id`, `email`, `password`, `token` FROM `users`"
    connection.query(queryRun,
      function(err, results, fields) {
        console.log(err)
        console.log(results); // results contains rows returned by server
        //console.log(fields); // fields contains extra meta data about results, if available
      }
    );
    }

const CreateUpdateQuery = (newtoken,id)=>{
        queryRun = "UPDATE `users` SET token = '"+newtoken+"' WHERE `id` = "+id+";"
        connection.query(queryRun,
          function(err, results, fields) {
            console.log(err)
            console.log(results); // results contains rows returned by server
            //console.log(fields); // fields contains extra meta data about results, if available
          }
        );
        }
    

const cookieParser = require('cookie-parser')
// use jsons to parse body
app.use(express.json())
app.use(cookieParser());


app.get("/api",(req,res)=>{
    
    res.cookie('token', '09884266-5cfc-4363-8959-73e84da144af', { expires: new Date(Date.now() + 900000), httpOnly: true })
    const result = CreateSelectQuery(count=1)
    //console.log(result[0])
    //res.cookie(``,`encrypted cookie string Value`);
    res.json({"status":"200"})
    
})


app.listen(3000, () => {
    console.log(`Example app listening on port 228`)
  })
