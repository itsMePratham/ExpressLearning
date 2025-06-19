const express = require("express");
const app = express();
// require data from a file
const users = require("./MOCK_DATA.json");
 const fs =require("fs");

//middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({extended:true}));





app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `<ul>
          
          ${users
            .map((user) => {
              return `<li>
            
                 ${user.first_name}
            </li>`;
            })
            .join("")}
          
          
          </ul>`;

  return res.send(html);
});

app.post("/api/users",(req, res)=>{

         let  newUser ={

            id: users.length + 1,
            first_name: req.body.first_name,      
            last_name: req.body.last_name,
            email: req.body.email,
            job_title : req.body.job_title,
         }

          users.push(newUser);
          // Save the updated users array to the JSON file
          fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2) ,(err) => {
            if (err) {  
                
              console.error("Error writing to file:", err)
              return res.status(500).json({ error: "Failed to save user" });
            }
            else {
              console.log("User saved successfully");
            }
          });

          return res.status(201).json({
            message: "User created successfully", 
            user: newUser

          });
   
})

app.route("/api/users/:id").get( (req, res) => {

 const userId = req.params.id;



    const user = users.find((user) => user.id === parseInt(userId));
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  } else {
    return res.json(user);
  }


}).patch((req, res) => {

     const userId = req.params.id;
     const  updatedData = req.body;

     const userIndex = users.findIndex((user)  => user.id === parseInt(userId));
     if (userIndex ===-1) {
       return res.status(404).json({ error: "User not found" });
     }

      // Update the user properties with the provided data

      users[userIndex] = {
        ...users[userIndex], 
        ...updatedData
      };

      fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
        if (err) {
          console.error("Error writing to file:", err);
          return res.status(500).json({ error: "Failed to update user" });
        } else {
          res.send({

            status: "success"
          });
        }
      });


}).delete((req, res) => {

    const userId = req.params.id;
    const userIndex = users.findIndex((user) => user.id === parseInt(userId));
    if (userIndex === -1) {   
      return res.status(404).json({ error: "User not found" });
    }

    // Remove the user from the array
    users.splice(userIndex, 1);
    // Save the updated users array to the JSON file
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error("Error writing to file:", err);
        return res.status(500).json({ error: "Failed to delete user" });
      } else {
        return res.status(204).send(); // No content
      }
    });
}
);


PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
