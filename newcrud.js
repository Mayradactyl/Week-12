//CRUD - create, read, update, delete
var row = null;
function Submit() {
    var dataEntered = retriveData();
    var readData = readingDataFromLocalStorage(dataEntered);
    if(row == null) {
        insert(readData);
        msg.innerHTML = "Data Inserted!"
    }
    else {
        update();
        msg.innerHTML = "Data Updated!"
    }
    
    
}
function retriveData() {
    var name1 = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;

    var array = [name1, age, email];
    array.includes()
    return array;
}

function readingDataFromLocalStorage(dataEntered) {
    var n = localStorage.setItem("Name", dataEntered[0]);
    var a = localStorage.setItem("Age", dataEntered[1]);
    var e = localStorage.setItem("Email", dataEntered[2]);

    var n1 = localStorage.getItem("Name", n);
    var a1 = localStorage.getItem("Age", a);
    var e1 = localStorage.getItem("Email", e);

    var array = [n1, a1, e1];
    if(array)
    return array;
}

function insert(readData) {
    var row = table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = `<button onclick = edit(this)>Edit</button> 
                                   <button onclick = remove(this)>Delete</button>`;
}
 
function edit(td) {
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("age").value = row.cells[1].innerHTML;
    document.getElementById("email").value = row.cells[2].innerHTML;
}
function update() {
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("age").value;
    row.cells[2].innerHTML = document.getElementById("email").value;
    row = null;
     
}
function remove(td) {
    var ans = confirm("Are you sure you want to delete this record?")
    if(ans == true) {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex)
    }
    
  
}

