const expess = require('express');
const app = expess();

app.get("/",(req,res)=>{
    res.send("Hello World");
});

PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});