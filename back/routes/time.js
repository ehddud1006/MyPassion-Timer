const router = require("express").Router();
const User = require("../models/User");
const Time = require("../models/Time");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  var username = req.body.username;
  console.log(req.body);
  console.log("plz");
  try {
    var time;
    if (username) {
      time = await Time.find({ username });
    }
    res.status(200).json(time);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/submit", async (req, res) => {
  try {
    const time = await Time.findById(req.body.id);
    if (time.username === req.body.username) {
      try {
        const updatedTime = await Time.findByIdAndUpdate(
          req.body.id,
          {
            $set: { time: req.body.time },
          },
          { new: true }
        );
        res.status(200).json(updatedTime);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let posts;
    posts = await Time.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
