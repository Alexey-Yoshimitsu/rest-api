const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const jwt  = require("jsonwebtoken")
const mysql2 = require("mysql2")

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'helpydb'
});

// simple query
function Query(query){
  connection.query(query,
    function(err, results, fields) {
      console.log(err); // results contains rows returned by server
      return results; // fields contains extra meta data about results, if available
    }
  );
  }

  


app.get('/', (req, res) => {
  res.send('Hello World!')

})

app.post('/req', (req, res) => {
  const email = req.body.email;
  const password= req.body.password;
  const fio  = req.body.fio

  console.log(email, password)
  if(email&&password&&fio){
    const token = jwt.sign({email:email, password:password},"shit")
    //user.token = token;

    // return new user
    res.send(token);
    Query(`INSERT INTO users (jwttoken, is_admin, email, password, fullname) VALUES (${token},${0},${password},${fio});`)
  }else{
    res.send("something data uncaught")
  }
  //const token = encodeBase64Url(email+password+Date.now())    // save user token
  
})


app.post('/me', (req, res, ) => {
  res.send(jwt.decode(req.body.jwt))

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})