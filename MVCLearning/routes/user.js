const express = require("express");
const User = require("../Models/user");

const router = express.Router();

// Importing user controller
const { createUser, getUser,
    getUserById ,
    updateUserById,
    deleteUserById} = require("../Controllers/user");

router.post("/", createUser);


router.get("/",getUser );

router
  .route("/:id")
  .get(getUserById)
  .patch(updateUserById)

  .delete(deleteUserById);

module.exports = router;
