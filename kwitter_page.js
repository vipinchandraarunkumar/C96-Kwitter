//YOUR FIREBASE LINKS
var firebaseConfig = { apiKey: "AIzaSyDcTRPekUCAqoGhynSmV5XH6y1tZHcIAJE", authDomain: "classtest-b0b92.firebaseapp.com", databaseURL: "https://classtest-b0b92-default-rtdb.firebaseio.com", projectId: "classtest-b0b92", storageBucket: "classtest-b0b92.appspot.com", messagingSenderId: "202461636", appId: "1:202461636:web:3183e5913aebc5263dd491" };

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function send()
{
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name : user_name,
       message : msg,
       like : 0
 });
 document.getElementById("msg").value="";
}