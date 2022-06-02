
document.querySelector('button').addEventListener('click',getRapperName);

//to use with our server.js
async function getRapperName(){

    try{
    const name = document.querySelector('input').value;
    const res = await fetch(`/api/${name}`);
    const data = await res.json();
    console.log(data);
    document.querySelector('h2').textContent = data.birthName;
    }
    catch{
        console.log('error');
    }

}

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
//        
// 
//     }
// 
// }
