const express = require("express");
const router = express.Router();
const Pet = require("../models/Pet");

// GET all pets
router.get("/", async (req, res) => {
    const pets = await Pet.find();
    res.json(pets);
});

// ADD pet
router.post("/", async (req, res) => {
    const newPet = new Pet(req.body);
    await newPet.save();
    res.json(newPet);
});

// DELETE pet
router.delete("/:id", async (req, res) => {
    await Pet.findByIdAndDelete(req.params.id);
    res.json({ message: "Pet adopted!" });
});

// ✨ UPDATE pet (NEW)
router.put("/:id", async (req, res) => {
    const updatedPet = await Pet.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updatedPet);
});

module.exports = router;