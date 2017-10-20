const path = require("path");

const users = require('./../controller/users.js')

module.exports = app => {
    app.post("/login", users.login);
    app.post("/addQuestion", users.addQuestion);
    app.get("/getAllQuestons", users.getAllQuestons); 
    app.get("/getAllUsers", users.getAllUsers);
    app.put("/update", users.update);
    app.get("*" , ( req,res ) => res.sendFile(path.resolve("./client/dist/index.html")));
}