const User = require("../Models/user");

async function createUser(req, res) {
  try {
    const user = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      gender: req.body.gender,
      job_title: req.body.job_title,
    });

    return res.send("User created successfully!");
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).send("Internal Server Error");
  }
}


async function getUser(req, res) {

  try{

         const allUser = await User.find({});

  res.send(allUser);
  }catch(error) {
    console.error("Error fetching users:", error);
    return res.status(500).send("Internal Server Error");
  }

}


async function getUserById( req, res) {
   try{
   const userId = req.params.id;
       const findUser = await User.findById(userId);
       if (!findUser) {
         return res.status(404).send("User not found");
       } else {
         return res.send(findUser);
       }
   }catch{
    console.error("Error fetching user by ID:", error);
    return res.status(500).send("Internal Server Error");
   }
}

async function updateUserById(req, res) {
   try{
       await User.findByIdAndUpdate(req.params.id, {
             first_name: req.body.first_name,
             last_name: req.body.last_name,
             email: req.body.email,
           });
           return res.send("User updated successfully!");
   } catch (error) {
    console.error("Error updating user by ID:", error);
    return res.status(500).send("Internal Server Error");
}
}

async function deleteUserById(req, res) {
 try{
     const userId = req.params.id;
    const findUser = await User.findByIdAndDelete(userId);
    if (!findUser) {
      return res.status(404).send("User not found");
    } else {
      return res.send("User deleted successfully!");
    }
 } catch (error) {
    console.error("Error deleting user by ID:", error);
    return res.status(500).send("Internal Server Error");
  }
}

module.exports = {

    createUser,
    getUser,
    getUserById ,
    updateUserById,
    deleteUserById

  
}