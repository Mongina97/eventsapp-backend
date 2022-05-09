const express = require('express');
const Place = require("../models/place");
const router = new express.Router();

router.post("/places", async (req, res) => {
    const task = new Place(req.body);
    
    try{
      await place.save();
      res.status(201).send(place)
  } catch (error) {
      res.status(400).send(error)
  }
      });
  
    
    router.get("/places/:id", async(req, res) => {
        const _id = req.params.id;
      
        Place.findById(_id)
        
        try{
          const places = await Place.findById(_id)
          if(!place){ 
              return res.status(404).send();
          }
          res.send(place);
          } catch (error) {
          res.status(400).send(error)
      }
      }); 
      router.get("/places", async(req, res) => {
  
        try{
            const places = await Place.find({})
            res.send(places);
        } catch (error) {
            res.status(400).send(error)
        }
      });
      router.get("/places", async (req, res) => {
        try {
          const places = await Task.find({});
          res.send(places);
        } catch (error) {
          res.status(500).send(error);
        }
      });
      
      router.get("/places/:id", async (req, res) => {
        const _id = req.params.id;
      
        try {
          const place = await Place.findById(_id);
          if (!place) {
            return res.status(404).send();
          }
      
          res.send(place);
        } catch (error) {
          res.status(500).send(error);
        }
      });

      router.patch("/places/:id", async (req, res) => {
        const updates = Object.keys(req.body);
        const allowedUpdates = ["title", "amount", "date"];
        const isValidOperation = updates.every((update) =>
          allowedUpdates.includes(update)
        );
      
        if (!isValidOperation) {
          return res.status(400).send({ error: "Invalid updates!" });
        }
      
        try {
          const place = await Place.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
          });
      
          if (!place) {
            return res.status(404).send();
          }
      
          res.send(place);
        } catch (e) {
          res.status(400).send(e);
        }
      });
      
      router.delete("/places/:id", async (req, res) => {
        try {
          const place = await Place.findByIdAndDelete(req.params.id);
      
          if (!place) {
            res.status(404).send();
          }
      
          res.send(!place);
        } catch (error) {
          res.status(500).send(error);
        }
      });
      
      module.exports = router;