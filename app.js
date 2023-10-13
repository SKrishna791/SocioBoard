const express = require('express');
const app = express();
const port = 3003;
const middleware = require('./middleware')
const path = require('path')
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://sabarikrishnaork:Sabari123@socioboardcluster.weg7iqs.mongodb.net/?retryWrites=true&w=majority")
.then(() =>{
    console.log("Successfull");
}
)
.catch((err) =>{
    console.log("error"+err);
})

const server = app.listen(port,() => console.log("Server listening on port " + port));

app.set("view engine" , "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(express.static(path.join(__dirname, "public")))

const loginRoute =  require('./routes/loginRoutes');
const registerRoute =  require('./routes/registerRoutes');

app.use("/login", loginRoute );
app.use("/register", registerRoute );


app.get("/",middleware.requireLogin, (req, res, next) => {

    var payload = {
        pageTitle: "Home"
    }
    res.status(200).render("home",payload);
})