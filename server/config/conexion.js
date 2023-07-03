const mysql = require('mysql');

let connection = {
    host:"localhost",
    user:"root",
    password:"password",
    database:"test"
}

let con = mysql.createConnection(connection);

class Access {
    connection (){
        con.connect(function (error){
            try {
                if (error){
                    console.log("Error")
                }else {
                    console.log("Connection success")
                }
            }catch (x){
                console.log(x)
            }
        });
        return this;
    }
}
let obj = new Access();

module.exports = obj;



