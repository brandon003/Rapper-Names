const { application } = require('express');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const rappers = {

'21 savage':{
    'age':29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
},
'chance the rapper':{
    'age': 29,
    'birthName': 'Chance the Rapper',
    'birthLocation': 'London, England'
},
'dylan': {
    'age': 29,
    'birthName': 'Dylan',
    'birthLocation': 'Dylan'
}
}
// get request for main page aka '/'
app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html') // directory name + html name. It will start looking for the file here
}) 

// get request for main page aka '/'
app.get('/js/main.js', (request, response) => {
    response.sendFile(__dirname + '/js/main.js') // directory name + js file name. It will start looking for the file here
}) 


//get request for Rap Names API
app.get('/api/:rapperName',(request,response)=>{

    const rappersName = request.params.rapperName.toLowerCase(); // gets rapper name of the query parameter
    // response.json(rappers);

    if(rappers[rappersName]){ //if rapperName Exists withing rappers, it would evaluate to true
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan']);
    }

});



app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`);
});


//https://rap-names-api-fun.herokuapp.com/