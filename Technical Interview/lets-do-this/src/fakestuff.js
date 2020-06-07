var data = JSON.stringify({
  "token": "AKI_GrHR7WwjLreZP4oF4Q",
  "data": {
    "Name": "name",
    "ID":"numberInt",
    "Email":"internetEmail",
    "_repeat": 15
  }
});

// Create a variable that stores the XMLHttpRequest object
var request = new XMLHttpRequest();
request.withCredentials = true;

// Initialize the request – specify that the request is a POST and add the URL endpoint
request.open("POST", "https://app.fakejson.com/q");
request.setRequestHeader("content-type", "application/json");

// Send the request
request.send(data);


request.onload = function(){
  // Access the FakeJSON response - in JSON.
  var fakeData = JSON.parse(this.response);
  let table = document.querySelector("table");
  let data = Object.keys(fakeData[0]);
  generateTable(table,fakeData);
  generateTableHead(table,data);
  //console.log(fakeData);
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
      //not done yet
    });
    row.appendChild(delButtonElement);
    row.appendChild(editButtonElement);
  }
}
