const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors());

const rappers = {

'21 savage':{
    'age':29,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
},
'chance the rapper':{
    'age': 29,
    'birthName': 'Chancelor Bennett',
    'birthLocation': 'Chicago,'
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
    console.log('html file request, sent html file');

}) 

// get request for js/main.js
app.get('/js/main.js', (request, response) => {
    response.sendFile(__dirname + '/js/main.js') // directory name + js file name. It will start looking for the file here
    console.log('js file request, sent js file');

}) 


// get request for CSS/style.css
app.get('/CSS/style.css', (request, response) => {
    response.sendFile(__dirname + '/CSS/style.css') // directory name + css file name. It will start looking for the file here
    console.log('stylesheet request, sent CSS file');
})


//get request for Rap Names API
app.get('/api/:rapperName',(request,response)=>{

    const rappersName = request.params.rapperName.toLowerCase(); // gets rapper name of the query parameter
    // response.json(rappers);
    if(rappers[rappersName]){ //if rapperName Exists withing rappers, it would evaluate to true
        response.json(rappers[rappersName])
        console.log(rappersName, rappers[rappersName]);
    }else{
        response.json(rappers['dylan']);
    }

});

// to addresss the 404 error when fetching with a blank name
app.get('/api/', (request, response) => {

    console.log('no name entered');
    response.json(rappers['dylan']);

});


app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`);
});




//https://rap-names-api-fun.herokuapp.com/api/

// https://simple-rap-api-best.herokuapp.com/