//Sending data using XMLHttpRequest

var xmlData = "<Person firstname='Rick' lastname='Delorme' hairColor='Brown' eyeColor='Brown' />";
var xReq = new XMLHttpRequest();
xReq.open("POST", "/RecieveXMLData.aspx", false);
xReq.responseType;
xReq.send(xmlData);

//Serializing and deserializing JSON data
var person = {
    FirstName: "Rick",
    HairColor: "Brown"
};
var jsonPerson = JSON.stringify(person);

//Using Parse to return it back 
var req = new XMLHttpRequest();

req.open("GET", "MyJsonData.json", false);
req.send(null);
var jsonPerson = JSON.parse(req.responseText);

//Serializing and deserializing binary data
//retrieving a binary image object and deserializing it
var xReq = new XMLHttpRequest();
xReq.open("GET", "orange.jpg", false);
xReq.responseType = 'blob';
xReq.send(null);
var blob = xReq.response;
document.getElementById("result").src = URL.createObjectURL(blob);

//Inverse submited to server then serialized to BLOB
var xReq = new XMLHttpRequest();
xReq.open("POST", "saveImage.aspx", false);
xReq.responseType = 'blob';
xReq.send(data);