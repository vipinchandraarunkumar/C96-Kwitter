
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = { apiKey: "AIzaSyDcTRPekUCAqoGhynSmV5XH6y1tZHcIAJE", authDomain: "classtest-b0b92.firebaseapp.com", databaseURL: "https://classtest-b0b92-default-rtdb.firebaseio.com", projectId: "classtest-b0b92", storageBucket: "classtest-b0b92.appspot.com", messagingSenderId: "202461636", appId: "1:202461636:web:3183e5913aebc5263dd491" };

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";


function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}


    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name- "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}