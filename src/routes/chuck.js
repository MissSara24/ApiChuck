// Endpoints for external data
const { Router } = require('express');
const router = new Router();

const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    traer(data);
        res.json(data);
});
function traer(data){
    let array = [];
        for(i=0; i<=25;i++){
            array.push(data);
            console.log(array)
            }
        }

module.exports = router;