import express from "express"
import  Jwt  from "jsonwebtoken"
const app = express()
app.use(express.json)
const port = 5555
//const user = {
//  id:0, 
//  email : req.body.email,
//  password : req.body.password,
//  fio  : req.body.fio,
//  isAdmin:0,
//
//  }
//



app.post("/reg", (req, res) => {

  // Our register logic starts here
    // Get user input
    const email = req.body.email;
    const password= req.body.password;
    console.log(email, password)
    // Validate user input
    //if (!(email && password)) {
    //  res.status(400).send("All input is required");
    //  
    //}
    //console.log("val yr")
    // check if user already exist
    // Validate if user exist in our database
    //const oldUser = await User.findOne({ email });

    //if (oldUser) {
    //  return res.status(409).send("User Already Exist. Please Login");
    //}

    //Encrypt user password
    //encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    //const user = await User.create({
    //  first_name,
    //  last_name,
    //  email: email.toLowerCase(), // sanitize: convert email to lowercase
    //  password: encryptedPassword,
    //});

    // Create token
    const token = Jwt.sign(
      { email: email,
      password:password
      })
    // save user token
    //user.token = token;

    // return new user
    res.json(token);
  // Our register logic ends here
});


app.get("/api/login",(req,res)=>{
  res.sendStatus(200)
})

app.post("/api/firebase",(req,res)=>{
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})