const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/addcontact", async (req, res) => {
  try {
    const { name, email, subject } = req.body;
    const contact = new Contact({
      name,
      email,
      subject,
    });
    const saveContact = await contact.save();
    res.json(saveContact);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Some error occured");
  }
});

module.exports = router;
