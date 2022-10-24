// Endpoints for external data
const { Router, response } = require('express');
const router = new Router();

const fetch = require('node-fetch');

router.get('/', () => {
    for(i=0;i<=25;i++){
        let url = 'https://api.chucknorris.io/jokes/random'
    fetch(url)
    .then(res => res.json())
    .then(data => mostrar(data))
    }
    

    //res.json(data);
});

const mostrar = (data) =>{
    
    let array=[];
        array.push(data)
        a = data.id;
        if(a !== "0pVqmSRmTgGX13bbK2658A" ){
            console.log(array);
        }else{
            console.log("no hay cohincidencia")
        }

}

module.exports = router;
