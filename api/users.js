const UserController = require('../controllers/users');
const express = require ('express');

const router = express.Router();

router.get("/all", UserController.findAllUsers);

router.get("/:id", UserController.findById);

//router.post("/add", UserController.addUser);

router.post("/add", (req, res) =>{
    const usuarios = new User(req.body);
    usuarios.save();
    res.redirect('/');
    //res.send("Datos Guardados")
})

module.exports = router;