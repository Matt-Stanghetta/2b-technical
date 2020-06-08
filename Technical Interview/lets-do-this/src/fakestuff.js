var payload = JSON.stringify({
  "token": "XiKKu7e22vGX3rUv3w0Ojw",
  "data": {
    "Name": "name",
    "ID":"numberInt",
    "Email":"internetEmail",
    "_repeat": 3
  }
});

// Create a variable that stores the XMLHttpRequest object
var request = new XMLHttpRequest();
request.withCredentials = true;

// Initialize the request – specify that the request is a POST and add the URL endpoint
request.open("POST", "https://app.fakejson.com/q");
request.setRequestHeader("content-type", "application/json");

// Send the request
request.send(payload);


request.onload = function(){
  // Access the FakeJSON response - in JSON.
  var fakeData = JSON.parse(this.response);
  let table = document.querySelector("table");
  let data = Object.keys(fakeData[0]);
  generateTable(table,fakeData);
  generateTableHead(table,data);
}

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    //let counter = 0;
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }

    //NOTE: add a delete button to each table row
    let delButtonElement = document.createElement("button");
    let editButtonElement = document.createElement("button");

    //NOTE: add text to the button
    delButtonElement.appendChild( document.createTextNode( "Delete" ) );
    editButtonElement.appendChild( document.createTextNode( "Edit" ) );
    //NOTE: add a click event listener to delete the row from the DOM
    delButtonElement.addEventListener( "click", function onRemoveRowClicked() {
      row.parentElement.removeChild( row );
    } )

    editButtonElement.addEventListener("click", function onEditRowClicked(){
      //Changes row to test data but breaks buttons, and shifts record to bottom.
      /* 
      let newrow = table.insertRow();
      newrow.insertCell(0).appendChild(document.createTextNode("test@test.com"));//.innerHTML = "test@test.com";
      newrow.insertCell(1).appendChild(document.createTextNode("1"));//.innerHTML = "1";
      newrow.insertCell(2).appendChild(document.createTextNode("testy test"));//.innerHTML = "testy test";
      newrow.appendChild(delButtonElement);
      newrow.appendChild(editButtonElement);
      newrow.parentElement.appendChild(newrow);
      row.parentElement.removeChild(row);
      */
      //Cycles the top record to the bottom
      /*Bones of a dead trial*/
      var table = document.getElementsByTagName('tbody');
      table = table[0];
      var rows = table.getElementsByTagName('tr');
      var shifted = rows[0];
      rows[0].parentNode.removeChild(rows[0]);
      table.appendChild(shifted);
    
    });
    //counter++;
    row.appendChild(delButtonElement);
    row.appendChild(editButtonElement);
  }
}
