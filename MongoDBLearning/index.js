const express = require("express");
const userModel = require("./MongoosLearn");
const app = express();



 app.get("/" ,(req , res) => {
  res.send("Hello, World!");        
});

app.get("/create",   async (req , res) =>{


   let createdUser =  await userModel.create({
        name: "Naitik",
        username: "Naitik Anand",
        email: "john@gmaail.com"
      })


    res.send(createdUser);
})

app.get("/update", async(req, res)=>{

    const updatedUser = await userModel.findOneAndUpdate(
      {username :"Naitik Anand"}, // Filter to find the document
      {
        name: "pushpa",
      }
    , { new: true } // This option returns the updated document

    )
       res.send(updatedUser);

})


app.get("/users" ,async (req ,res) =>{

    const allUser = await userModel.find({});
    res.send(allUser);


})

app.get("/user/:id", async(req, res)=>{

  const userId = req.params.id;
  const user = await userModel.findById(userId);


     res.send(user);



})

app.get("/delete/:id" , async(req , res)=>{


   const userId = req.params.id;
   const deletedUser = await userModel.findByIdAndDelete(userId);

   res.send(deletedUser);



})

PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
