
const fs = require("fs");


function logReqRes(filename){



    return (req,res,next) => {


        fs .appendFile(filename ,`${Date.now()}:${req.ip} ${req.method}:${req.path}`,(err)=>{
            if(err) {
                console.error("Error writing to file:", err);
            }   
else {
                next()
            }
        });
    }
}

module.exports = {
    logReqRes
};