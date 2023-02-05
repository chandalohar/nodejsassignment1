let express  = require("express");
let cors = require("cors");
let app  = express();
let dbConfig = require("./config/dbConfig");
let studentRouter = require("./router/studentRouter");
let loginRouter = require("./router/loginRouter");

dbConfig.dbConnection;  // calling this variable to get the connection 

app.use(express.json());
app.use(cors());            // disable cors policy 



app.use("/api/students",studentRouter);
app.use("/api/login",loginRouter);



app.listen(3000,()=>console.log("server running on port number 3000"));