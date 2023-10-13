const mongoose = require("mongoose");
mongoose.set("useNewUrlParser, true");

class Database{

    constructor(){
        this.connect();
    }

    connect(){
                    mongoose.connect("mongodb+srv://sabarikrishnaork:Sabari123@socioboardcluster.weg7iqs.mongodb.net/?retryWrites=true&w=majority")
            .then(() =>{
                console.log("Successfull");
            }
            )
            .catch((err) =>{
                console.log("error"+err);
            })
    }
}

module.exports = new Database();