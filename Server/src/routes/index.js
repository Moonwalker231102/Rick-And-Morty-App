const {getCharById} = require("../controllers/getCharById.js");
const {login} = require("../controllers/login.js");
const {postFav, deleteFav} = require("../controllers/handleFavorites.js");
const {getAllChars} = require('../controllers/getAllChars.js');
const saveApiData = require("../controllers/saveApiData.js");
const router = require('express').Router();

router.get('/login', login);

router.post("/saveChars", async (req, res) => {
    try {
        const characters = saveApiData();
        return res.status(200).json("Se cargaron los personajes");
    } catch (error) {
        res.status(404).send({error: error.message});
    }
})
router.get('/allCharacters', async (req, res)=>{
    try {
        const allCharacters = await getAllChars;
        res.status(200).json(allCharacters)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
router.get('/character/:id', (req, res) =>{
    getCharById(req, res);
});


router.post('/fav', (req, res) =>{
    postFav(req, res);
})

router.delete('/fav/:id', (req, res) =>{
    deleteFav(req, res);
})

module.exports = router;

