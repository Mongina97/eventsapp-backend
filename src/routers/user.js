const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/users", async (req, res) => {
    const user = new User(req.body);
  
  try{
      await user.save();
      res.status(200).send(user)
  } catch (error) {
      res.status(400).send(error)
  }
  });

  router.post('/users/login', async(req, res) => {
      try {
          const user = await User.findByCredentials(
              req.body.email,
              req.body.password
          );
          const token = await user.generateAuthToken();
          res.send({ user, token });
          res.send(user);
        } catch(error) {
          res.status(400).send(error);
      }
  })
  
  router.get("/users/me", auth, async(req, res) => {
    res.send(req.user);
    });
  
  router.get("/users/:id", async(req, res) => {
    const _id = req.params.id;
  
    try{
      const users = await User.findById()
      if(!user){ 
          return res.status(404).send();
      }
          res.send(users);
  } catch (error) {
      res.status(400).send(error)
  }
  });
  
  router.patch("/users/:id", async (req, res) => {
      const updates = Object.keys(req.body);
      const allowedUpdates = ["name", "email", "password", "age"];
      const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
      );
    
      if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid updates!" });
      }
    
      try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        });
    
        if (!user) {
          return res.status(404).send();
        }
    
        res.send(user);
      } catch (e) {
        res.status(400).send(e);
      }
    });
    
    router.delete("/users/:id", async (req, res) => {
        try {
          const user = await User.findByIdAndDelete(req.params.id);
      
          if (!user) {
            res.status(404).send();
          }
      
          res.send(user);
        } catch (error) {
          res.status(500).send(error);
        }
      });

    module.exports = router;