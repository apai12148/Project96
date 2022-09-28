var firebaseConfig = {
    apiKey: "AIzaSyCH2kMVSGPTNG2LNzG_YoLbg9oipYQhgzQ",
    authDomain: "classtest-58de2.firebaseapp.com",
    projectId: "classtest-58de2",
    storageBucket: "classtest-58de2.appspot.com",
    messagingSenderId: "709970277497",
    appId: "1:709970277497:web:8337e85c1717ba9d8f50a8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData
      } });  }); }
      
getData();


function send(){
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name: user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}