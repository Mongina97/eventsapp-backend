const express = require("express");
require("./db/mongoose");
const Place = require("./models/place");
const User = require("./models/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/places", async (req, res) => {
  const place = new Place(req.body);

  try {
    await place.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/users", async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/places", async(req, res) => {

  try{
    const places = await Place.find({})
    res.send(places);
} catch (error) {
    res.status(400).send(error)
}
});

app.get("/places/:id", async(req, res) => {
  const _id = req.params.id;

  try{
    const place = await Place.findById()
    if(!place){ 
        return res.status(404).send();
    }
        res.send(places);
} catch (error) {
    res.status(400).send(error)
}
});

app.get("/users", async(req, res) => {

  try{
    const users = await User.find({})
    res.send(users);
} catch (error) {
    res.status(400).send(error)
}
});

app.get("/users/:id", async(req, res) => {
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

app.listen(port, () => {
  console.log("server is running on port " + port);
});
