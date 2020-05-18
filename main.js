
var config = {
    
  apiKey: "AIzaSyC4cUBXNamrRj6mXNbcbY7uBXnCy5FSO4U",
  authDomain: "hello-84f30.firebaseapp.com",
  databaseURL: "https://hello-84f30.firebaseio.com",
  projectId: "hello-84f30",
  storageBucket: "hello-84f30.appspot.com",
  messagingSenderId: "943987259399",
  appId: "1:943987259399:web:694accf648de27262292a2",
  measurementId: "G-W8CXVFXW4N"

};
firebase.initializeApp(config);
var messagesRef = firebase.database().ref('messages');
document.getElementById('contactForm').addEventListener('submit', submitForm);
function submitForm(e){
e.preventDefault();

var name = getInputVal('name');
saveMessage(name);
document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name){
var newMessageRef = messagesRef.push();
newMessageRef.set({
name: name,

});
}