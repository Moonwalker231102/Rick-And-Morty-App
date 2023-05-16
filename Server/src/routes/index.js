const {getCharById} = require("../controllers/getCharById.js");
const {login} = require("../controllers/login.js");
const {postFav, deleteFav} = require("../controllers/handleFavorites.js");
const {getAllChars} = require('../controllers/getAllChars.js')

const router = require('express').Router();

router.get('/rickandmorty/allCharacters', async (req, res)=>{
    try {
        const allCharacters = await getAllChars;
        res.status(200).json(allCharacters)
    } catch (error) {
        res.status(404).send('Hubo un problema')
    }
})
router.get('/character/:id', (req, res) =>{
    getCharById(req, res);
});

router.get('/login', login);

router.post('/fav', (req, res) =>{
    postFav(req, res);
})

router.delete('/fav/:id', (req, res) =>{
    deleteFav(req, res);
})

module.exports = router;

