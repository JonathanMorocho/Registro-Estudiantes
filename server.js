const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require('multer');
const router = express.Router();
const mimeTypes = require('mime-types');



const Users = require ('./api/users');
const { resolveSoa } = require("dns");

/*router.get('/', (req, res) =>{
    res.render('index.html')
});*/

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api/users', Users);

app.get("/",(req, res) =>{
    //res.send("Mote")
    console.log("Dorectproo del proyecto" + __dirname);
    res.sendFile(__dirname + "/views/index.html");
})

router.post('/add', async(req, res) =>{
    const task = new User(req.body);
    console.log(res.body);
    await task.save();
    console.log("Guardado");   
    res.redirect('index.html');
});  


const ruta = require('./api/users.js');
app.use("/", ruta);

//PARA SUBIR ARCHIVOS-----------------------------------------------------------

const storageDoc = multer.diskStorage({
    destination: 'uploads', 
    filename: function(req,file,cb){
        console.log(Date.now());
        //cb("", Date.now() + "." + mimeTypes.extension(file.mimetype));
       // cb("", Date.now() + "." + mimeTypes.extension(file.originalname));
       cb("",file.originalname);

    }
});

const storageIMG = multer.diskStorage({
    destination: 'uploadsIMG', 
    filename: function(req,file,cb){
        console.log(Date.now());
        //cb("", Date.now() + "." + mimeTypes.extension(file.mimetype));
        //cb("", Date.now() + "." + mimeTypes.extension(file.originalname));
        cb("",file.originalname);
    }
});


const uploadDoc = multer({
    //dest: 'uploads/'
    storage: storageDoc
});


const uploadIMG = multer({
    //dest: 'uploads/'
    storage: storageIMG
});


//POSTO PARA DOCUMENTOS
app.post("/files/documentos", uploadDoc.array('avatar2'),(req, res) => {
    //res.redirect('inicio.html');
    //res.send("Archivo subido correctamente...!!!")
    res.redirect('/');

});

//POSTO PARA IMAGENES
app.post("/files/img", uploadIMG.array('avatar'),(req, res) => {
    //res.redirect('inicio.html');
    res.redirect("/");

});
//IMAGENES







//CONEXION
mongoose.connect(
    "mongodb://localhost/estudiantes",
    { useNewUrlParser:true},
    (err,res) => {
        err && console.log('Error conectando a la Base de Datos MongoDB');
        app.listen(4000, () => {
            console.log('Servidor corriendo en http://localhost:4000');
        })
    }
)