
document.querySelector('button').addEventListener('click',getRapperName);

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


// 
// const userName = document.querySelector("#userName").value;
// const res = await fetch(`/api?student=${userName}`)
// const data = await res.json()
// 
// console.log(data);
// document.querySelector("#personName").textContent = data.name
// document.querySelector("#personStatus").textContent = data.status
// document.querySelector("#personOccupation").textContent = data.currentOccupation