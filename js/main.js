
document.querySelector('button').addEventListener('click',getRapperName);

//to use with our server.js
async function getRapperName(){

    const name = document.querySelector('input').value;

    try {
    if(name == 'error'){
        throw 'throw error'
    }
    const res = await fetch(`/api/${name}`);
    const data = await res.json();
    console.log(data);
    document.querySelector('h2').textContent = data.birthName;
    } catch (err){
        console.log(`error: ${err}, error.name: ${err.name}, error.message: ${err.message}, name entered was ${name}`);
    } finally {
        console.log('finally statement executed');
    }

}

// // Importing greetPerson from greetPerson.js file
// import { greetPerson } from './greetPerson.js';
// 
// // Using greetPerson() defined in greetPerson.js
// let displayName = greetPerson('Codecademy');
// 
// console.log(displayName);
// // Output: Hi, Codecademy
// 
// import { name, difference } from './module.js';
// 
// console.log(name); // Output: Codecademy Docs
// 
// let diff = difference(9, 5);
// 
// console.log(diff); // Output: 4






//to use the heroku server my version
// async function getRapperName() {
// 
//     try {
//         const name = document.querySelector('input').value;
//         const res = await fetch(`https://simple-rap-api-best.herokuapp.com/api/${name}`);
//         const data = await res.json();
//         console.log(data);
//         document.querySelector('h2').textContent = data.birthName;
//         let strName1 = 'hello, this is a .json string1'
//         console.log(strName1.json());
//     }
//     catch {
//         let strName2 = 'hello, this is a .json string2';
//         console.log('error', JSON.stringify(strName2));
//     }
// 
// }



//to use the heroku server leons version
// async function getRapperName() {
// 
//     try {
//         const name = document.querySelector('input').value;
//         const res = await fetch(`https://rap-names-api-fun.herokuapp.com/api/${name}`);
//         const data = await res.json();
//         console.log(data);
//         document.querySelector('h2').textContent = data.birthName;
//         let strName1 = 'hello, this is a .json string1'
//         console.log(strName1.json());
//     }
//     catch {
//         let strName2 = 'hello, this is a .json string2';
//         console.log('error', JSON.stringify(strName2));
//     }
// 
// }
