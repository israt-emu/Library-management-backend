const app = require("./app")
const dotenv = require("dotenv").config();
const db = require("./db/db")
const PORT = process.env.PORT||5000;

// database connection 
db()


// create server 
app.listen(PORT,()=>{
    console.log(`---Server is Listening On PORT ::: ${PORT}`);
})