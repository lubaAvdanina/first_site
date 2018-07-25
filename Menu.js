function showMenu(){
    var x = document.getElementById("myTopnav");
    if(x.className==="topnav"){
        x.className+=" responsive";
    }else{
        x.className="topnav";
    }
}
fetch('http://localhost:3000/users')
.then(response => response.json())
.then(data => {
    data.forEach(row =>{
        let tr = document.createElement('tr');
        tr.innerHTML = "<td>" + row.name + "</td><td>" + row.age + "</td>";
        users.appendChild(tr);
    });
})
.catch(error => console.error(error))